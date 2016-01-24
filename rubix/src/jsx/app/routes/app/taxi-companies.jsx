var Header = require('../../common/header.jsx');
var Sidebar = require('../../common/sidebar.jsx');
var Footer = require('../../common/footer.jsx');



var Body = React.createClass({
  componentDidMount: function() {
    $('.tablesaw').table();

    $(".dlt-taxi-cmpn").css({'border': '2px solid transparent'});
    $(".dlt-taxi-cmpn").on("click", function(e){
      var $killrow = $(this).parent('td').parent('tr');
          $killrow.addClass("danger");
          $killrow.fadeOut(1000, function(e){
      });
    });
  },
  render: function() {
    return (
      <Container id='body'>

        <Grid>
          <Row>
            <Col xs={12}>
              <PanelContainer noOverflow controlStyles='bg-paleblue fg-white' noControls>
                <Panel>
                  <PanelHeader className='bg-paleblue fg-white'>
                    <Grid>
                      <Row>
                        <Col xs={6}>
                          <h3>Taxi Companies</h3>
                        </Col>
                        <Col xs={6}>
                          <div className='text-right'>
                              <Link to="/app/create-taxi-company">
                                <Button lg  style={{margin: 15, }} bsStyle='green pull-right'  id="button-click" >Create User</Button>
                            </Link>
                          </div>
                      </Col>
                      </Row>
                    </Grid>
                  </PanelHeader>
                  <PanelBody>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <p></p>
                          <Table striped  className='tablesaw' data-mode="swipe" data-sortable data-sortable-switch data-mode-switch>
                            <thead>
                              <tr>
                                <th data-sortable-col data-priority='5'>ID</th>
                                <th data-sortable-col data-priority='1'>Company Name</th>
                                <th data-sortable-col data-priority='1'>Address</th>
                                <th data-sortable-col data-priority='4'>Phone</th>
                                <th data-sortable-col data-priority='2'>Director</th>
                                <th data-sortable-col data-priority='3'>view</th>
                                <th data-sortable-col data-priority='4'>Delete</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>John</td>
                                <td>address</td>
                                <td>123456789</td>
                                <td>director</td>
                                  <td>
                                    <Link to="/app/taxi-profile">
                                      <Button bsStyle="primary" style={{}}>view</Button>
                                    </Link>
                                  </td>
                                  <td>
                                      <Input type='submit'  placeholder='Username' value="X" sm  className="btn-danger dlt-taxi-cmpn"/>
                                  </td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>John</td>
                                <td>Do</td>
                                <td>123456789</td>
                                <td>Director</td>
                                <td>
                                  <Link to="/app/taxi-profile">
                                    <Button bsStyle="primary" style={{}}>view</Button>
                                  </Link>
                                </td>
                                <td>
                                    <Input type='submit'  placeholder='Username' value="X" sm  className="btn-danger dlt-taxi-cmpn"/>
                                </td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>John</td>
                                <td>Do</td>
                                <td>123456789</td>
                                <td>master</td>
                                <td>
                                  <Link to="/app/taxi-profile">
                                    <Button bsStyle="primary" style={{}}>view</Button>
                                  </Link>
                                </td>
                                <td>
                                    <Input type='submit'  placeholder='Username' value="X" sm  className="btn-danger dlt-taxi-cmpn"/>
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
            </Col>
          </Row>
        </Grid>
      </Container>
    );
  }
});

var classSet = React.addons.classSet;
var Users = React.createClass({
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



module.exports = Users;
