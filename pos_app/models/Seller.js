const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    barcode: {type: String, required: true},
    category: {type: String, required: true},
    price: {type: String, required: true}
})

//FIXME - there's probably some better types out there than just strings?
const sellerSchema = new mongoose.Schema({
    vendorID: {type: String, required: true, unique: true, index: true}, //Index based off of the vendorID since it's always unique
    phoneNum: {type: String, required: true},
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    address: {type: String, required: true},
    city: {type: String, required: true},
    state: {type: String, required: true},
    zipCode: {type: String, required: true},
    items: [itemSchema]
})

module.exports = mongoose.model('sellers', sellerSchema);
