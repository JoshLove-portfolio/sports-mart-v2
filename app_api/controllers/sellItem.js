const mongoose = require('mongoose');
const express = require("express");
const model = mongoose.model('sellers');

const sellItem = async (req, res) => {

    let result;

    await model.findOne({"items.active.barcode": req.body.barcode}).then((doc) => {
        let iter = doc.items.active;
        //FIXME - wondering if there's a more efficient way to do this
        for (let i = 0; i < iter.length; i++) {
            if (iter[i].barcode === req.body.barcode) {
                result = iter[i];
            }
        }
    });

    await model.updateOne({"items.active.barcode": req.body.barcode},
        {
            $pull: {
                "items.active": {
                    barcode: req.body.barcode
                }
            },
            $push: {
                "items.sold": {
                    barcode: result.barcode,
                    category: result.category,
                    price: result.price
                }
            },
            $inc: {
                "salesFigures.totalSold": result.price,
                "salesFigures.vendorCut": result.price * .75,
                "salesFigures.troopCut": result.price * .25
            }
        },
        null,
        (err, updateItem) => {
        if(err){
            console.log(err);
            return res.status(404).json(err);
        } else {
            const string = encodeURIComponent(result.barcode);
            res.redirect(`/posHome/sellItem?id=${string}`);
        }
        });
}

module.exports = {sellItem};
