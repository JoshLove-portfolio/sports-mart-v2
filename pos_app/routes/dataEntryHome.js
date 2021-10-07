const express = require('express');
const router = express.Router();
const dataEntryHomecontroller = require('../controllers/dataEntryHome');

/* GET home page. */
router.get('/', dataEntryHomecontroller.dataEntryHome);

module.exports = router;
