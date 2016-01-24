var Header = require('../../common/header.jsx');
var Sidebar = require('../../common/sidebar.jsx');
var Footer = require('../../common/footer.jsx');

var Body = React.createClass({
  render: function() {
    return (
      <Container id='body'>
        <Grid>
          <Row>
            <Col sm={6} smPush={3}>
              <PanelContainer noOverflow noControls>
                <Panel>
                  <PanelHeader className='bg-paleblue fg-white'>
                    <Grid>
                      <Row>
                        <Col xs={12} >
                          <h3>Create User</h3>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelHeader>
                  <PanelBody>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <Form>
                            <FormGroup>
                              <Label htmlFor='emailaddress'>Email address</Label>
                              <InputGroup>
                                <InputGroupAddon>
                                  <Icon glyph='icon-fontello-mail' />
                                </InputGroupAddon>
                                <Input autoFocus type='email' id='emailaddress' placeholder='Email address' />
                              </InputGroup>
                            </FormGroup>
                            <FormGroup>
                              <Label htmlFor='Name'>Name</Label>
                              <InputGroup>
                                <InputGroupAddon>
                                  <Icon glyph='icon-fontello-user' />
                                </InputGroupAddon>
                                <Input autoFocus type='text' id='name' placeholder='Name' />
                              </InputGroup>
                            </FormGroup>
                            <FormGroup>
                              <Label htmlFor='Surname'>Surname</Label>
                              <InputGroup>
                                <InputGroupAddon>
                                  <Icon glyph='icon-fontello-user' />
                                </InputGroupAddon>
                                <Input autoFocus type='text' id='name' placeholder='Name' />
                              </InputGroup>
                            </FormGroup>
                            <FormGroup>
                              <Label htmlFor='password'>password</Label>
                              <InputGroup>
                                <InputGroupAddon>
                                  <Icon glyph='icon-fontello-circle' />
                                </InputGroupAddon>
                                <Input autoFocus type='password' id='password' placeholder='password' />
                              </InputGroup>
                            </FormGroup>
                            <FormGroup>
                              <Label htmlFor='password'>password</Label>
                              <InputGroup>
                                <InputGroupAddon>
                                  <Icon glyph='icon-fontello-circle' />
                                </InputGroupAddon>
                                <Input autoFocus type='password' id='password' placeholder='password' />
                              </InputGroup>
                            </FormGroup>
                            <FormGroup>
                              <Label>Privilege</Label>
                              <Radio inline value='option1' defaultChecked name='radio-options'>
                                Member
                              </Radio>
                              <Radio inline value='option2' name='radio-options'>
                                admin
                              </Radio>
                            </FormGroup>
                          </Form>
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
                            <Button outlined bsStyle='lightred'>Cancel</Button>{' '}
                            <Button outlined bsStyle='lightgreen'>Create</Button>
                          </div>
                          <br/>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelFooter>
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
var viewUser = React.createClass({
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

module.exports = viewUser;
