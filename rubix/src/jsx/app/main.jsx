'use strict';

/* Initialize Locales */
l20n.initializeLocales('app', {
  'locales': ['en-US'],
  'default': 'en-US'
});

/* Initializing touch events */
React.initializeTouchEvents(true);

require('./preloader.jsx');

var routes = require('./routes.jsx');

Pace.once('hide', function() {
  $('#pace-loader').removeClass('pace-big').addClass('pace-small');
});

(function () {
  var _ajax = $.ajax;
  $.ajax = function (url, options) {
    if ($.isPlainObject(url)) {
      options = url
    } else {
      options.url = url;
    }
    var _beforeSend = options.beforeSend;
    options.beforeSend = function (xhr, settings) {
      if (_beforeSend)
        _beforeSend.apply(options, arguments);
      if (localStorage.hasOwnProperty('Authorization')) {
        console.debug("Setting Authorization header...");
        xhr.setRequestHeader('Authorization', localStorage.getItem('Authorization'));
      }
      if (localStorage.hasOwnProperty('Refresh-Token')) {
        console.debug("Setting Refresh-Token header...");
        xhr.setRequestHeader('Refresh-Token', localStorage.getItem('Refresh-Token'));
      }
    };
    return _ajax.apply($, arguments);
  };
})();

var InitializeRouter = function(View) {
  // cleanup
  if(window.Rubix) window.Rubix.Cleanup();
  Pace.restart();
  if(window.hasOwnProperty('ga') && typeof window.ga === 'function') {
    window.ga('send', 'pageview', {
     'page': window.location.pathname + window.location.search  + window.location.hash
    });
  }

  if (localStorage.hasOwnProperty('Authorization')) {
    if (location.pathname === '/app/login') {
      location.assign('/');
    }
  } else if (location.pathname !== '/app/login') {
    location.assign('/app/login');
  }

  React.render(<View />, document.getElementById('app-container'), function() {
    // l20n initialized only after everything is rendered/updated

    l20n.ready();
    setTimeout(function() {
      $('body').removeClass('fade-out');
    }, 500);
  });
};

if(Modernizr.history)
  ReactRouter.run(routes, ReactRouter.HistoryLocation, InitializeRouter);
else
  ReactRouter.run(routes, InitializeRouter);
