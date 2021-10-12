const express = require('express');
const router = express.Router();

//Controller imports
const sellersController = require('../controllers/sellers');
const addItemsController = require('../controllers/addItems');
const sellItemsController = require('../controllers/sellItem');

//Seller routes
router.route('/sellers').get(sellersController.sellersList).post(sellersController.addSeller);
router.route('/sellers/:vendorID').get(sellersController.getSingleSeller);

//Add items routes
router.route('/addItem/:vendorID').post(addItemsController.addItem);

//Sell items routes
router.route('/sellItem/').post(sellItemsController.sellItem);

module.exports = router;
