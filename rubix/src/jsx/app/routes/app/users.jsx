var Header = require('../../common/header.jsx');
var Sidebar = require('../../common/sidebar.jsx');
var Footer = require('../../common/footer.jsx');



var Body = React.createClass({
  componentDidMount: function() {
    $('.tablesaw').table();


    $(".delete-user").css({'border': '2px solid transparent'});
    $(".delete-user").on("click", function(e){
      var $killrow = $(this).parent('td').parent('tr');
          $killrow.addClass("danger");
          $killrow.fadeOut(1000, function(e){
      });
    });
  },

  getModal: function() {
    return (
      <Modal>
        <ModalHeader>
          <Button onClick={ModalManager.remove} onTouchEnd={ModalManager.remove} close/>
          <h4 className='modal-title'>  Delete User</h4>
        </ModalHeader>
        <ModalBody>
          <p>

          </p>
        </ModalBody>
        <ModalFooter onClick={ModalManager.remove} onTouchEnd={ModalManager.remove}>
            <Button bsStyle='primary' outlined lg style={{marginRight: 15}}>Cancel</Button>
            <Button bsStyle='danger' className="delete" lg style={{}}>delete</Button>
        </ModalFooter>
      </Modal>
    );
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
                          <h3>Users</h3>
                        </Col>
                        <Col xs={6}>
                          <div className='text-right'>
                              <Link to="/app/create-user">
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
                                <th data-sortable-col data-priority='1'>ID</th>
                                <th data-sortable-col data-priority='5'>Name</th>
                                <th data-sortable-col data-priority='1'>Surname</th>
                                <th data-sortable-col data-priority='4'>Email</th>
                                <th data-sortable-col data-priority='2'>Password</th>
                                <th data-sortable-col data-priority='3'>Privilege</th>
                                <th data-sortable-col data-priority='3'>Customer</th>
                                <th data-sortable-col data-priority='4'>Edit</th>
                                <th data-sortable-col data-priority='4'>Delete</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>John</td>
                                <td>Do</td>
                                <td>example@gmail.com</td>
                                <td>123456789</td>
                                <td>member</td>
                                <td>Customer 1</td>
                                <td>
                                  <Link to="/app/edit-user">
                                    <Button bsStyle='info center-block' >Edit</Button>
                                  </Link>
                                </td>
                                <td>
                                    <Input type='submit'  placeholder='Username' value="X" sm  className="btn-danger delete-user"/>
                                </td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>John</td>
                                <td>Do</td>
                                <td>example@gmail.com</td>
                                <td>123456789</td>
                                <td>member</td>
                                <td>Customer 2</td>
                                <td>
                                  <Link to="/app/edit-user">
                                    <Button bsStyle='info center-block'>Edit</Button>
                                  </Link>
                                </td>
                                <td>
                                  <Input type='submit'  placeholder='Username' value="X" sm  className="btn-danger delete-user"/>
                                </td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>John</td>
                                <td>Do</td>
                                <td>example@gmail.com</td>
                                <td>123456789</td>
                                <td>master</td>
                                <td>Customer 3</td>
                                <td>
                                  <Link to="/app/edit-user">
                                    <Button bsStyle='info center-block'>Edit</Button>
                                  </Link>
                                </td>
                                <td>
                                  <Input type='submit'  placeholder='Username' value="X" sm  className="btn-danger delete-user"/>
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
