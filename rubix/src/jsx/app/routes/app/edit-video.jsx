var Header = require('../../common/header.jsx');
var Sidebar = require('../../common/sidebar.jsx');
var Footer = require('../../common/footer.jsx');

var GalleryItem = React.createClass({
  getInitialState: function() {
    return {
      active: this.props.active || false
    };
  },
  handleIncrement: function(e) {
    if (this.state.active)
      return;
    this.setState({active: true});
  },
  render: function() {
    return (
      <PanelContainer>
        <Panel>
          <PanelHeader>
            <Grid className='gallery-item'>
              <Row>
                <Col xs={12} style={{
                  padding: 12.5
                }}>
                  <a className='gallery-1 gallery-item-link' href={'/imgs/gallery/' + this.props.image + '.jpg'} title={this.props.title}>
                    <Img responsive src={'/imgs/gallery/' + this.props.image + '-thumb.jpg'} alt={this.props.title} width='200' height='150'/>
                  </a>
                  <div className='text-center'>
                    <h4 className='fg-darkgrayishblue75 hidden-xs' style={{
                      textTransform: 'uppercase'
                    }}>{this.props.title}</h4>
                    <h6 className='visible-xs' style={{
                      textTransform: 'uppercase'
                    }}>
                      <small className='fg-darkgray50'>{this.props.subtitle}</small>
                    </h6>
                    <Button outlined onlyOnHover bsStyle='red' className='fav-btn' active={this.state.active} onClick={this.handleIncrement}>
                      <Icon glyph='icon-feather-check'/>
                    </Button>
                  </div>
                </Col>
              </Row>
            </Grid>
          </PanelHeader>
        </Panel>
      </PanelContainer>
    );
  }
});

