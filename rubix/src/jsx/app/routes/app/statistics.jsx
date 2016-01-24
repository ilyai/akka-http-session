var Header = require('../../common/header.jsx');
var Sidebar = require('../../common/sidebar.jsx');
var Footer = require('../../common/footer.jsx');



var Body = React.createClass({
  getInitialState: function () {
    return {
      onlineLog: []
    };
  },
  componentDidMount: function() {
    $('.tablesaw').table();

    $('#startDate').datetimepicker({
      format: 'YYYY-MM-DD',
      defaultDate:  moment().subtract(1, 'months')
    });
    $('#endDate').datetimepicker({
      useCurrent: false, //Important! See issue #1075
      format: 'YYYY-MM-DD',
      defaultDate: moment()
    });
    $("#startDate").on("dp.change", function (e) {
        $('#endDate').data("DateTimePicker").minDate(e.date);
    });
    $("#endDate").on("dp.change", function (e) {
        $('#startDate').data("DateTimePicker").maxDate(e.date);
    });

    this.refreshStats();
  },
  refreshStats: function () {
    this.loadStats($("#startDate input").val(), $("#endDate input").val());
  },
  loadStats: function (startDate, endDate) {
    var self = this;
    var DEVICE_LOGGER_URL = $('body').data('device-logger-url') || 'http://localhost:5100';
    Pace.start();
    $.getJSON(DEVICE_LOGGER_URL + '/totalOnline/*')
        .done(function (totalOnline) {
          console.log("Total online: %o", totalOnline);
          var params = {
            deviceId: '*',
            startDate: startDate,
            endDate: endDate
          };
          $.ajax({
            type: "POST",
            url: DEVICE_LOGGER_URL + '/rangeOnline',
            data: JSON.stringify(params),
            contentType: 'application/json'
          })
              .done(function (rangeOnline) {
                var devices = {};
                var onlineLog = [];
                console.log("Online from %s to %s: %o", params.startDate, params.endDate, rangeOnline);
                totalOnline.deviceLog.forEach(function (log) {
                  devices[log.deviceId] = {
                    deviceId: log.deviceId,
                    totalOnline: log.totalOnline.toFixed(2)
                  };
                });
                rangeOnline.deviceLog.forEach(function (log) {
                  if (!(log.deviceId in devices))
                    devices[log.deviceId] = { deviceId: log.deviceId };
                  var totalThisMonth = log.onlineLog.reduce(function (a, b) {
                    a.log.duration += b.log.duration;
                    return a;
                  }, { log: { duration: 0 } }).log.duration;
                  var daysInRange = moment(endDate).diff(moment(startDate), 'days');
                  var averagePerDay = totalThisMonth / (daysInRange >= 1 ? daysInRange : 1);
                  devices[log.deviceId].totalThisMonth = totalThisMonth.toFixed(2);
                  devices[log.deviceId].averagePerDay = averagePerDay.toFixed(2);
                });
                for (deviceId in devices) {
                  onlineLog.push(devices[deviceId]);
                }
                console.log("onlineLog: %o", onlineLog);
                self.setState({ onlineLog: onlineLog });
              })
              .fail(function () {
                console.error(arguments);
              })
              .always(function () {
                Pace.stop();
              });
        })
        .fail(function () {
          console.error(arguments);
        });
  },
  render: function() {
    var onlineLog = this.state.onlineLog.map(function (log) {
      return (
        <tr>
          <td>{log.deviceId}</td>
          <td>{log.totalThisMonth}</td>
          <td>{log.averagePerDay}</td>
          <td>{log.totalOnline}</td>
        </tr>
      );
    });
    return (
      <Container id='body'>
        <Grid>
          <Row>
            <Col xs={12}>
              <PanelContainer noControls>
                <Panel>
                  <PanelHeader className='bg-red fg-white'>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <h3>Statistics</h3>
                        </Col>
                      </Row>
                    </Grid>
                  </PanelHeader>
                  <PanelBody>
                    <Grid>
                      <Row>
                        <Col xs={12}>
                          <p>Month Device Online Statistics</p>
                          <div className='col-md-4'>
                            <div className="form-group">
                              <div className='input-group date' id='startDate'>
                                  <input type='text' className="form-control" />
                                  <span className="input-group-addon">
                                      <span className="glyphicon glyphicon-calendar"></span>
                                  </span>
                              </div>
                          </div>
                        </div>
                        <div className='col-md-4'>
                          <div className="form-group">
                              <div className='input-group date' id='endDate'>
                                  <input type='text' className="form-control" />
                                  <span className="input-group-addon">
                                      <span className="glyphicon glyphicon-calendar"></span>
                                  </span>
                              </div>
                          </div>
                        </div>
                          <div className='col-md-4'>
                            <Button bsStyle='success' onClick={this.refreshStats}>Refresh</Button>
                          </div>

                          <Table striped bordered className='tablesaw' data-mode="swipe" data-sortable data-sortable-switch data-mode-switch>
                            <thead>
                              <tr>
                                <th data-sortable-col data-sortable-default-col data-priority='persist'>Device ID</th>
                                <th data-sortable-col data-priority='1'>Total hours online this period</th>
                                <th data-sortable-col data-priority='2'>Average hours per day</th>
                                <th data-sortable-col data-priority='3'>Total hours online since registration</th>
                              </tr>
                            </thead>
                            <tbody>
                            {onlineLog}
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
var Statistics = React.createClass({
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



module.exports = Statistics;
