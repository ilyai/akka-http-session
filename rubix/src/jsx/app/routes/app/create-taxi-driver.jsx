var Header = require('../../common/header.jsx');
var Sidebar = require('../../common/sidebar.jsx');
var Footer = require('../../common/footer.jsx');

var Body = React.createClass({
  componentWillUpdate: function(){


  },
  render: function() {
    return (
      <Container id='body'>


        <Grid>
          <Row>
            <Col sm={6} smPush={3}>
              <PanelContainer noOverflow noControls>
                <Form>
                
                <Panel>
                  <PanelHeader className='bg-paleblue fg-white'>
                    <Grid>
                      <Row>
                        <Col xs={12} >
                          <h3>Create Driver</h3>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelHeader>
                  <PanelBody>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                            <FormGroup>
                              <Label htmlFor='Name'>Name</Label>
                              <InputGroup>
                                <InputGroupAddon>
                                  <Icon glyph='icon-fontello-user' />
                                </InputGroupAddon>
                                <Input autoFocus type='text' id='name' placeholder='Name' required/>
                              </InputGroup>
                            </FormGroup>
                            <FormGroup>
                              <Label htmlFor='surname'>Surname</Label>
                              <InputGroup>
                                <InputGroupAddon>
                                  <Icon glyph='icon-fontello-user' />
                                </InputGroupAddon>
                                <Input autoFocus type='text' id='surname' placeholder='Surname' required/>
                              </InputGroup>
                            </FormGroup>
                            <FormGroup>
                              <Label htmlFor='phone'>Phone</Label>
                              <InputGroup>
                                <InputGroupAddon>
                                  <Icon glyph='icon-fontello-phone' />
                                </InputGroupAddon>
                                <Input autoFocus type='text' id='phone' placeholder='Phone' />
                              </InputGroup>
                            </FormGroup>

                            <FormGroup>
                              <Label htmlFor='license-plate'>License plate</Label>
                              <InputGroup>
                                <InputGroupAddon>
                                  <Icon glyph='icon-fontello-user' />
                                </InputGroupAddon>
                                <Input autoFocus type='text' id='' className="tag-lists" placeholder='license plate' required/>
                              </InputGroup>
                            </FormGroup>
                            <FormGroup>
                              <Label htmlFor='taxi-company'>Taxi company</Label>
                                <Select id='taxi-company' defaultValue='1'>
                                  <option value='1'>Taxi Company</option>
                                  <option value='2'>Taxi Company 2</option>
                                  <option value='3'>Taxi Company 3</option>
                                  <option value='4'>Taxi Company 4</option>
                                  <option value='5'>Taxi Company 5</option>
                                </Select>
                            </FormGroup>
                            <FormGroup>
                              <Label htmlFor='screen-mode'>Screen mode</Label>
                              <Select id='screen-mode' defaultValue='1'>
                                <option value='1'>Led</option>
                                <option value='2'>Led 2</option>
                                <option value='3'>Led 3</option>
                                <option value='4'>Led 4</option>
                                <option value='5'>Led 5</option>
                              </Select>
                            </FormGroup>

                        </Col>
                      </Row>
                    </Grid>
                  </PanelBody>
                  <PanelFooter className='bg-darkgreen45 text-right'>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <br/>
                          <div>
                            <Button  outlined bsStyle='lightred'>Cancel</Button>{' '}
                            <Button type="submit" outlined bsStyle='lightgreen'>Create</Button>
                          </div>
                          <br/>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelFooter>
                </Panel>
              </Form>
              </PanelContainer>
            </Col>
          </Row>
        </Grid>
      </Container>
    );
  }
});

var classSet = React.addons.classSet;
var CreateUser = React.createClass({
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

module.exports = CreateUser;
