var Header = require('../../common/header.jsx');
var Sidebar = require('../../common/sidebar.jsx');
var Footer = require('../../common/footer.jsx');


var MapContainer = React.createClass({
  render: function() {
    //google map container
    return (
      <PanelContainer noControls>
        <Panel>
          <PanelBody style={{padding: 5}}>
          <div id="map_canvas" style={{height:500}}></div>
          </PanelBody>
        </Panel>
      </PanelContainer>
    );
  }
});

//create zone modal
function getModal()  {
  return (
      <Modal>
        <ModalHeader>
          <Button onClick={ModalManager.remove} onTouchEnd={ModalManager.remove} close />
          <h4 className='modal-title'>Modal title</h4>
        </ModalHeader>
        <ModalBody>

        </ModalBody>
        <ModalFooter>
          <Button outlined bsStyle='danger' onClick={ModalManager.remove} onTouchEnd={ModalManager.remove}>Close</Button>
          <Button outlined bsStyle='primary' onClick={this.handleClick}>Save changes</Button>
        </ModalFooter>
      </Modal>
  );
}


var Body = React.createClass({
  geocode: null,
  routingmap: null,
  getInitialState: function() {
    return {
      routeslist: []
    };
  },
  geoCode: function(address) {
    GMaps.geocode({
      address: address,
      callback: function(results, status) {
        if (status == 'OK') {
          var latlng = results[0].geometry.location;
          this.geocode.setCenter(latlng.lat(), latlng.lng());
          this.geocode.addMarker({
            lat: latlng.lat(),
            lng: latlng.lng(),
            infoWindow: {
              content: '<div><strong>Address:</strong> '+results[0].formatted_address+'</div>'
            }
          });
        }
      }.bind(this)
    });
  },

  //modal tooptips
  getModalWithTooltipsAndPopovers: function() {
    $.fn.editable.defaults.mode = 'inline';
    var modalVisible = function() {

      //modal times editing
      $('#times').editable({
        mode: this.state.mode,
        pk: 1,
        limit: 3,
        source: [
          {value: 1, text: 'monday'},
          {value: 2, text: 'Tuesday'},
          {value: 3, text: 'Wednesday'},
          {value: 4, text: 'Thursday'},
          {value: 5, text: 'Friday'},
          {value: 6, text: 'Saturday'},
          {value: 7, text: 'Sunday'}
        ]
       });

       //modal days editing
       $('#days').editable({
         mode: this.state.mode,
         pk: 1,
         limit: 3,
         source: [
           {value: 1, text: '08:00 - 12:00'},
           {value: 2, text: '12:00 - 18:00'},
           {value: 3, text: '18:00 - 24:00'},
           {value: 4, text: '24:00 - 08:00'}
         ]
        });
    };

    return (
      <Modal onShown={modalVisible}>
        <ModalHeader>
          <Button onClick={ModalManager.remove} onTouchEnd={ModalManager.remove} close />
          <h4 className='modal-title'>Create Zone</h4>
        </ModalHeader>
        <ModalBody>
          <Form>
            <Row>
              <Col xs={12}>
                <FormGroup>
                  <Label htmlFor='location'>Location</Label>
                    <InputGroup>
                      <InputGroupAddon>
                        <Icon glyph='icon-fontello-location-6' />
                      </InputGroupAddon>
                      <Input autoFocus type='text' id='location' placeholder='Location' />
                    </InputGroup>
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col xs={6}>
                <FormGroup>
                  <Label htmlFor='dollar'>Max-bid</Label>
                    <InputGroup>
                      <InputGroupAddon>
                        <Icon glyph='icon-fontello-dollar' />
                      </InputGroupAddon>
                      <Input autoFocus type='text' id='dollar' placeholder='Max-bid' />
                    </InputGroup>
                </FormGroup>
              </Col>
              <Col xs={6}>
                <FormGroup>
                  <Label htmlFor='radius'>Radius</Label>
                    <InputGroup>
                      <InputGroupAddon>
                        <Icon glyph='icon-fontello-eye-7' />
                      </InputGroupAddon>
                      <Input autoFocus type='text' id='radius' placeholder='Radius' />
                    </InputGroup>
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col xs={6}>
                  <p>
                    <h4>choose days of the week</h4>
                    <a href='#' key={this.state.refresh} id='times' data-type='checklist' data-value='2,3' data-title='Select fruits'></a>
                  </p>
                  </Col>
              <Col xs={6}>
                <p>
                  <h4>choose times of the day</h4>
                  <a href='#' key={this.state.refresh} id='days' data-type='checklist' data-value='2,3' data-title='Select fruits'></a>
                </p>
              </Col>
            </Row>
            <ModalFooter>
              <Button outlined bsStyle='danger' onClick={ModalManager.remove} onTouchEnd={ModalManager.remove}>Cancel</Button>
              <Button type="submit" outlined bsStyle='primary' onClick={this.handleClick}>Create</Button>
            </ModalFooter>
          </Form>
        </ModalBody>

      </Modal>
    );
  },



  componentDidMount: function() {

    //google maps functions
    var map;
    var latlng = new google.maps.LatLng(41.711879781934556, 44.791259765625);
    var latlng2 = new google.maps.LatLng(41.700879781934556, 44.766200765625);
    function initialize() {
      var  latlng = {lat: 41.711879781934556, lng: 44.791259765625};
      var map = new google.maps.Map(document.getElementById('map_canvas'), {
        zoom: 12,
        center: new google.maps.LatLng(41.711879781934556, 44.791259765625),
        mapTypeId: google.maps.MapTypeId.ROADMAP,

      });


      //first marker
      var marker = new google.maps.Marker({
            position: latlng,
            map: map,
            draggable:true,
            icon:"/imgs/marker.png"
      });

      //second default marker
      var marker2 = new google.maps.Marker({
            position: latlng2,
            map: map,
            title: 'Hello World!',
            draggable:true,
            icon:"/imgs/marker.png"
      });


      //marker radius circle
      var circleRadius = {
            strokeColor: "#252938",
            strokeOpacity: 0.6,
            strokeWeight: 1,
            fillColor: "#4981fc",
            fillOpacity: 0.35,
            map: map,
            center: latlng,
            radius: 1000 // in meters
      };

      //add another marker with radius
      google.maps.event.addListener(map, 'click', function(event) {
         var addMarker = placeMarker(event.latLng);
           google.maps.event.addListener(addMarker, 'click', function(event) {
           });
      });

      function placeMarker(location) {
          var addMarker = new google.maps.Marker({
              position: location,
              map: map,
              draggable:true,
              icon:"/imgs/marker.png"
          });
          radius = new google.maps.Circle(circleRadius);
          radius.bindTo('center', addMarker, 'position');
          return addMarker;
      }



      //DEFAULT MARKERS RADIUS
      radius = new google.maps.Circle(circleRadius);
      radius.bindTo('center', marker2, 'position');

      radius = new google.maps.Circle(circleRadius);
      radius.bindTo('center', marker, 'position');


    }
    initialize();


},

//CALL MODAL
getModal: getModal,


  render: function() {
    return (
      <Container id='body'>
        <Grid>
          <PanelContainer noControls>
            <PanelHeader className='bg-green fg-white'>
              <Panel>
                <Grid>
                  <Row>
                    <Col xs={12}>
                      <h3>Create Zone</h3>
                    </Col>
                  </Row>
                </Grid>
              </Panel>
            </PanelHeader>
            <Panel>
              <PanelBody>
                <Grid>
                  <Row>
                    <Col sm={12}>
                      <MapContainer id='markers' name='Live streaming' />
                    </Col>
                    <Col xs={12}>
                      <Button outlined bsStyle='primary pull-right' onClick={ModalManager.create.bind(this, this.getModalWithTooltipsAndPopovers())} onTouchEnd={ModalManager.create.bind(this, this.getModalWithTooltipsAndPopovers())}>Create Zone</Button>
                    </Col>
                    <Col xs={12}>
                      <Table id='zones-table' className='display' cellSpacing='0' width='100%'>
                        <thead>
                          <tr>
                            <th>Zones Name</th>
                            <th>Location</th>
                            <th>Radius</th>
                            <th>Max Bid</th>
                            <th>Times</th>
                            <th>Days</th>
                            <th>Edit</th>
                            <th>Choose</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Name</td>
                            <td>kostava str.</td>
                            <td>100M</td>
                            <td>0.7$</td>
                            <td>24</td>
                            <td>Days</td>
                            <td><Button  bsStyle='primary' onClick={ModalManager.create.bind(this, this.getModalWithTooltipsAndPopovers())} onTouchEnd={ModalManager.create.bind(this, this.getModalWithTooltipsAndPopovers())}>Edit</Button></td>
                            <td>
                              <FormGroup>

                                <Checkbox value='option1' name='checkbox-options'>
                                </Checkbox>

                              </FormGroup>
                            </td>
                          </tr>
                          <tr>
                            <td>Name1</td>
                            <td>Location</td>
                            <td>Radius</td>
                            <td>Max Bid</td>
                            <td>Times</td>
                            <td>Days</td>
                            <td><Button  bsStyle='primary' onClick={ModalManager.create.bind(this, this.getModalWithTooltipsAndPopovers())} onTouchEnd={ModalManager.create.bind(this, this.getModalWithTooltipsAndPopovers())}>Edit</Button></td>
                            <td>
                              <Checkbox value='option2' defaultChecked name='checkbox-options'>
                              </Checkbox>

                            </td>
                          </tr>
                          <tr>
                            <td>Name2</td>
                            <td>Location</td>
                            <td>Radius</td>
                            <td>Max Bid</td>
                            <td>Times</td>
                            <td>Days</td>
                            <td><Button  bsStyle='primary' onClick={ModalManager.create.bind(this, this.getModalWithTooltipsAndPopovers())} onTouchEnd={ModalManager.create.bind(this, this.getModalWithTooltipsAndPopovers())}>Edit</Button></td>
                            <td>
                              <Checkbox value='option3'  name='checkbox-options'>
                              </Checkbox>
                            </td>
                          </tr>
                        </tbody>
                      </Table>

                    </Col>

                  </Row>
                </Grid>
                <Grid>
                  <Row>
                    <Col xs={12} style={{marginBottom:10}}>
                      <Link to="/app/upload-img">
                        <Button outlined bsStyle='red pull-left'>back</Button>
                        </Link>
                        <Link to="/app/time">
                          <Button outlined bsStyle='green pull-right'>next</Button>
                        </Link>
                    </Col>
                  </Row>
                </Grid>
              </PanelBody>
            </Panel>
          </PanelContainer>
        </Grid>
      </Container>
    );
  }
});

var classSet = React.addons.classSet;
var Zones = React.createClass({
  mixins: [SidebarMixin],
  render: function() {
    var classes = classSet({
      'container-open': this.state.open
    });
    return (
      <Container id='container' className={classes}>
        <Sidebar />
        <Header />
        <Body />
        <Footer />
      </Container>
    );
  }
});

module.exports = Zones;
