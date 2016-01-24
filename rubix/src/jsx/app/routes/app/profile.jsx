var Header = require('../../common/header.jsx');
var Sidebar = require('../../common/sidebar.jsx');
var Footer = require('../../common/footer.jsx');

var SocialBanner = React.createClass({
  getInitialState: function() {
    return {follow: 'follow me', followActive: false, likeCount: 999, likeActive: false, likeTextStyle: 'fg-white'};
  },
  handleFollow: function() {
    this.setState({follow: 'followed', followActive: true});
  },
  handleLike: function() {
    this.setState({likeCount: 1000, likeActive: true, likeTextStyle: 'fg-orange75'});
  },

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
      <div style={{
        height: 350,
        marginTop: -25,
        backgroundImage: 'url(/imgs/shots/Blick_auf_Manhattan.JPG)',
        backgroundSize: 'cover',
        position: 'relative',
        marginBottom: 25,
        backgroundPosition: 'center'
      }}>
        <div className='social-cover' style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.7)'
        }}></div>
        <div className='social-desc'>
          <div>
            <h1 className='fg-white'>Customer Name</h1>
            <h5 className='fg-white' style={{
              opacity: 0.8
            }}>Campaign Address</h5>
            <div style={{
              marginTop: 50
            }}>
              <div style={{
                display: 'inline-block'
              }}>
                <Button id='likeCount' retainBackground rounded bsStyle='orange75' active={this.state.likeActive} onClick={this.handleLike}>
                  <Icon glyph='icon-fontello-heart-1'/>
                </Button>
                <Label className='social-like-count' htmlFor='likeCount'>
                  <span className={this.state.likeTextStyle}>{this.state.likeCount}
                    likes</span>
                </Label>
              </div>
            </div>
          </div>
        </div>
        <div className='social-avatar'>
          <input type="image" src='/imgs/avatars/avatar.jpg' height='100' width='100' style={{
            display: 'block',
            borderRadius: 100,
            border: '2px solid #fff',
            margin: 'auto',
            marginTop: 50,
            outline:0,
            border:0
          }}/>
        <div>

        </div>
        <input type="file" id="my_file"  className="hidden" />
          <hr className='border-black75' style={{
            borderWidth: 2
          }}/>
          <div className='text-center'>
            <Button lg style={{
              margin: 15
            }} onClick={ModalManager.create.bind(this, this.getModal())} onTouchEnd={ModalManager.create.bind(this, this.getModal())} bsStyle='green' id="button-click">Create Campaign</Button>
          </div>
        </div>
      </div>
    );
  }
});

