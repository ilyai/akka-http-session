var Header = require('../../common/header.jsx');
var Sidebar = require('../../common/sidebar.jsx');
var Footer = require('../../common/footer.jsx');

var ReactStyle = require('../../react-styles/src/ReactStyle.jsx');

var Contact = React.createClass({
  getInitialState: function() {
    return {
      invited: this.props.invited ? true : false,
      invitedText: this.props.invited ? 'invited' : 'invite'
    };
  },
  handleClick: function(e) {
    e.preventDefault();
    e.stopPropagation();
    this.setState({
      invited: !this.state.invited,
      invitedText: (!this.state.invited) ? 'invited': 'invite'
    });
  },
  render: function() {
    return (
      <tr>
        <td style={{verticalAlign: 'middle', borderTop: this.props.noBorder ? 'none': null}}>
          <img src={'/imgs/avatars/'+this.props.avatar+'.png'} />
        </td>
        <td style={{verticalAlign: 'middle', borderTop: this.props.noBorder ? 'none': null}}>
          {this.props.name}
        </td>
        <td style={{verticalAlign: 'middle', borderTop: this.props.noBorder ? 'none': null}} className='text-right'>
          <Button onlyOnHover bsStyle='orange' active={this.state.invited} onClick={this.handleClick}>
            {this.state.invitedText}
          </Button>
        </td>
      </tr>
    );
  }
});

var Body = React.createClass({
  componentDidMount: function() {
    $("#date-time").datetimepicker();

    ReactStyle.addRules(ReactStyle.create({
      '#ex1': {
        background: '#000'
      }
    }));

    $('#max-budget').ionRangeSlider({
      min: 20,
      max: 5000,
      type: 'single',
      step: 20,
      postfix: ' $',
      prettify: true,
      hasGrid: true
    });

    $('#day-budget').ionRangeSlider({
      min: 1,
      max: 5,
      type: 'single',
      step: 0.2,
      postfix: ' $',
      prettify: true,
      hasGrid: true
    });

  },


 render: function() {
   return (
     <Container id='body' >
       <Grid>
         <Row>
           <Grid>
           <Col sm={12}>
             <PanelContainer noControls>
               <PanelHeader className='bg-green fg-white'>
                 <Panel>
                   <Grid>
                     <Row>
                       <Col xs={12}>
                         <h3>Time</h3>
                       </Col>
                     </Row>
                   </Grid>
                 </Panel>
               </PanelHeader>
               <Panel horizontal className='force-collapse'>
                 <PanelBody className='panel-sm-7' style={{padding: 0}}>
                   <Col sm={6} style={{paddingTop: 15}}>
                    <h3>max budget</h3>
                    <div>
                      <Input type='text' id='max-budget' ref='example_3' />
                    </div>
                   </Col>
                   <Col sm={6}>
                     <div>
                       <h3>Choose end date <span style={{fontSize:13}}>(click calendar icon)</span></h3>
                     </div>
                     <InputGroup className='date datetimepicker-inline' ref='date-time' id="date-time">
                       <Input type='text' className='form-control' />
                       <InputGroupAddon>
                         <Icon glyph='icon-fontello-calendar' />
                       </InputGroupAddon>
                     </InputGroup>
                   </Col>
                   <Col sm={4}>
                     <h3>day budget</h3>
                     <div>
                       <Input type='text' id='day-budget' ref='day-budget' />
                     </div>
                   </Col>
                   <Grid>
                     <Row>
                       <Col xs={12} style={{marginBottom:10, marginTop:20}}>
                         <Link to="/app/zones">
                           <Button outlined bsStyle='red pull-left'>back</Button>
                           </Link>
                           <Link to="/app/campaigns">
                             <Button  bsStyle='green pull-right'>finish</Button>
                           </Link>
                       </Col>
                     </Row>
                   </Grid>
                 </PanelBody>
               </Panel>
             </PanelContainer>
           </Col>


           </Grid>
         </Row>
       </Grid>
     </Container>
   );
 }

 });

var classSet = React.addons.classSet;
var Time = React.createClass({
 mixins: [SidebarMixin],
 render: function() {
   var classes = classSet({
     'dashboard': true,
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

module.exports = Time;
