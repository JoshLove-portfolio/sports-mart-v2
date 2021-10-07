const express = require('express');
const router = express.Router();
const addItemController = require('../controllers/addItem');

/* GET home page. */
router.get('/', addItemController.addItem);

module.exports = router;
