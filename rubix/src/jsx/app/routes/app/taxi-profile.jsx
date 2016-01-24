var Header = require('../../common/header.jsx');
var Sidebar = require('../../common/sidebar.jsx');
var Footer = require('../../common/footer.jsx');

var MapContainer = React.createClass({
  render: function() {
    return (
      <PanelContainer>
        <Panel>
          <PanelBody style={{padding: 0, margin:0, borderRadius:0, overflow:'hidden'}} >
            <h4 className='text-center' >{this.props.name}</h4>
            {this.props.children}
            <div id={this.props.id} style={{height: 334}}></div>
          </PanelBody>
        </Panel>
      </PanelContainer>
    );
  }
});


var SocialBanner = React.createClass({
  render: function() {
    return (

      <div style={{
        height: 350,
        marginTop: -25,
        backgroundSize: 'cover',
        position: 'relative',
        marginBottom: 25,
        backgroundPosition: 'center'
      }}>



        <div className='social-cover' style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.7)'
        }}>

        </div>
        <div className='social-desc' style={{}}>
          <Col xs={12} style={{padding:0, margin:0, borderRadius:0}}>
            <MapContainer id='markers' name='' noControls />
          </Col>

        </div>
        <div className='social-avatar'>
          <input type="image" src='/imgs/avatars/avatar.jpg' height='100' width='100' style={{
            display: 'block',
            borderRadius: 100,
            border: '2px solid #fff',
            margin: 'auto',
            marginTop: 50,
            outline:0,
            border:0
          }}/>
        <div style={{
            textAlign:'center',
          }}>
          <h3>Company name</h3>
          <h4>(032) 2 24 24 60</h4>
      </div>
        <div>

        </div>
        <input type="file" id="my_file"  className="hidden" />
          <hr className='border-black75' style={{
            borderWidth: 2
          }}/>

        </div>
      </div>
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

    $(".dlt-taxi").css({'border': '2px solid transparent'});
    $(".dlt-taxi").on("click", function(e){
      var $killrow = $(this).parent('td').parent('tr');
          $killrow.addClass("danger");
          $killrow.fadeOut(1000, function(e){
      });
    });



    //change profile pic
    $('html').addClass('social');
    $("input[type='image']").click(function() {
      $("input[id='my_file']").click();
    });

    (function() {

      // var latlng = new google.maps.LatLng(41.711879781934556, 44.791259765625);
      // var latlng2 = new google.maps.LatLng(41.700879781934556, 44.766200765625);
      var map = new GMaps({
        scrollwheel: false,
        div: '#markers',
        zoom: 11,
        lat: 41.711879781934556,
        lng: 44.791259765625,

      });

      map.addMarker({
        lat: 41.711879781934556,
        lng: 44.791259765625,
        title: 'Lima',
        click: function(e) {
          alert('You clicked in this marker');
        }
      });

      map.addMarker({
        lat: 41.700879781934556,
        lng: 44.766200765625,
        title: 'Lima',
        infoWindow: {
          content: '<p>Some content here!</p>'
        }
      });

      map.addMarker({
        lat: 41.640879781934556,
        lng: 44.766200765625,
        title: 'Lima',
        infoWindow: {
          content: '<p>Some content here!</p>'
        }
      });

      map.addMarker({
        lat: 41.700879781934556,
        lng: 44.676200765625,
        title: 'Lima',
        infoWindow: {
          content: '<p>Some content here!</p>'
        }
      });
    })();
  },


  componentWillUnmount: function() {
    $('html').removeClass('social');

  },
  render: function() {
    return (

      <Container id='body' className='social'>
        <SocialBanner/>
        <Grid>
          <Row>
            <Col xs={12}>
              <PanelContainer noControls>
                <Panel className='force-collapse'>
                    <PanelBody noControls>

                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <Row>
                            <Col xs={8}>
                              <LoremIpsum query='5s'/>
                            </Col>
                            <Col xs={4}>
                              <div className='text-right'>
                              
                              </div>
                            </Col>
                          </Row>
                          <IonTabContainer id='tabs_1' ref='ion_tab'>
                            <IonTabHead>
                              <IonTab>Taxies</IonTab>
                              <IonTab><span>Manage company </span><Icon glyph='icon-fontello-cog'/></IonTab>
                              <IonTab>About</IonTab>
                            </IonTabHead>
                            <IonTabBody>
                              <IonTabItem>

                                <Table striped  className='tablesaw' data-mode="stack" data-sortable data-sortable-switch data-mode-switch>
                                  <thead>
                                    <tr>
                                      <th data-sortable-col data-priority='8'>ID</th>
                                      <th data-sortable-col data-priority='7'>Name</th>
                                      <th data-sortable-col data-priority='6'>Surname</th>
                                      <th data-sortable-col data-priority='5'>Phone</th>
                                      <th data-sortable-col data-priority='4'>License palte</th>
                                      <th data-sortable-col data-priority='3'>Screen mode</th>

                                      <th data-sortable-col data-priority='2'>Delete</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td>1</td>
                                      <td>name </td>
                                      <td>surname</td>
                                      <td>phone</td>
                                      <td>123098</td>
                                      <td>LED</td>

                                        <td>
                                            <Input type='submit'  placeholder='Username' value="X" sm  className="btn-danger dlt-taxi"/>
                                        </td>
                                    </tr>
                                    <tr>
                                      <td>1</td>
                                      <td>name </td>
                                      <td>surname</td>
                                      <td>phone</td>
                                      <td>123098</td>
                                      <td>LED</td>

                                        <td>
                                            <Input type='submit'  placeholder='Username' value="X" sm  className="btn-danger dlt-taxi"/>
                                        </td>
                                    </tr>
                                    <tr>
                                      <td>1</td>
                                      <td>name </td>
                                      <td>surname</td>
                                      <td>phone</td>
                                      <td>123098</td>
                                      <td>LED</td>

                                        <td>
                                            <Input type='submit'  placeholder='Username' value="X" sm  className="btn-danger dlt-taxi"/>
                                        </td>
                                    </tr>
                                  </tbody>
                                </Table>
                              </IonTabItem>
                              <IonTabItem><LoremIpsum query='5s'/>
                                <h4>Manage Company</h4>
                                  <Grid>
                                    <Row>
                                      <Col xs={12}>
                                          <FormGroup>
                                            <Label htmlFor='companyName'>Company name</Label>
                                            <InputGroup>
                                              <InputGroupAddon>
                                                <Icon glyph='icon-fontello-mail' />
                                              </InputGroupAddon>
                                              <Input autoFocus type='text' id='companyName' placeholder='Company name' />
                                            </InputGroup>
                                          </FormGroup>
                                          <FormGroup>
                                            <Label htmlFor='Address'>Address</Label>
                                            <InputGroup>
                                              <InputGroupAddon>
                                                <Icon glyph='icon-fontello-user' />
                                              </InputGroupAddon>
                                              <Input autoFocus type='text' id='Address' placeholder='Address' />
                                            </InputGroup>
                                          </FormGroup>
                                          <FormGroup>
                                            <Label htmlFor='Surname'>Phone</Label>
                                            <InputGroup>
                                              <InputGroupAddon>
                                                <Icon glyph='icon-fontello-phone' />
                                              </InputGroupAddon>
                                              <Input autoFocus type='text' id='Phone' placeholder='Phone' />
                                            </InputGroup>
                                          </FormGroup>
                                          <FormGroup>
                                            <Label htmlFor='Director'>Director</Label>
                                            <InputGroup>
                                              <InputGroupAddon>
                                                <Icon glyph='icon-fontello-circle' />
                                              </InputGroupAddon>
                                              <Input autoFocus type='text' id='Director' placeholder='Director' />
                                            </InputGroup>
                                          </FormGroup>
                                      </Col>
                                    </Row>
                                  </Grid>
                              </IonTabItem>
                              <IonTabItem><LoremIpsum query='5s'/></IonTabItem>
                            </IonTabBody>
                          </IonTabContainer>

                        </Col>
                      </Row>
                    </Grid>
                  </PanelBody>
                </Panel>
              </PanelContainer>
            </Col>
          </Row>
        </Grid>
        {this.props.children}
      </Container>
    );
  }
});

var classSet = React.addons.classSet;
var TaxiProfile = React.createClass({
  mixins: [SidebarMixin],
  render: function() {
    var classes = classSet({'container-open': this.state.open});
    return (
      <Container id='container' className={classes}>
        <Sidebar/>
        <Header pressed/>
        <Body/>
        <Footer/>
      </Container>
    );
  }
});

module.exports = TaxiProfile;
