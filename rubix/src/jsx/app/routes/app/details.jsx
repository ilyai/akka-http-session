var Header = require('../../common/header.jsx');
var Sidebar = require('../../common/sidebar.jsx');
var Footer = require('../../common/footer.jsx');


var MapContainer = React.createClass({
  render: function() {
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












  componentDidMount: function() {

    var map;
    var latlng = new google.maps.LatLng(41.711879781934556, 44.791259765625);
    var latlng2 = new google.maps.LatLng(41.670879781934556, 44.766200765625);
    function initialize() {
      var  latlng = {lat: 41.711879781934556, lng: 44.791259765625};
      var map = new google.maps.Map(document.getElementById('map_canvas'), {
        zoom: 12,
        center: new google.maps.LatLng(41.700279781934556, 44.791259765625),
        mapTypeId: google.maps.MapTypeId.ROADMAP
      });

      var marker = new google.maps.Marker({
            position: latlng,
            map: map,
            draggable:false,
            title: 'Hello World!'
      });
      var marker2 = new google.maps.Marker({
            position: latlng2,
            map: map,
            title: 'Hello World!',
            draggable:false,
      });

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

      var circleRadius2 = {
            strokeColor: "#252938",
            strokeOpacity: 0.6,
            strokeWeight: 1,
            fillColor: "#4981fc",
            fillOpacity: 0.35,
            map: map,
            center: latlng,
            radius: 1500 // in meters
      };

      radius = new google.maps.Circle(circleRadius);
      radius.bindTo('center', marker2, 'position');

      radius = new google.maps.Circle(circleRadius2);
      radius.bindTo('center', marker, 'position');


    }
    initialize();

    $('.approve').on('click', function(){
      $(this).removeClass('btn-danger btn-outlined').addClass('btn-success').text("approved");

      console.log("clicked");
    });


    //bootstrap switchery
    $.fn.bootstrapSwitch.defaults.size = 'mini';
    $.fn.bootstrapSwitch.defaults.onColor = 'success';
    $('.my-checkbox').bootstrapSwitch('state', true, true);


},

  render: function() {
    return (
      <Container id='body'>
        <Grid>
          <PanelContainer noControls>
            <Panel>
              <PanelBody>
                <Grid>
                  <Row>
                    <Col xs={6}>
                      <h3><span>Xmas</span></h3>

                    </Col>
                    <Col xs={6}>
                      <Button outlined lg style={{marginBottom: 5}} bsStyle='danger pull-right ' className="approve">approve</Button>
                    </Col>
                  </Row>
                  <Row>
                    <Col sm={12}>
                      <MapContainer id='markers' name='Live streaming' />
                    </Col>
                  </Row>
                </Grid>
                <Grid>
                  <Row>
                    <Col xs={12}>
                      <Table striped>
                        <thead className='bg-darkgrayishblue75 fg-white'>
                          <tr>
                            <th>#</th>
                            <th>Selected Zones</th>
                            <th>Status(ON/OFF)</th>
                            <th>Creator/Author</th>
                            <th>Creation Date</th>
                            <th>End Date</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>1</td>
                            <td>sabutTalo, muxiani</td>
                            <td>
                              <Checkbox value='option1' className="my-checkbox" name='checkbox-options'></Checkbox>
                            </td>
                            <td>Europe-bet</td>
                            <td>25/12/2015</td>
                            <td>14/2/2016</td>
                          </tr>
                        </tbody>

                      </Table>
                    </Col>
                  </Row>
                </Grid>
                <hr className='hidden-print' style={{marginTop: 0}}/>
                <Grid>
                  <Row>
                    <Col xs={8}>
                      <img  src="/imgs/unsplash/hot-air-baloon.jpg" style={{width:'100%', height:256}}/>
                      <p>

                      </p>
                    </Col>
                    <Col xs={4}>
                      <div className='bg-darkgrayishblue75 text-uppercase text-centered'>
                          <h5 className='subheader fg-white' style={{margin: 0, padding: 12.5}}>amount due</h5>
                      </div>
                      <div>
                          <Table>
                            <tbody>
                              <tr>
                                <td>Number of Times Played</td>
                                <td>23</td>
                              </tr>
                              <tr>
                                <td>Average Cost</td>
                                <td>7$</td>

                              </tr>
                              <tr>
                                <td>Total Spent</td>
                                <td>$6,375</td>
                              </tr>
                            </tbody>
                          </Table>
                      </div>
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
var Details = React.createClass({
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

module.exports = Details;
