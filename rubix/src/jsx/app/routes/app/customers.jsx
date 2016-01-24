var Header = require('../../common/header.jsx');
var Sidebar = require('../../common/sidebar.jsx');
var Footer = require('../../common/footer.jsx');



var Body = React.createClass({
  componentDidMount: function() {
    $('.tablesaw').table();
  },
  render: function() {
    return (
      <Container id='body'>

        <Grid>
          <Row>
            <Col xs={12}>
              <PanelContainer noOverflow controlStyles='bg-purple fg-white' noControls>
                <Panel>
                  <PanelHeader className='bg-purple fg-white'>
                    <Grid>
                      <Row>
                        <Col xs={6}>
                          <h3>Customers</h3>
                        </Col>
                        <Col xs={6}>
                          <div className='text-right'>
                              <Link to="/app/create-customer">
                                <Button lg  style={{margin: 15, }} bsStyle='green pull-right'  id="button-click" >Create Customer</Button>
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
                          <Table striped bordered className='tablesaw' data-mode="swipe" data-sortable data-sortable-switch data-mode-switch>
                            <thead>
                              <tr>
                                <th data-sortable-col data-priority='1'>ID</th>
                                <th data-sortable-col data-sortable-default-col data-priority='persist'>Customer Name</th>
                                <th data-sortable-col data-priority='2'>Address</th>
                                <th data-sortable-col data-priority='3'><abbr title='Rotten Tomato Rating'>Mobile Info</abbr></th>
                                <th data-sortable-col data-priority='4'>Director</th>
                                <th data-sortable-col data-priority='4'>User Email</th>
                                <th data-sortable-col data-priority='4'>Privilege</th>
                                <th data-sortable-col data-priority='4'>View Profile</th>
                                <th data-sortable-col data-priority='4'>Delete</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>Europe-Bet</td>
                                <td>kostava str.</td>
                                <td>558 80 00 08</td>
                                <td>John Do</td>
                                <td>example@gmail.com</td>
                                <td>Gold</td>
                                <td>
                                  <Link to="/app/profile">
                                    <Button bsStyle='info center-block'>view</Button>
                                  </Link>
                                </td>
                                <td><Button bsStyle='deepred'>X</Button></td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>Clean House</td>
                                <td>rustaveli str.</td>
                                <td>553 90 00 08</td>
                                <td>John Do</td>
                                <td>hello@gmail.com</td>
                                <td>Standart</td>
                                <td>
                                  <Link to="/app/profile">
                                    <Button bsStyle='info center-block'>view</Button>
                                  </Link>
                                </td>
                                <td><Button   bsStyle='deepred'>X</Button></td>
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
var Customers = React.createClass({
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



module.exports = Customers;
