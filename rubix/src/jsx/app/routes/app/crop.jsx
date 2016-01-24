var Header = require('../../common/header.jsx');
var Sidebar = require('../../common/sidebar.jsx');
var Footer = require('../../common/footer.jsx');

var Body = React.createClass({

  componentDidMount: function() {

    (function() {
      var jcrop_api;

      // Simple event handler, called from onChange and onSelect
      // event handlers, as per the Jcrop invocation above
      var showCoords = function(c) {
        $('#x1').val(c.x);
        $('#y1').val(c.y);
        $('#w').val(c.w);
        $('#h').val(c.h);
      };

      var clearCoords = function() {
        $('#coords input').val('');
      };

      $(this.refs.eventtarget.getDOMNode()).Jcrop({
        onChange: showCoords,
        onSelect: showCoords,
        onRelease: clearCoords,
        setSelect: [0, 0, 768, 256]
      }, function() {
        jcrop_api = this;
      });

      $('#coords').on('change', 'input', function(e) {
        var x1 = $('#x1').val(),
          y1 = $('#y1').val(),
          w = $('#w').val(),
          h = $('#h').val()

        jcrop_api.setSelect([x1, y1, w, h]);
      });
    }.bind(this))();

  },
  render: function() {
    var divStyle = {
      backgroundColor: 'black',
      width: '200px',
      height: '500px'
    };
    return (
      <Container id='body'>
        <Grid>
          <Row>
            <Col sm={12}>
              <PanelContainer noControls>
                <Panel>
                  <PanelHeader className='bg-red fg-white' style={{
                    margin: 0
                  }}>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <h3>Crop the Image</h3>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelHeader>
                  <PanelBody>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <br/>
                          <div><img src='/imgs/unsplash/parie.jpg' ref='eventtarget' alt='[Jcrop example]' width='100%' height='350'/></div>
                          <br/>
                          <Form id="coords" className="coords">
                            <div className="inline-labels">
                              <Label inline>X1
                                <Input defaultValue={0} className='form-control' type="text" size="4" id="x1" name="x1"/></Label>
                              <Label inline>Y1
                                <Input defaultValue={0} className='form-control' type="text" size="4" id="y1" name="y1"/></Label>

                              <Label inline>W
                                <Input defaultValue={0} className='form-control' type="text" size="4" id="w" name="w"/></Label>
                              <Label inline>H
                                <Input defaultValue={0} className='form-control' type="text" size="4" id="h" name="h"/></Label>
                            </div>
                          </Form>

                          <div className="description">
                            <p>
                              <b>{"An example with a basic event handler."}</b>{"Here we've tied several form values together with a simple event handler invocation. The result is that the form values are updated in real-time as the selection is changed using Jcrop's "}
                              <em>onChange</em>
                              handler.
                            </p>

                            <p>
                              {"That's how easily Jcrop can be integrated into a traditional web form!"}
                            </p>
                          </div>
                        </Col>

                      </Row>

                    </Grid>
                    <Grid>
                      <Row>
                        <Col xs={12} style={{
                          marginBottom: 10
                        }}>
                          <Link to="/app/upload">
                            <Button outlined bsStyle='red pull-left'>back</Button>
                          </Link>
                          <Link to="/app/map">
                            <Button outlined bsStyle='green pull-right'>next</Button>
                          </Link>
                        </Col>
                      </Row>
                    </Grid>

                  </PanelBody>
                </Panel>
              </PanelContainer>

            </Col>
          </Row>
        </Grid>
      </Container>
    );
  }
});

var classSet = React.addons.classSet;
var Crop = React.createClass({
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

module.exports = Crop;
