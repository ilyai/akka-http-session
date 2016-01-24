var Header = require('../../common/header.jsx');
var Sidebar = require('../../common/sidebar.jsx');
var Footer = require('../../common/footer.jsx');

var MapContainer = React.createClass({
  render: function() {
    var colorButton = {
      width: '14px',
      height: '14px',
      fontSize: '0',
      margin: '2px',
      float: 'left'
    };
    return (
      <PanelContainer noControls>
        <Panel>

          <PanelBody style={{
            padding: 5
          }}>
            <div id="panel" style={{
              float: 'right'
            }}>
              <div id="color-palette" style={{
                clear: 'both'
              }}></div>
              <div>
                <Button id="delete-button" sm bsStyle="red">Delete Selected Shape</Button>
              </div>
            </div>

            <div id="map" style={{
              height: 450
            }}></div>
          </PanelBody>
        </Panel>
      </PanelContainer>
    );
  }
});

var Body = React.createClass({
  getInitialState: function() {
    return {styles: {}};
  },

  getModal: function() {
    $.fn.editable.defaults.mode = 'inline';
    var modalVisible = function() {
      $('#times').editable({
        mode: this.state.mode,
        pk: 1,
        limit: 3,
        source: [
          {
            value: 1,
            text: 'monday'
          }, {
            value: 2,
            text: 'Tuesday'
          }, {
            value: 3,
            text: 'Wednesday'
          }, {
            value: 4,
            text: 'Thursday'
          }, {
            value: 5,
            text: 'Friday'
          }, {
            value: 6,
            text: 'Saturday'
          }, {
            value: 7,
            text: 'Sunday'
          }
        ]
      });

      $('#days').editable({
        mode: this.state.mode,
        pk: 1,
        limit: 3,
        source: [
          {
            value: 1,
            text: '08:00 - 12:00'
          }, {
            value: 2,
            text: '12:00 - 18:00'
          }, {
            value: 3,
            text: '18:00 - 24:00'
          }, {
            value: 4,
            text: '24:00 - 08:00'
          }
        ]
      });
    };

    return (
      <Modal>
        <ModalHeader>
          <Button onClick={ModalManager.remove} onTouchEnd={ModalManager.remove} close/>
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
                      <Icon glyph='icon-fontello-location-6'/>
                    </InputGroupAddon>
                    <Input autoFocus type='text' id='location' placeholder='Location'/>
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
                      <Icon glyph='icon-fontello-dollar'/>
                    </InputGroupAddon>
                    <Input autoFocus type='text' id='dollar' placeholder='Max-bid'/>
                  </InputGroup>
                </FormGroup>
              </Col>
              <Col xs={6}>
                <FormGroup>
                  <Label htmlFor='radius'>Radius</Label>
                  <InputGroup>
                    <InputGroupAddon>
                      <Icon glyph='icon-fontello-eye-7'/>
                    </InputGroupAddon>
                    <Input autoFocus type='text' id='radius' placeholder='Radius'/>
                  </InputGroup>
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col xs={6}>
                <p>
                  <h4>choose times of the day</h4>
                  <a href='#' key={this.state.refresh} id='times' data-type='checklist' data-value='2,3' data-title='Select fruits'></a>
                </p>
              </Col>
              <Col xs={6}>
                <p>
                  <h4>choose days of the week</h4>
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
    var drawingManager;
    var selectedShape;
    var colors = ['#1E90FF', '#FF1493', '#32CD32', '#FF8C00', '#4B0082'];
    var selectedColor;
    var colorButtons = {};



    function clearSelection() {
      if (selectedShape) {
        selectedShape.setEditable(false);
        selectedShape = null;
      }
    }

    function setSelection(shape) {
      clearSelection();
      selectedShape = shape;
      shape.setEditable(true);
      selectColor(shape.get('fillColor') || shape.get('strokeColor'));
    }

    function deleteSelectedShape() {
      if (selectedShape) {
        selectedShape.setMap(null);
      }
    }

    function selectColor(color) {
      selectedColor = color;
      for (var i = 0; i < colors.length; ++i) {
        var currColor = colors[i];
        colorButtons[currColor].style.border = currColor == color ? '2px solid #789'   :  '2px solid #fff';
      }

      // Retrieves the current options from the drawing manager and replaces the
      // stroke or fill color as appropriate.
      var polylineOptions = drawingManager.get('polylineOptions');
      polylineOptions.strokeColor = color;
      drawingManager.set('polylineOptions', polylineOptions);

      var rectangleOptions = drawingManager.get('rectangleOptions');
      rectangleOptions.fillColor = color;
      drawingManager.set('rectangleOptions', rectangleOptions);

      var circleOptions = drawingManager.get('circleOptions');
      circleOptions.fillColor = color;
      circleOptions.style = "200px";
      drawingManager.set('circleOptions', circleOptions);

      var polygonOptions = drawingManager.get('polygonOptions');
      polygonOptions.fillColor = color;
      drawingManager.set('polygonOptions', polygonOptions);
    }

    function setSelectedShapeColor(color) {
      if (selectedShape) {
        if (selectedShape.type == google.maps.drawing.OverlayType.POLYLINE) {
          selectedShape.set('strokeColor', color);

        } else {
          selectedShape.set('fillColor', color);
        }
      }
    }

    function makeColorButton(color) {
      var button = document.createElement('span');
      button.className = 'btn-xs';
      button.style.backgroundColor = color;
      google.maps.event.addDomListener(button, 'click', function() {
        selectColor(color);
        setSelectedShapeColor(color);
      });

      return button;
    }

    function buildColorPalette() {
      var colorPalette = document.getElementById('color-palette');
      for (var i = 0; i < colors.length; ++i) {
        var currColor = colors[i];
        var colorButton = makeColorButton(currColor);
        colorPalette.appendChild(colorButton);
        colorButtons[currColor] = colorButton;
      }
      selectColor(colors[0]);
    }

    function initialize() {
      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: new google.maps.LatLng(41.711879781934556, 44.791259765625),
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        disableDefaultUI: true,
        zoomControl: true,
        disableDoubleClickZoom: true
      });

      var polyOptions = {
        strokeWeight: 0,
        fillOpacity: 0.45,
        editable: true,
        draggable:true
      };


      // Creates a drawing manager attached to the map that allows the user to draw
      // markers, lines, and shapes.
      drawingManager = new google.maps.drawing.DrawingManager({
        drawingMode: google.maps.drawing.OverlayType.POLYGON,
        markerOptions: {
          draggable: true,
          icon: "/imgs/marker.png"
        },
        polylineOptions: {
          editable: true
        },
        rectangleOptions: polyOptions,
        circleOptions: polyOptions,
        polygonOptions: polyOptions,
        map: map,


      });




      google.maps.event.addListener(drawingManager, 'overlaycomplete', function(e) {
        if (e.type != google.maps.drawing.OverlayType.MARKER) {
          // Switch back to non-drawing mode after drawing a shape.
          drawingManager.setDrawingMode(null);

          // Add an event listener that selects the newly-drawn shape when the user
          // mouses down on it.
          var newShape = e.overlay;
          newShape.type = e.type;
          google.maps.event.addListener(newShape, 'click', function() {
            setSelection(newShape);

          });

          google.maps.event.addListener(newShape, 'dblclick', function(){
            console.log("show modal");
          });

          setSelection(newShape);
        }

      });











      // Clear the current selection when the drawing mode is changed, or when the
      // map is clicked.
      google.maps.event.addListener(drawingManager, 'drawingmode_changed', clearSelection);
      google.maps.event.addListener(map, 'click', clearSelection);
      google.maps.event.addDomListener(document.getElementById('delete-button'), 'click', deleteSelectedShape);

      buildColorPalette();
    }



    initialize();

  },

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
                      <MapContainer id='markers' name='Live streaming'/>
                    </Col>
                    <Col xs={12}>
                      <Button outlined bsStyle='primary pull-right' onClick={ModalManager.create.bind(this, this.getModal())} onTouchEnd={ModalManager.create.bind(this, this.getModal())}>Create Zone</Button>
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
                            <td>
                              <Button bsStyle='primary' onClick={ModalManager.create.bind(this, this.getModal())} onTouchEnd={ModalManager.create.bind(this, this.getModal())}>Edit</Button>
                            </td>
                          </tr>
                          <tr>
                            <td>Name1</td>
                            <td>Location</td>
                            <td>Radius</td>
                            <td>Max Bid</td>
                            <td>Times</td>
                            <td>Days</td>
                            <td>
                              <Button bsStyle='primary' onClick={ModalManager.create.bind(this, this.getModal())} onTouchEnd={ModalManager.create.bind(this, this.getModal())}>Edit</Button>
                            </td>
                          </tr>
                          <tr>
                            <td>Name2</td>
                            <td>Location</td>
                            <td>Radius</td>
                            <td>Max Bid</td>
                            <td>Times</td>
                            <td>Days</td>
                            <td>
                              <Button bsStyle='primary' onClick={ModalManager.create.bind(this, this.getModal())} onTouchEnd={ModalManager.create.bind(this, this.getModal())}>Edit</Button>
                            </td>
                          </tr>
                        </tbody>
                      </Table>
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
var MorrisJSPage = React.createClass({
  mixins: [SidebarMixin],
  render: function() {
    var classes = classSet({'container-open': this.state.open});
    return (
      <Container id='container' className={classes}>
        <Sidebar/>
        <Header/>
        <Body/>
        <Footer/>
      </Container>
    );
  }
});

module.exports = MorrisJSPage;
