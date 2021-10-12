const mongoose = require('mongoose');
const express = require("express");
const model = mongoose.model('sellers');

const addItem = async (req, res) => {
    model.updateOne({vendorID: req.params.vendorID},
        {
            $push: { // This pushes the new item to the bottom of the item array in the vendor
                items: {
                    barcode: req.body.barcode,
                    category: req.body.category,
                    price: req.body.price
                }
            }
        },
        null,
        (err, addItem) => {
            if (err) {
                console.log(err);
                return res.status(404).json(err);
            } else {
                const string = encodeURIComponent(req.body.category);
                res.redirect(`/dataEntryHome/addItem/?id=${req.params.vendorID}&success=` + string);
            }
        })
}

module.exports = {addItem};
