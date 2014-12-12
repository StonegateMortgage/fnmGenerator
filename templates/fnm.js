'use strict';

var fs = require('fs');
var Handlebars = require('Handlebars');
var faker = require('faker');

Handlebars.registerHelper('fixed-front', function(object) {
  var string = object.value.substring(0, object.width);

  return string + Array(object.width - string.length).join(' ');
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
      "caseNumber": {
        "value": options.caseNumber,
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
      },
      "residenceAddress": {
        "value": faker.address.streetAddress(),
        "width": 50
      },
      "residenceCity": {
        "value": faker.address.city(),
        "width": 35
      },
      "residenceState": {
        "value": faker.address.stateAbbr(),
        "width": 2
      },
      "residenceZip": {
        "value": faker.address.zipCode(),
        "width": 5
      },
      "employerAddress": {
        "value": faker.address.streetAddress(),
        "width": 35
      },
      "employerCity": {
        "value": faker.address.city(),
        "width": 35
      },
      "employerState": {
        "value": faker.address.stateAbbr(),
        "width": 2
      },
      "employerZip": {
        "value": faker.address.zipCode(),
        "width": 5
      },
      "employer": {
        "value": faker.company.companyName(),
        "width": 35
      }
    }

    return template(data);
  }
};