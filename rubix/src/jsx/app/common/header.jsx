var Brand = React.createClass({
  render: function() {
    return (
      <NavHeader {...this.props}>
        <NavBrand tabIndex='-1'>
          <img src='/imgs/logo.png' alt='Taxitube' width='80' height='50' />
        </NavBrand>
      </NavHeader>
    );
  }
});

var Navigation = React.createClass({
  mixins: [ReactRouter.State, ReactRouter.Navigation],
  logout: function () {
    var self = this;
    $.ajax({
      url: '/api/do_logout',
      type: 'POST',
      success: function () {
        localStorage.removeItem('Authorization');
        localStorage.removeItem('Refresh-Token');
        self.transitionTo('/app/login');
      }
    });
  },
  render: function() {
    var props = React.mergeProps({
      className: 'pull-right'
    }, this.props);

    return (
      <NavContent {...props}>
        <Nav>
          <NavItem className='logout bg-green' href="javascript:void(0)" onClick={this.logout}>
              <Icon bundle='fontello'  glyph='off-1' />
          </NavItem>
        </Nav>
      </NavContent>
    );
  }
});

var Header = React.createClass({
  render: function() {
    return (
      <Grid {...this.props} id='navbar'>
        <Row>
          <Col xs={12}>
            <NavBar fixedTop id='rubix-nav-header'>
              <Container fluid>
                <Row>
                  <Col xs={3} visible='xs'>
                    <SidebarBtn />
                  </Col>
                  <Col xs={6} sm={4}>
                    <Brand />
                  </Col>
                  <Col xs={3} sm={8}>
                    <Navigation />
                  </Col>
                </Row>
              </Container>
            </NavBar>
          </Col>
        </Row>
      </Grid>
    );
  }
});

module.exports = Header;
