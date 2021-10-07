const express = require('express');
const router = express.Router();
const posHomeController = require('../controllers/posHome');

/* GET home page. */
router.get('/', posHomeController.posHome);

module.exports = router;
