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
                  <Form>
                <Panel>
                  <PanelHeader className='bg-paleblue fg-white'>
                    <Grid>
                      <Row>
                        <Col xs={12} >
                          <h3>Create taxi company</h3>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelHeader>
                  <PanelBody>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                            <FormGroup>
                              <Label htmlFor='companyName'>Company name</Label>
                              <InputGroup>
                                <InputGroupAddon>
                                  <Icon glyph='icon-fontello-mail' />
                                </InputGroupAddon>
                                <Input autoFocus type='text' id='companyName' placeholder='Company name' />
                              </InputGroup>
                            </FormGroup>
                            <FormGroup>
                              <Label htmlFor='Address'>Address</Label>
                              <InputGroup>
                                <InputGroupAddon>
                                  <Icon glyph='icon-fontello-user' />
                                </InputGroupAddon>
                                <Input autoFocus type='text' id='Address' placeholder='Address' />
                              </InputGroup>
                            </FormGroup>
                            <FormGroup>
                              <Label htmlFor='Surname'>Phone</Label>
                              <InputGroup>
                                <InputGroupAddon>
                                  <Icon glyph='icon-fontello-phone' />
                                </InputGroupAddon>
                                <Input autoFocus type='text' id='Phone' placeholder='Phone' />
                              </InputGroup>
                            </FormGroup>
                            <FormGroup>
                              <Label htmlFor='Director'>Director</Label>
                              <InputGroup>
                                <InputGroupAddon>
                                  <Icon glyph='icon-fontello-circle' />
                                </InputGroupAddon>
                                <Input autoFocus type='text' id='Director' placeholder='Director' />
                              </InputGroup>
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
