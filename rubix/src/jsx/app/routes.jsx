/* ERROR PAGES */
var notfound = require('./routes/notfound.jsx');
var notfound = require('./routes/notfound.jsx');

var homepage = require('./routes/app/campaigns.jsx');
var billing = require('./routes/app/billing.jsx');

/* APP PAGES */

var profile = require('./routes/app/profile.jsx');
var login = require('./routes/app/login.jsx');
var signup = require('./routes/app/signup.jsx');
var blank = require('./routes/app/blank.jsx');


// assets
var uploadVideo = require('./routes/app/upload-video.jsx');
var crop = require('./routes/app/crop.jsx');
var gallery = require('./routes/app/gallery.jsx');
var editVideo = require('./routes/app/edit-video.jsx');
var uploadImg = require('./routes/app/upload-img.jsx');
var lists = require('./routes/app/lists.jsx');


var tables = require('./routes/app/tables.jsx');
var campaigns = require('./routes/app/campaigns.jsx');
var details = require('./routes/app/details.jsx');
var customers = require('./routes/app/customers.jsx');
var users = require('./routes/app/users.jsx');
var createUser = require('./routes/app/create-user.jsx');
var editUser = require('./routes/app/edit-user.jsx');
var createCustomer = require('./routes/app/create-customer.jsx');
var taxiCompanies = require('./routes/app/taxi-companies.jsx');
var taxiDrivers = require('./routes/app/taxi-drivers.jsx');
var taxiProfile = require('./routes/app/taxi-profile.jsx');
var createTaxiCompany = require('./routes/app/create-taxi-company.jsx');
var createTaxiDriver = require('./routes/app/create-taxi-driver.jsx');
//var taxiCompanies = require('./routes/app/taxi-companies.jsx');


var zones = require('./routes/app/zones.jsx');
var time = require('./routes/app/time.jsx');
var zonesMap = require('./routes/app/zones-map.jsx');
var monitoring = require('./routes/app/monitoring.jsx');


var statistics = require('./routes/app/statistics.jsx');

/* ROUTES */
module.exports = (
  <Route handler={ReactRouter.RouteHandler}>
    <DefaultRoute handler={homepage} />
    <Route path='/' handler={homepage} />
    <NotFoundRoute handler={notfound} />
    <Route path='/app/campaigns' handler={homepage} />
    <Route path='/app/profile' handler={profile} />
    <Route path='/app/customers' handler={customers} />
    <Route path='/app/campaigns' handler={campaigns} />
    <Route path='/app/taxi-companies' handler={taxiCompanies} />
    <Route path='/app/taxi-drivers' handler={taxiDrivers} />
    <Route path='/app/taxi-profile' handler={taxiProfile} />
    <Route path='/app/create-taxi-company' handler={createTaxiCompany} />
    <Route path='/app/create-taxi-driver' handler={createTaxiDriver} />
    <Route path='/app/users' handler={users} />
    <Route path='/app/create-user' handler={createUser} />
    <Route path='/app/edit-user' handler={editUser} />
    <Route path='/app/create-customer' handler={createCustomer} />
    <Route path='/app/details' handler={details} />
    <Route path='/app/upload-video' handler={uploadVideo} />
    <Route path='/app/edit-video' handler={editVideo} />
    <Route path='/app/upload-img' handler={uploadImg} />
    <Route path='/app/crop' handler={crop} />
    <Route path='/app/lists' handler={lists} />
    <Route path='/app/assets/gallery' handler={gallery} />
    <Route path='/app/zones' handler={zones} />
    <Route path='/app/zones-map' handler={zonesMap} />
    <Route path='/app/monitoring' handler={monitoring} />
    <Route path='/app/login' handler={login} />
    <Route path='/app/signup' handler={signup} />
    <Route path='/app/time' handler={time} />
    <Route path='/app/tables' handler={tables} />
    <Route path='/app/billing' handler={billing} />
    <Route path='/app/statistics' handler={statistics} />


  </Route>
);
