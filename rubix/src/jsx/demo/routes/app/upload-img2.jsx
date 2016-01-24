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

  //gallery rendering
  render: function() {
    return (
      <PanelContainer>
        <Panel>
          <PanelHeader>
            <Grid className='gallery-item'>
              <Row>
                <Col xs={12} style={{
                  padding: 4
                }}>
                  <a className='gallery-1 gallery-item-link' href={'/imgs/gallery/' + this.props.image + '.jpg'} title={this.props.title}>
                    <Img responsive src={'/imgs/gallery/' + this.props.image + '-thumb.jpg'} alt={this.props.title} width='200' height='150'/>
                  </a>
                  <div className='text-center'>

                    <Button   bsStyle='blue' style={{marginTop:4}} className='view'>
                      <Icon glyph=''/>View
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

    //image upload and crop call
    $('.image-cropping').html5imageupload();

    //switcher
    var elems = Array.prototype.slice.call(document.querySelectorAll('.js-switch'));
    elems.forEach(function(html) {
      var switchery = new Switchery(html);
    });


    //image video duration
    $('#duration').ionRangeSlider({
      min: 5,
      max: 10,
      type: 'single',
      step: 0.1,
      postfix: ' seconds',
      prettify: false,
      hasGrid: true
    });

    // gallery images click event
    var links = document.getElementsByClassName('gallery-1');
    $('.gallery-1').unbind('click').bind('click', function(event) {
      event.preventDefault();
    });

    //button click event
    var views = document.getElementsByClassName('view');
    $('.view').unbind('click').bind('click', function(event) {
      event.preventDefault();
      blueimp.Gallery(links, {
        index: $(this).get(0),
        event: event
      });
    });

    (function() {
      // Create variables (in this scope) to hold the API and image size
      var jcrop_api,
          boundx,
          boundy,

          // Grab some information about the preview pane
          $preview = $('#preview-pane'),
          $pcnt = $('#preview-pane .preview-container'),
          $pimg = $('#preview-pane .preview-container img'),
          xsize = $pcnt.width(),
          ysize = $pcnt.height();

      var updatePreview = function(c) {
        if (parseInt(c.w) > 0) {
          var rx = xsize / c.w;
          var ry = ysize / c.h;

          $pimg.css({
            width: Math.round(rx * boundx) + 'px',
            height: Math.round(ry * boundy) + 'px',
            marginLeft: '-' + Math.round(rx * c.x) + 'px',
            marginTop: '-' + Math.round(ry * c.y) + 'px'
          });
        }
      };

      $(this.refs.aspectwithpreview.getDOMNode()).Jcrop({
        onChange: updatePreview,
        onSelect: updatePreview,
        aspectRatio: xsize / ysize,
        setSelect: [ 60, 50, 540, 300 ]
      },function(){
        // Use the API to get the real image size
        var bounds = this.getBounds();
        boundx = bounds[0];
        boundy = bounds[1];
        // Store the API in the jcrop_api variable
        jcrop_api = this;

        // Move the preview into the jcrop container for css positioning
        $preview.appendTo(jcrop_api.ui.holder);
      });

      //image cropping replacing on click
      var imgPreview = $("#preview-pane .preview-container img");
      var img = $(".gallery-view img");
      img.click(function(event) {
        if ($('#image-crop').data('Jcrop')) {
          $('#image-crop').data('Jcrop').destroy();
        }
        $("#image-crop").attr(("src"), $(this).attr("src"));
        $('#image-crop').Jcrop({
          onChange: updatePreview,
          onSelect: updatePreview,
          aspectRatio: xsize / ysize,
          setSelect: [ 60, 50, 540, 300 ]
        }, function(){
          // Use the API to get the real image size
          var bounds = this.getBounds();
          boundx = bounds[0];
          boundy = bounds[1];
          // Store the API in the jcrop_api variable
          jcrop_api = this;
          $preview.appendTo(jcrop_api.ui.holder);
        });
        $("#preview").attr(("src"), $(this).attr("src"));
      });

    }.bind(this))();




  },
  render: function() {
    return (
      <Container id='body'>
        <Grid>
          <Row>
            <PanelContainer noControls>
              <Col sm={12}>
                <Panel>
                  <PanelHeader className='bg-red fg-white' style={{
                    margin: 0
                  }}>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <h3>Create image for Ad</h3>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelHeader>
                  <form>
                    <PanelBody>
                      <Grid>
                        <Row>
                          <Col xs={12}>
                            <h3>upload image for cropping</h3>
                          </Col>
                        </Row>
                      </Grid>
                      <Grid>
                        <Row>
                          <Col md={7}>
                            <h5>file formats: *.jpg, *.png</h5>
                            <div className="image-cropping" data-width="768" data-originalsize="false" data-height="276" data-url="" style={{
                              width: 768
                            }} data-editstart="true" data-dimensionsonly="true">
                              <input type="file" name="thumb"/>
                            </div>
                          </Col>
                          <Col md={12} lg={5}>
                            <h3>duration</h3>
                            <div>
                              <Input type='text' id='duration' ref='duration'/>
                            </div>
                            <hr/>
                          </Col>
                        </Row>
                      </Grid>
                      <Grid>
                        <Row>
                          <Col xs={12} style={{
                            marginBottom: 10
                          }}>
                            <Link to="/app/campaigns">
                              <Button outlined bsStyle='red pull-left'>back to the campaigns</Button>
                            </Link>
                            <Link to="/app/zones">
                              <Button outlined bsStyle='green pull-right next' id="next">next</Button>
                            </Link>
                          </Col>
                        </Row>
                      </Grid>
                    </PanelBody>
                  </form>
                  <PanelBody>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <h3>or choose from existing files</h3>
                        </Col>
                      </Row>
                    </Grid>
                    <Grid>
                      <Row>
                        <Col sm={7}>
                          <img src='/imgs/unsplash/hot-air-baloon.jpg' id="image-crop" ref='aspectwithpreview' alt='[Jcrop example]' width='100%' height='350' />
                        </Col>
                        <Col sm={5} >
                          <div id='preview-pane' style={{display: 'block', position: 'absolute', zIndex: 2000, top: 10, right: '-450px', padding: 6, border: '1px rgba(0,0,0,.4) solid', background: 'white', borderRadius: 6}}>
                            <div className='preview-container' style={{width: 384, height: 128, overflow: 'hidden'}}>
                              <img src='/imgs/unsplash/hot-air-baloon.jpg'  id="preview" className='jcrop-preview'  width='100%' />
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </Grid>

                  </PanelBody>
                </Panel>
              </Col>
            </PanelContainer>
          </Row>
        </Grid>
        <Grid>

          <Row className='gallery-view' noControls>
            <Col xs={3} sm={2} collapseRight>
              <GalleryItem image='tumblr_n6es0tRk5w1st5lhmo1_1280' title='skyline' subtitle='10th Dec - 12th Dec'/>
            </Col>
            <Col xs={3} sm={2} collapseRight>
              <GalleryItem image='tumblr_n6eszmeQMR1st5lhmo1_1280' title='me at ny' subtitle='11th Dec - 12th Dec'/>
            </Col>
            <Col xs={3} sm={2} collapseRight>
              <GalleryItem image='tumblr_n6rzkfxeOR1st5lhmo1_1280' title='vintage cameras' subtitle='13th Dec - 14th Dec'/>
            </Col>
            <Col xs={3} sm={2} collapseRight>
              <GalleryItem image='tumblr_n6rztipoQy1st5lhmo1_1280' title='columns' subtitle='13th Dec - 14th Dec'/>
            </Col>
            <Col xs={3} sm={2} collapseRight>
              <GalleryItem image='tumblr_n7fg2vYZ741st5lhmo1_1280' title='peak' subtitle='14th Dec - 15th Dec'/>
            </Col>
            <Col xs={3} sm={2} collapseRight>
              <GalleryItem image='tumblr_n7fgnop0bz1st5lhmo1_1280' title='Mac' subtitle='14th Dec - 15th Dec'/>
            </Col>
            <Col xs={3} sm={2} collapseRight>
              <GalleryItem image='tumblr_n7yhe1sTa41st5lhmo1_1280' title='Taxi cabs' subtitle='14th Dec - 15th Dec'/>
            </Col>
            <Col xs={3} sm={2} collapseRight>
              <GalleryItem image='tumblr_n8gxs0oWZ21st5lhmo1_1280' title='Golden gate' subtitle='14th Dec - 15th Dec'/>
            </Col>
            <Col xs={3} sm={2} collapseRight>
              <GalleryItem image='tumblr_n9hyqfJavs1st5lhmo1_1280' title='Empire state' subtitle='14th Dec - 15th Dec'/>
            </Col>
            <Col xs={3} sm={2} collapseRight>
              <GalleryItem image='tumblr_n9hyqfJavs1st5lhmo1_1280' title='Empire state' subtitle='14th Dec - 15th Dec'/>
            </Col>
            <Col xs={3} sm={2} collapseRight>
              <GalleryItem image='tumblr_n9hyqfJavs1st5lhmo1_1280' title='Empire state' subtitle='14th Dec - 15th Dec'/>
            </Col>
          </Row>
        </Grid>
        {this.props.children}
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
