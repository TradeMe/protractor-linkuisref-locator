'use strict';

exports.config = {
  seleniumJar: '../node_modules/protractor/bin/webdriver-manager start',
  capabilities: {
    browserName: 'chrome',
  },
  specs: ['./index.js'],
  onPrepare: function () {
    require('../index')(protractor);
  },
  baseUrl: "http://localhost:3000",
  framework: 'jasmine',
  jasmineNodeOpts: {
    isVerbose: true,
    showColors: true,
    includeStackTrace: true
  }
}