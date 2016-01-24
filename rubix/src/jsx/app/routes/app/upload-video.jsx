var Header = require('../../common/header.jsx');
var Sidebar = require('../../common/sidebar.jsx');
var Footer = require('../../common/footer.jsx');



var Body = React.createClass({
  componentDidMount: function() {


    $('#video-duration').ionRangeSlider({
      min: 5,
      max: 10,
      type: 'single',
      step: 0.1,
      postfix: ' seconds',
      prettify: false,
      hasGrid: true
    });

    //dropzone func
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

  },



  render: function() {
    //style
    var videoContainerStyle = {
      height: '100px',
      marginBottom: '25px'
    };
    return (
      <Container id='body'>
        <Grid>
          <Row>
            <Col sm={12}>
              <PanelContainer noControls>
                <Panel>
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
                  <PanelBody>
                    <PanelFooter >
                      <Grid>
                        <Row>
                          <Col xs={12}>
                            <Form action='/dropzone/file-upload' className='dropzone' id='my-awesome-dropzone'>

                            </Form>
                          </Col>
                          <Col xs={12}>
                            <h3>duration</h3>
                            <div>
                              <Input type='text' id='video-duration' ref='video-duration' />
                            </div>
                            <hr/>
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
                  <Button outlined lg bsStyle='green pull-right next' id="next">next</Button>
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
var UploadVideo = React.createClass({
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

module.exports = UploadVideo;
