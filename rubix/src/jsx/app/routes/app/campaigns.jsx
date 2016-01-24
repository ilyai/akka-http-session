var Header = require('../../common/header.jsx');
var Sidebar = require('../../common/sidebar.jsx');
var Footer = require('../../common/footer.jsx');

var Body = React.createClass({
  componentDidMount: function() {
    $('#campagn-table').addClass('nowrap').dataTable({
      responsive: true,
      "order": [
        [3, "desc"]
      ],
      columnDefs: [
        {
          targets: [
            -1, -5
          ],
          className: 'dt-body-right'
        }
      ]
    });

    //campagn table, deleting
    var table = $('#campagn-table').DataTable();
    $('#campagn-table tbody').on('click', 'tr', function() {
      if ($(this).hasClass('selected')) {
        $(this).removeClass('selected');
      } else {
        table.$('tr.selected').removeClass('selected');
        $(this).addClass('selected');
      }
    });

    $('#delete-button').click(function() {
      table.row('.selected').remove().draw(false);
    });



    //bootstrap on/off switchery
    $.fn.bootstrapSwitch.defaults.size = 'mini';
    $.fn.bootstrapSwitch.defaults.onColor = 'success';
    $('.my-checkbox').bootstrapSwitch('state', true, true);

  },

  //modal for creating campagn
  getModal: function() {
    return (
      <Modal>
        <ModalHeader>
          <Button onClick={ModalManager.remove} onTouchEnd={ModalManager.remove} close/>
          <h4 className='modal-title'>Packages</h4>
        </ModalHeader>
        <ModalBody>
          <p>Campagn style
          </p>
        </ModalBody>
        <ModalFooter onClick={ModalManager.remove} onTouchEnd={ModalManager.remove}>
          <Link to='/app/upload-video' style={{
            border: 0
          }}>
            <Button bsStyle='primary' lg style={{
              marginRight: 15
            }}>Video</Button>
          </Link>
          <Link to='/app/upload-img' style={{
            border: 0
          }}>
            <Button bsStyle='danger' lg style={{}}>Image</Button>
          </Link>
          <Link to='/app/text' style={{
            border: 0
          }}>
            <Button bsStyle='warning' lg style={{
              marginLeft: 15
            }}>Text</Button>
          </Link>
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
              <PanelContainer noControls>
                <PanelHeader className='bg-red fg-white'>
                  <Panel>
                    <Grid>
                      <Row>
                        <Col xs={6}>
                          <h3>Campaigns</h3>
                        </Col>
                        <Col xs={6}>
                          <div className='text-right'>

                            <Button lg style={{
                              margin: 15
                            }} onClick={ModalManager.create.bind(this, this.getModal())} onTouchEnd={ModalManager.create.bind(this, this.getModal())} bsStyle='green pull-right' id="button-click">Create Campaign</Button>

                          </div>
                        </Col>
                      </Row>
                    </Grid>
                  </Panel>
                </PanelHeader>
                <Panel>
                  <PanelBody>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <Table id='campagn-table' className='display' cellSpacing='0' width='100%'>
                            <thead>
                              <tr>
                                <th>ID</th>
                                <th>Campagn Name</th>
                                <th>End Date</th>
                                <th>Number of times played</th>
                                <th>Total Spent</th>
                                <th>Max Budget</th>
                                <th>Active (ON/OFF)</th>
                                <th>View</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>4</td>
                                <td>Xmas</td>
                                <td>27/10/2015</td>
                                <td>4</td>
                                <td>$57</td>
                                <td>$200</td>
                                <td>
                                  <Checkbox value='option1' className="my-checkbox" name='checkbox-options'></Checkbox>
                                </td>
                                <td>
                                  <Link to="/app/details">
                                    <Button sm style={{
                                      marginBottom: 5
                                    }} bsStyle='info center'>info</Button>{' '}
                                  </Link>
                                </td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>Summer</td>
                                <td>2/10/2015</td>
                                <td>1</td>
                                <td>$10</td>
                                <td>$225</td>
                                <td>
                                  <Checkbox value='option1' className="my-checkbox" name='checkbox-options'></Checkbox>
                                </td>
                                <td>
                                  <Link to="/app/details">
                                    <Button sm style={{
                                      marginBottom: 5
                                    }} bsStyle='info  next'>info</Button>{' '}
                                  </Link>
                                </td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>Independence day</td>
                                <td>27/8/2015</td>
                                <td>15</td>
                                <td>$200</td>
                                <td>$1000</td>
                                <td>
                                  <Checkbox value='option1' className="my-checkbox" name='checkbox-options'></Checkbox>
                                </td>
                                <td>
                                  <Link to="/app/details">
                                    <Button sm style={{
                                      marginBottom: 5
                                    }} bsStyle='info center'>info</Button>{' '}
                                  </Link>
                                </td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td>Halloween</td>
                                <td>5/4/2015</td>
                                <td>7</td>
                                <td>$150</td>
                                <td>$210</td>
                                <td>
                                  <Checkbox value='option1' className="my-checkbox" name='checkbox-options'></Checkbox>
                                </td>
                                <td>
                                  <Button sm outlined style={{
                                    marginBottom: 5
                                  }} bsStyle='info'>Info</Button>{' '}</td>
                              </tr>
                              <tr>
                                <td>5</td>
                                <td>The Christmas Feast and Santa Claus</td>
                                <td>27/10/2015</td>
                                <td>4</td>
                                <td>$57</td>
                                <td>$200</td>
                                <td>
                                  <Checkbox value='option1' className="my-checkbox" name='checkbox-options'></Checkbox>
                                </td>
                                <td>
                                  <Button sm outlined style={{
                                    marginBottom: 5
                                  }} bsStyle='info'>Info</Button>{' '}</td>
                              </tr>
                              <tr>
                                <td>1</td>
                                <td>public holidays</td>
                                <td>27/10/2015</td>
                                <td>4</td>
                                <td>$57</td>
                                <td>$200</td>
                                <td>
                                  <Checkbox value='option1' className="my-checkbox" name='checkbox-options'></Checkbox>
                                </td>
                                <td>
                                  <Button sm outlined style={{
                                    marginBottom: 5
                                  }} bsStyle='info'>Info</Button>{' '}</td>
                              </tr>
                              <tr>
                                <td>1</td>
                                <td>Mother’s Day</td>
                                <td>27/10/2015</td>
                                <td>4</td>
                                <td>$57</td>
                                <td>$200</td>
                                <td>
                                  <Checkbox value='option1' className="my-checkbox" name='checkbox-options'></Checkbox>
                                </td>
                                <td>
                                  <Button sm outlined style={{
                                    marginBottom: 5
                                  }} bsStyle='info'>Info</Button>{' '}</td>
                              </tr>
                              <tr>
                                <td>1</td>
                                <td>spring</td>
                                <td>27/10/2015</td>
                                <td>4</td>
                                <td>$57</td>
                                <td>$200</td>
                                <td>
                                  <Checkbox value='option1' className="my-checkbox" name='checkbox-options'></Checkbox>
                                </td>
                                <td>
                                  <Button sm outlined style={{
                                    marginBottom: 5
                                  }} bsStyle='info'>Info</Button>{' '}</td>
                              </tr>
                              <tr>
                                <td>1</td>
                                <td>Winter</td>
                                <td>27/10/2015</td>
                                <td>4</td>
                                <td>$57</td>
                                <td>$200</td>
                                <td>
                                  <Checkbox value='option1' className="my-checkbox" name='checkbox-options'></Checkbox>
                                </td>
                                <td>
                                  <Button sm outlined style={{marginBottom: 5}} bsStyle='info'>Info</Button>{' '}</td>
                              </tr>
                            </tbody>
                          </Table>
                          <br/>
                          <Button sm style={{
                            margin: 15,
                            borderRadius: 3
                          }} id="delete-button" bsStyle='danger'>delete campagn</Button>
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
var BootstrapTables = React.createClass({
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

module.exports = BootstrapTables;
