const express = require('express');
const router = express.Router();

//Controller imports
const sellersController = require('../controllers/sellers');
const addItemsController = require('../controllers/addItems');

//Seller routes
router.route('/sellers').get(sellersController.sellersList).post(sellersController.addSeller);
router.route('/sellers/:vendorID').get(sellersController.getSingleSeller);

//Add items routes
router.route('/addItem/:vendorID').post(addItemsController.addItem);

module.exports = router;
