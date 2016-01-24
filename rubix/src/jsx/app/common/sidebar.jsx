var ApplicationSidebar = React.createClass({
  render: function() {
    return (
      <div>
        <Grid gutterBottom>
          <Row>
            <Col xs={12}>
              <div className='sidebar-header'>User Interface</div>
              <div className='sidebar-nav-container'>
                <SidebarNav style={{
                  marginBottom: 0
                }}>
                  <SidebarNavItem glyph='icon-ikons-user-square ' name='Profile' href='/app/profile'/>
                  <SidebarNavItem glyph='icon-ikons-login' name='Login' href='/app/login' className=""/>
                  <SidebarNavItem glyph='icon-simple-line-icons-users' name='Signup' href='/app/signup' className=""/>
                </SidebarNav>
              </div>
            </Col>
          </Row>
        </Grid>

        <Grid>
          <Row>
            <Col xs={12}>
              <div className='sidebar-header'>PAGES</div>
              <div className='sidebar-nav-container'>
                <SidebarNav>
                  <SidebarNavItem href='/app/campaigns' glyph='icon-fontello-th-2' name='Campaigns'/>
                </SidebarNav>
                <SidebarNav style={{
                  marginBottom: 0
                }}>
                  <SidebarNavItem href='/app/tables' glyph='icon-fontello-view-mode' name='Tables' className="hidden"/>
                </SidebarNav>

                <SidebarNav>
                  <SidebarNavItem glyph='icon-feather-star' name={<span>Customers Page</span>}>
                    <SidebarNav>
                      <SidebarNavItem href='/app/customers' glyph='icon-fontello-star-5' name='Customers'/>
                      <SidebarNavItem href='/app/create-customer' glyph='icon-fontello-star-5' name='Create Customer'/>
                    </SidebarNav>
                  </SidebarNavItem>
                </SidebarNav>

                <SidebarNav>
                  <SidebarNavItem glyph='icon-dripicons-user-group' name={<span>Users Page</span>}>
                    <SidebarNav>
                      <SidebarNavItem href='/app/users' glyph='icon-dripicons-user' name='Users'/>
                      <SidebarNavItem href='/app/create-user' glyph='icon-dripicons-user' name='Create User'/>
                    </SidebarNav>
                  </SidebarNavItem>
                </SidebarNav>

                <SidebarNav>
                  <SidebarNavItem glyph='icon-feather-star' name={<span>Taxi Companies Page</span>}>
                    <SidebarNav>
                      <SidebarNavItem href='/app/taxi-companies' glyph='icon-simple-line-icons-badge' name='Taxi companies'/>
                      <SidebarNavItem href='/app/create-taxi-company' glyph='icon-simple-line-icons-badge' name='Create taxi company'/>
                      <SidebarNavItem href='/app/taxi-drivers' glyph='icon-stroke-gap-icons-Rolodex' name='Taxi drivers'/>
                      <SidebarNavItem href='/app/create-taxi-driver' glyph='icon-stroke-gap-icons-Rolodex' name='Create taxi driver'/>
                    </SidebarNav>
                  </SidebarNavItem>
                </SidebarNav>

                <SidebarNav>
                  <SidebarNavItem glyph='icon-feather-image' name={<span>assets</span>}>
                    <SidebarNav>
                      <SidebarNavItem href='/app/assets/gallery' glyph='icon-ikons-image' name='Gallery'/>
                      <SidebarNavItem href='/app/upload-video' glyph='icon-stroke-gap-icons-Download' name='Upload Video' className="hidden"/>
                    </SidebarNav>
                  </SidebarNavItem>
                </SidebarNav>
                <SidebarNav>
                  <SidebarNavItem href='/app/crop' glyph='icon-ikons-crop' name='Cropping' className="hidden"/>
                </SidebarNav>

                <SidebarNav>
                  <SidebarNavItem href='/app/zones-map' glyph='icon-ikons-pin-2' name='Zone Map'/>
                  <SidebarNavItem href='/app/time' glyph='icon-ikons-time' name='Time' className="hidden"/>
                  <SidebarNavItem href='/app/monitoring' glyph='icon-ikons-map' name='Monitoring'/>
                </SidebarNav>

                <SidebarNav style={{
                  marginBottom: 0
                }}>
                  <SidebarNavItem href='/app/statistics' glyph='icon-nargela-statistics' name='Statistics'/>
                  <SidebarNavItem href='/app/billing' glyph='icon-stroke-gap-icons-Goto' name='Billing'/>
                </SidebarNav>

              </div>
            </Col>
          </Row>
        </Grid>

      </div>
    );
  }
});

var DummySidebar = React.createClass({
  render: function() {
    return (
      <Grid>
        <Row>
          <Col xs={12}>
            <div className='sidebar-header'>DUMMY SIDEBAR</div>
            <LoremIpsum query='1p'/>
          </Col>
        </Row>
      </Grid>
    );
  }
});

var SidebarSection = React.createClass({
  getInitialState: function () {
    return { login: '' };
  },
  componentWillMount: function () {
    var self = this;
    $.ajax({
      url: '/api/current_login',
      type: 'GET',
      success: function (data) {
        self.setState({ login: data });
      }
    });
  },
  render: function() {
    return (
      <div id='sidebar' {...this.props}>
        <div id='avatar'>
          <Grid>
            <Row className='fg-white'>
              <Col xs={4} collapseRight>
                <img src='/imgs/avatars/avatar0.png' width='40' height='40'/>
              </Col>
              <Col xs={8} collapseLeft id='avatar-col'>
                <div style={{
                  top: 23,
                  fontSize: 16,
                  lineHeight: 1,
                  position: 'relative'
                }}>{this.state.login}</div>
                <div>
                  <Progress id='demo-progress' value={30} min={0} max={100} color='#ffffff'/>
                  <a href='#'><Icon id='demo-icon' bundle='fontello' glyph='lock-5'/></a>
                </div>
              </Col>
            </Row>
          </Grid>
        </div>
        <SidebarControls>
          <SidebarControlBtn bundle='fontello' glyph='docs' sidebar={0}/>
          <SidebarControlBtn bundle='fontello' glyph='chat-1' sidebar={1}/>
          <SidebarControlBtn bundle='fontello' glyph='chart-pie-2' sidebar={2}/>
          <SidebarControlBtn bundle='fontello' glyph='th-list-2' sidebar={3}/>
          <SidebarControlBtn bundle='fontello' glyph='bell-5' sidebar={4}/>
        </SidebarControls>
        <div id='sidebar-container'>
          <Sidebar sidebar={0} active>
            <ApplicationSidebar/>
          </Sidebar>
          <Sidebar sidebar={1}>
            <p>Taxitube</p>
          </Sidebar>
          <Sidebar sidebar={2}>
            <DummySidebar/>
          </Sidebar>
          <Sidebar sidebar={3}>
            <DummySidebar/>
          </Sidebar>
          <Sidebar sidebar={4}>
            <DummySidebar/>
          </Sidebar>
        </div>
      </div>
    );
  }
});

module.exports = SidebarSection;
