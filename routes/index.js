var express = require('express');
var router = express.Router();
var faker = require('faker');
var ssn = require('ssn');

/* GET home page. */
router.get('/', function(req, res) {
  var person = faker.helpers.createCard();
  var state = faker.address.stateAbbr();

  res.render('index', {
    title: 'FNM Generator',
    ssn: ssn.generate(state).replace(/-/g, ""),
    lastName: faker.name.lastName(),
    caseNumber: faker.finance.account(),
    streetAddress: faker.address.streetAddress(),
    city: faker.address.city(),
    state: state,
    zip: faker.address.zipCode().substring(0, 5),
    leinPosition: 1
  });
});

module.exports = router;