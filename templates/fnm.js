'use strict';

var fs = require('fs');
var Handlebars = require('Handlebars');

Handlebars.registerHelper('fixed-front', function(object) {
  return object.value + Array(object.width - object.value.length).join(' ');
});
Handlebars.registerHelper('fixed-back', function(object) {
  return Array(object.width - object.value.length).join(' ') + object.value;
});

var template = Handlebars.compile(fs.readFileSync('templates/30conregister.tpl.fnm', {
  encoding: 'utf-8'
}));

module.exports = {
  basic: function(options) {
    var data = {
      "ssn": {
        "value": options.ssn,
        "width": 9
      },
      "loanNumber": {
        "value": options.loanNumber,
        "width": 15
      },
      "lastName": {
        "value": options.lastName,
        "width": 35
      },
      "streetAddress": {
        "value": options.streetAddress,
        "width": 50
      },
      "city": {
        "value": options.city,
        "width": 35
      },
      "state": {
        "value": options.state,
        "width": 2
      },
      "zip": {
        "value": options.zip,
        "width": 5
      },
      "transactionType": {
        "value": options.transactionType,
        "width": 2
      },
      "lienPosition": {
        "value": options.lienPosition,
        "width": 1
      }
    }

    return template(data);
  }
};