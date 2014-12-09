var express = require('express');
var router = express.Router();
var templates = require('../templates/fnm');

/* GET users listing. */
router.get('/', function(req, res) {
  res.send('respond with a resource');
});

router.post('/', function(req, res) {
  res.set('Content-Type', 'application/octet-stream');
  res.set('Content-Disposition', 'attachment;filename=generated.fnm');

  res.send(templates.basic(req.body));
})

module.exports = router;