var Body = React.createClass({
  componentDidMount: function() {
    $('.dd').nestable({group: 1});

    var wizard = function() {
      $('#wizard-1').steps({autoFocus: true});
    };
    $("#form-2").validate({
      rules: {
        confirm_password: {
          equalTo: "#password"
        }
      }
    });

    //dropone func
    var myDropzone = $('#my-awesome-dropzone');
    myDropzone.dropzone({
      paramName: "file", // The name that will be used to transfer the file
      maxFilesize: 10, // MB
      parallelUploads: 1,
      addRemoveLinks: true,
      maxFiles: 1,
      clickable: false,
      createImageThumbnails: true,
      acceptedFiles: ".mp4",

      accept: function(file, done) {
        done();
        if ((file.type === "image/png") || (file.type === "image/jpeg") || (file.type === "image/jpg")) {
          console.log("this is " + file.type);
          $(".next").click(function(e) {
            console.log("img click");
          });
        } else {
          alert("this is " + file.type);

          $(".next").click(function() {
            console.log("video click");
          });
        }
      },
      init: function() {
        this.on("success", function(file) {
          $('.next').prop('disabled', false);
        });
        this.on("removedfile", function(file) {
          $('.next').prop('disabled', true);
        });
      }
    }); //end dropzone

    //video controls
    var x,
      y;
    $(".wh-button").click(function() {
      x = $("#width").val();
      y = $("#height").val();
      $(".videoContainer").css("width", x + "px");
      $(".videoContainer").css("height", y + "px");
    });

    $(function() {
      $("").draggable({});
      $(".videoContainer").droppable({
        over: function(event, ui) {
          $(this).parent().css('height', "66px");
        },
        out: function(event, ui) {
          $(this).parent().css('height', "24px");
        },
        drop: function(event, ui) {
          $(this).parent().css('height', "24px");
        }
      });
    });

  },

  render: function() {
    var videoContainerStyle = {

      height: '100px',

      marginBottom: '25px'

    };
    return (
      <Container id='body'>
        <Grid>
          <Row>
            <Col sm={4} md={2}>
              <PanelContainer noControls>
                <Panel >
                  <PanelLeft>
                    <PanelHeader className='bg-blue fg-white' style={{
                      margin: 0
                    }}>
                      <Grid>
                        <Row>
                          <Col xs={12}>
                            <h3>Drag and Drop Video</h3>
                          </Col>
                        </Row>
                      </Grid>
                    </PanelHeader>
                    <Grid>
                      <Row>
                        <Col xs={2} style={{
                          margin: 0,
                          width: 350
                        }}>
                          <div className="dd">
                            <ol className="dd-list">
                              <li className="dd-item" data-id="1">
                                <div className="dd-handle">Item 1</div>
                              </li>
                              <li className="dd-item" data-id="1">
                                <div className="dd-handle">Item 2</div>
                              </li>
                              <li className="dd-item" data-id="1">
                                <div className="dd-handle">Item 3</div>
                              </li>
                              <li className="dd-item" data-id="1">
                                <div className="dd-handle">Item 3</div>
                              </li>
                              <li className="dd-item" data-id="1">
                                <div className="dd-handle">Item 1</div>
                              </li>
                              <li className="dd-item" data-id="1">
                                <div className="dd-handle">Item 2</div>
                              </li>
                              <li className="dd-item" data-id="1">
                                <div className="dd-handle">Item 3</div>
                              </li>
                              <li className="dd-item" data-id="1">
                                <div className="dd-handle">Item 3</div>
                              </li>
                              <li className="dd-item" data-id="1">
                                <div className="dd-handle">Item 1</div>
                              </li>
                              <li className="dd-item" data-id="1">
                                <div className="dd-handle">Item 2</div>
                              </li>
                              <li className="dd-item" data-id="1">
                                <div className="dd-handle">Item 3</div>
                              </li>
                              <li className="dd-item" data-id="1">
                                <div className="dd-handle">Item 3</div>
                              </li>
                              <li className="dd-item" data-id="1">
                                <div className="dd-handle">Item 1</div>
                              </li>
                              <li className="dd-item" data-id="1">
                                <div className="dd-handle">Item 2</div>
                              </li>

                            </ol>
                          </div>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelLeft>
                </Panel>
              </PanelContainer>
            </Col>
            <Col sm={8} md={8} >
              <PanelContainer noControls>
                <Panel >
                  <PanelHeader className='bg-blue fg-white' style={{
                    margin: 0
                  }}>
                    <Grid>
                      <Row>
                        <Col sm={12}>
                          <h3>Video</h3>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelHeader>
                  <PanelBody>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <div className="dd">
                            <div style={videoContainerStyle} className="videoContainer dd-handle dd-empty">
                              <li className="dd-item" data-id="1"></li>
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelBody>
                </Panel>
              </PanelContainer>
            </Col>
            <Col sm={4} md={2}>
              <PanelContainer noControls>
                <Panel>
                  <PanelRight>
                    <PanelHeader className='bg-blue fg-white' style={{
                      margin: 0
                    }}>
                      <Grid>
                        <Row>
                          <Col xs={12}>
                            <h3>Video size</h3>
                          </Col>
                        </Row>
                      </Grid>
                    </PanelHeader>
                    <Grid>
                      <Row>
                        <Col xs={12} style={{
                          marginTop: 5,
                          marginBottom: 10
                        }}>
                          <FormGroup>
                            <InputGroup>
                              <InputGroupAddon>
                                <Icon glyph='icon-fontello-text-width'/>
                              </InputGroupAddon>
                              <Input type='number' id='width' placeholder='width'/>
                            </InputGroup>
                          </FormGroup>
                          <FormGroup>
                            <InputGroup>
                              <InputGroupAddon>
                                <Icon glyph='icon-fontello-text-height'/>
                              </InputGroupAddon>
                              <Input type='number' id='height' placeholder='height'/>
                            </InputGroup>
                          </FormGroup>
                          <Button md bsStyle='primary' className="wh-button">Change video size</Button>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelRight>
                </Panel>
              </PanelContainer>
            </Col>
            <Col sm={10}>
              <PanelContainer noControls>
                <Panel>
                  <PanelBody>
                    <PanelFooter >
                      <Grid>
                        <Row>
                          <Col xs={12}>
                            <Form action='/dropzone/file-upload' className='dropzone' id='my-awesome-dropzone'></Form>
                          </Col>
                        </Row>
                      </Grid>
                    </PanelFooter>
                  </PanelBody>
                </Panel>
              </PanelContainer>
            </Col>
          </Row>

        </Grid>
        <Grid>
          <Grid>
            <Row>
              <Col xs={12} style={{
                marginBottom: 10
              }}>
                <Link to="/app/campaigns">
                  <Button outlined bsStyle='red pull-left'>back to the campaigns</Button>
                </Link>
                <Link to="/app/zones">
                  <Button outlined lg bsStyle='green pull-right next' id="next" disabled>next</Button>
                </Link>
              </Col>
            </Row>
          </Grid>
        </Grid>

      </Container>

    );
  }
});

var classSet = React.addons.classSet;
var Upload = React.createClass({
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

module.exports = Upload;

/* start wizard
<div className="dd">
  <ul className="dd-list">
    <li className="dd-item" data-id="1">
      <div className="dd-handle">Item 1</div>
    </li>
    <li className="dd-item" data-id="2">
      <div className="dd-handle">Item 2</div>
    </li>
    <li className="dd-item" data-id="3">
      <div className="dd-handle">Item 3</div>
    </li>
  </ul>
</div>
----------
  <Row>
    <Col xs={12}>
      <div id='wizard-1'>
        <h1>First Step</h1>
        <div>drop or click to upload your picture</div>

        <h1>Second Step</h1>
        <div><LoremIpsum query='5s' /></div>
      </div>
    </Col>
  </Row>
--------
end wizard */

// =================

/* select value for video div wit=dth and height
----
  <select id="width">
      <option value="768">768</option>
      <option value="256">256</option>
  </select>
  <select id="height">
  </select>
------
*/
