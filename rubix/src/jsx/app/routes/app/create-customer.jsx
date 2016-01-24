var Header = require('../../common/header.jsx');
var Sidebar = require('../../common/sidebar.jsx');
var Footer = require('../../common/footer.jsx');

var Body = React.createClass({
  render: function() {
    return (
      <Container id='body'>
        <Grid>
          <Row>
            <Col sm={8} smPush={2}>
              <PanelContainer noOverflow noControls>
                <Form onSubmit={this.handleSubmit}>
                <Panel>
                  <PanelHeader className='bg-paleblue fg-white'>
                    <Grid>
                      <Row>
                        <Col xs={12} >
                          <h3>Create Customer</h3>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelHeader>
                  <PanelBody>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <div style={{padding: 25, paddingTop: 0, paddingBottom: 0, margin: 'auto', marginBottom: 25, marginTop: 25}}>

                              <FormGroup>
                                <InputGroup md>
                                  <InputGroupAddon>
                                    <Icon glyph='icon-fontello-user' />
                                  </InputGroupAddon>
                                  <Input autoFocus type='text' ref = 'customername' id='customername' className='border-focus-blue' placeholder='Customer Name' />
                                  <InputGroupAddon>
                                    <Icon glyph='icon-fontello-th-large' />
                                  </InputGroupAddon>
                                  <Input autoFocus type='text' ref='customerid' id='customerid' className='border-focus-blue' placeholder='Customer ID' />
                                </InputGroup>
                              </FormGroup>

                              <FormGroup>
                                <InputGroup md>
                                  <InputGroupAddon>
                                    <Icon glyph='icon-fontello-reply' />
                                  </InputGroupAddon>
                                  <Input type='text' id='emailaddress' ref='emailaddress' className='border-focus-blue' placeholder='Address Line' require />
                                  <InputGroupAddon>
                                    <Icon glyph='icon-fontello-reply' />
                                  </InputGroupAddon>
                                  <Input type='text' id='emailaddress2' ref='emailaddress2' className='border-focus-blue' placeholder='Address Line 2' />
                                </InputGroup>
                              </FormGroup>

                              <FormGroup>
                                <InputGroup md>
                                  <InputGroupAddon>
                                    <Icon glyph='icon-fontello-asterisk' />
                                  </InputGroupAddon>
                                  <Input type='text' id='city'  ref = 'city' className='border-focus-blue' placeholder='City'/>
                                   <InputGroupAddon>
                                    <Icon glyph='icon-fontello-asterisk' />
                                  </InputGroupAddon>
                                  <Input type='text' id='country' ref = 'country' className='border-focus-blue' placeholder='Country'/>
                                  <InputGroupAddon>
                                    <Icon glyph='icon-fontello-asterisk' />
                                  </InputGroupAddon>
                                  <Input type="text" id='postcode' ref = 'postcode' className='border-focus-blue' placeholder='Post Code' require/>
                                </InputGroup>
                              </FormGroup>
                              <FormGroup>
                                <InputGroup md>
                                  <InputGroupAddon>
                                    <Icon glyph='icon-fontello-phone' />
                                  </InputGroupAddon>
                                  <Input type='text' className="textfield" id = 'phone' ref='phone' className='border-focus-blue' placeholder='Phone' onkeypress="return isNumber(event)"  />
                                  <InputGroupAddon>
                                    <Icon glyph='icon-fontello-user' />
                                  </InputGroupAddon>
                                  <Input type='text' id='director' ref='director' className='border-focus-blue' placeholder='Director'/>
                                </InputGroup>
                              </FormGroup>
                              <FormGroup>
                                <InputGroup md>
                                  <InputGroupAddon>
                                    <Icon glyph='icon-fontello-user' />
                                  </InputGroupAddon>
                                  <Input type='text' id='username' ref='username' className='border-focus-blue' placeholder='Username'  />
                                </InputGroup>
                              </FormGroup>
                              <FormGroup>
                                <InputGroup md>
                                  <InputGroupAddon>
                                    <Icon glyph='icon-fontello-mail-alt' />
                                  </InputGroupAddon>
                                  <Input type='email' id='useremail' ref='useremail' className='border-focus-blue' placeholder='Email' />
                                </InputGroup>
                              </FormGroup>
                              <FormGroup>
                                <InputGroup md>
                                  <InputGroupAddon>
                                    <Icon glyph='icon-fontello-key' />
                                  </InputGroupAddon>
                                  <Input type='password' id='password' ref='password' className='border-focus-blue' placeholder='password' />
                                </InputGroup>
                              </FormGroup>
                              <FormGroup>
                                <InputGroup md>
                                  <InputGroupAddon>
                                    <Icon glyph='icon-fontello-key' />
                                  </InputGroupAddon>
                                  <Input type='password' id='passwordconfirm' ref='passwordconfirm' className='border-focus-blue' placeholder='repeat password' />
                                  <span id="confirmMessage" className="confirmMessage" onpaste="return false;" ></span>
                                </InputGroup>
                              </FormGroup>



                          </div>

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
