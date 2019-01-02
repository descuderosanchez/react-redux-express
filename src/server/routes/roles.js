var express = require('express');
var router = express.Router();

// Require controller modules.
var roles_controller = require('../controllers/rolesController');

// Get List of roles
router.get('/getlist', roles_controller.roles_list_get);

module.exports = router;