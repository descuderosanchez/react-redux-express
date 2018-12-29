// hospitalizados.js - Hospitalizados route module.

var express = require('express');
var router = express.Router();

// Home page route.
router.get('/', function (req, res) {
  res.send('Hospitalizados home page.');
})

// About page route.
router.get('/nuevoHospitalizado', function (req, res) {
  res.send('Pantalla de creación de nuevo hospitalizado.');
})

module.exports = router;