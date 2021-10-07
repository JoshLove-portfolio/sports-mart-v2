const express = require('express');
const router = express.Router();
const sellItemController = require('../controllers/sellItem');

/* GET home page. */
router.get('/', sellItemController.sellItem);

module.exports = router;
