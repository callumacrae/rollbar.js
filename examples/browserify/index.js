var rollbar = require('../../dist/rollbar.umd.min.js');

var rollbarConfig = {
  accessToken: 'POST_CLIENT_ITEM_ACCESS_TOKEN',
  captureUncaught: true,
  payload: {
    environment: 'development',
  }
};

rollbarNotifier = rollbar.init(rollbarConfig);

window.rollbar = rollbarNotifier;
