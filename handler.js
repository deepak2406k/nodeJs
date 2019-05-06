'use strict';

module.exports.endpoint = (event, context, callback) => {
  var common = require('./common_fun');
  var response = common.func1();
  callback(null, response);
};