var Body = React.createClass({
  componentDidMount: function() {

    //bootstrap on/off switchery
    $.fn.bootstrapSwitch.defaults.size = 'mini';
    $.fn.bootstrapSwitch.defaults.onColor = 'success';
    $('.my-checkbox').bootstrapSwitch('state', true, true);



    //change profile pic
    $('html').addClass('social');
    $("input[type='image']").click(function() {
      $("input[id='my_file']").click();
    });


  //deletimg users
  $(".delete-user").css({'border': '2px solid transparent'});
  $(".delete-user").on("click", function(e){
    var $killrow = $(this).parent('td').parent('tr');
        $killrow.addClass("danger");
        $killrow.fadeOut(1000, function(e){
    });
  });


  },
  componentWillUnmount: function() {
    $('html').removeClass('social');
  },
  render: function() {
    return (
      <Container id='body' className='social'>
        <SocialBanner/>
        <Grid>
          <Row>
            <Col xs={12}>
              <PanelContainer noControls>
                <Panel className='force-collapse'>
                  <PanelHeader className='bg-red fg-white tabs'>
                    <TabContainer>
                      <TabList>
                        <Tab pane='tpc_hf:home' active>
                          <Icon bundle='fontello' glyph='home'/>
                        </Tab>
                        <Tab pane='tpc_hf:profile'>
                          <Icon bundle='fontello' glyph='user'/>
                        </Tab>
                        <Tab pane='tpc_hf:settings'>
                          <Icon bundle='fontello' glyph='cog'/>
                        </Tab>
                        <Tab pane='tpc_hf:users'>
                          <Icon bundle='fontello' glyph='key'/>
                        </Tab>
                      </TabList>
                    </TabContainer>
                  </PanelHeader>
                  <PanelBody>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <TabContent>
                            <TabPane tab='tpc_hf:home' active>
                              <Grid>
                                <Row>
                                  <Col xs={12} style={{
                                    padding: 0
                                  }}>
                                    <h3>Campaigns</h3>
                                      <Table id='campagn-table' className='display'  width='100%'>
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
                                            <td>6</td>
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
                                  </Col>
                                </Row>
                              </Grid>
                            </TabPane>
                            <TabPane tab='tpc_hf:profile'>
                              <Row>
                                <Col xs={6}>
                                  <h3>Users</h3>
                                </Col>
                                <Col xs={6}>
                                  <div className='text-right'>
                                  <Link to="/app/create-user">
                                    <Button lg style={{
                                      margin: 15
                                    }} bsStyle='red pull-right' id="button-click">Create User</Button>
                                  </Link>
                                  </div>
                                </Col>
                              </Row>
                              <Table striped  className='tablesaw' data-mode="swipe" data-sortable data-sortable-switch data-mode-switch>
                                <thead>
                                  <tr>
                                    <th data-sortable-col data-priority='1'>ID</th>
                                    <th data-sortable-col data-priority='5'>Name</th>
                                    <th data-sortable-col data-priority='1'>Surname</th>
                                    <th data-sortable-col data-priority='4'>Email</th>
                                    <th data-sortable-col data-priority='2'>Password</th>
                                    <th data-sortable-col data-priority='3'>Privilege</th>
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
                                </TabPane>
                            <TabPane tab='tpc_hf:settings'>
                              <h4>Manage Account</h4>
                              <Row>
                                <Form>
                                  <Col xs={6}>

                                    <FormGroup>
                                      <Label htmlFor='emailaddress'>Email address</Label>
                                      <InputGroup>
                                        <InputGroupAddon>
                                          <Icon glyph='icon-fontello-mail'/>
                                        </InputGroupAddon>
                                        <Input autoFocus type='email' id='emailaddress' placeholder='Email address'/>
                                      </InputGroup>
                                    </FormGroup>
                                    <FormGroup feedback>
                                      <Label htmlFor='withicon' control>Nameame</Label>
                                      <Input type='text' id='withicon' placeholder='Nameame'/>
                                      <Icon bundle='fontello' glyph='user' feedback/>
                                    </FormGroup>
                                    <FormGroup feedback>
                                      <Label htmlFor='withicon' control>Surname</Label>
                                      <Input type='text' id='withicon' placeholder='Surname'/>
                                      <Icon bundle='fontello' glyph='user' feedback/>
                                    </FormGroup>

                                    <FormGroup feedback>
                                      <Label htmlFor='withicon' control>Address 1</Label>
                                      <Input type='text' id='withicon' placeholder='Address'/>
                                      <Icon bundle='fontello' glyph='address' feedback/>
                                    </FormGroup>
                                    <FormGroup feedback>
                                      <Label htmlFor='withicon' control>Address 2</Label>
                                      <Input type='text' id='withicon' placeholder='Address'/>
                                      <Icon bundle='fontello' glyph='address' feedback/>
                                    </FormGroup>
                                  </Col>
                                  <Col xs={6}>
                                    <FormGroup feedback>
                                      <Label htmlFor='withicon' control>City</Label>
                                      <Input type='text' id='withicon' placeholder='City'/>
                                      <Icon bundle='fontello' glyph='city' feedback/>
                                    </FormGroup>
                                    <FormGroup feedback>
                                      <Label htmlFor='withicon' control>Director</Label>
                                      <Input type='text' id='withicon' placeholder='Director'/>
                                      <Icon bundle='fontello' glyph='user' feedback/>
                                    </FormGroup>
                                    <FormGroup feedback>
                                      <Label htmlFor='withicon' control>Phone</Label>
                                      <Input type='text' id='withicon' placeholder='Phone'/>
                                      <Icon bundle='fontello' glyph='phone' feedback/>
                                    </FormGroup>
                                    <FormGroup feedback>
                                      <Label htmlFor='withicon' control>add Phone</Label>
                                      <Input type='text' id='withicon' placeholder='Add Phone'/>
                                      <Icon bundle='fontello' glyph='phone' feedback/>
                                    </FormGroup>
                                    <FormGroup feedback>
                                      <Label htmlFor='withicon' control>add Phone</Label>
                                      <Input type='text' id='withicon' placeholder='Add Phone'/>
                                      <Icon bundle='fontello' glyph='phone' feedback/>
                                    </FormGroup>

                                  </Col>
                                </Form>
                                <PanelFooter className='bg-darkgreen45 text-right'>
                                  <Col xs={12}>
                                    <br/>
                                    <div>
                                      <Button outlined bsStyle='lightred'>cancel</Button>{' '}
                                      <Button outlined bsStyle='green'>save</Button>
                                    </div>
                                    <br/>
                                  </Col>
                                </PanelFooter>

                              </Row>
                            </TabPane>
                            <TabPane tab='tpc_hf:users'>
                              <Col xs={6}>
                                <h4>Change</h4>
                                <FormGroup feedback>
                                  <Label htmlFor='Password' control>Password</Label>
                                  <Input type='password' id='withicon' placeholder='Password'/>
                                  <Icon bundle='fontello' glyph='Password' feedback/>
                                </FormGroup>
                                <FormGroup feedback>
                                  <Label htmlFor='Password' control>Repeat Password</Label>
                                  <Input type='password' id='withicon' placeholder='Repeat Password'/>
                                  <Icon bundle='fontello' glyph='Password' feedback/>
                                </FormGroup>
                              </Col>
                              <PanelFooter className='bg-darkgreen45 text-right'>
                                <Col xs={12}>
                                  <br/>
                                  <div>
                                    <Button outlined bsStyle='lightred'>cancel</Button>{' '}
                                    <Button outlined bsStyle='green'>save</Button>
                                  </div>
                                  <br/>
                                </Col>
                              </PanelFooter>
                            </TabPane>

                          </TabContent>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelBody>
                </Panel>
              </PanelContainer>
            </Col>
          </Row>
        </Grid>
        {this.props.children}
      </Container>
    );
  }
});

var classSet = React.addons.classSet;
var Social = React.createClass({
  mixins: [SidebarMixin],
  render: function() {
    var classes = classSet({'container-open': this.state.open});
    return (
      <Container id='container' className={classes}>
        <Sidebar/>
        <Header pressed/>
        <Body/>
        <Footer/>
      </Container>
    );
  }
});

module.exports = Social;
