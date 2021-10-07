const express = require('express');
const router = express.Router();
const addSellerController = require('../controllers/addSeller');

/* GET home page. */
router.get('/', addSellerController.addSeller);

module.exports = router;
