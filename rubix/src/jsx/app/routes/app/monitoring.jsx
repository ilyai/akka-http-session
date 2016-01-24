var Header = require('../../common/header.jsx');
var Sidebar = require('../../common/sidebar.jsx');
var Footer = require('../../common/footer.jsx');

var MapContainer = React.createClass({
  render: function() {
    return (
      <PanelContainer>
        <PanelHeader className='bg-green fg-white' style={{margin: 0}}>
          <Grid>
            <Row>
              <Col xs={12}>
                <h3>Monitoring</h3>
              </Col>
            </Row>
          </Grid>
        </PanelHeader>
        <Panel>
          <PanelBody style={{padding: 25}}>
            <h4 className='text-center' style={{marginTop: 0}}>{this.props.name}</h4>
            {this.props.children}
            <div id={this.props.id} style={{height: 600}}></div>
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
  render: function() {
    return (
      <Container id='body'>
        <Grid>
          <Row>
            <Col xs={12} collapseRight>
              <MapContainer id='markers' name='' />
            </Col>
          </Row>
        </Grid>
      </Container>
    );
  }
});

var classSet = React.addons.classSet;
var Monitoring = React.createClass({
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

module.exports = Monitoring;
