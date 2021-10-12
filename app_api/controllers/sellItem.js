const mongoose = require('mongoose');
const express = require("express");
const model = mongoose.model('sellers');

const sellItem = async (req, res) => {

    await model.findOne({"items.active.barcode": req.body.barcode}).then((doc) => {
        let result = doc.items;
        console.log(result[0].active);
    })

    // model.updateOne({barcode: req.body.barcode},
    //     {
    //         $pull: {
    //             items: {
    //                 active: {barcode: req.body.barcode}
    //             }
    //         },
    //         $push: {
    //             items: {
    //                 sold: {barcode: req.body.barcode}
    //             }
    //         }
    //     },
    //     null,
    //     (err, addItem) => {
    //         if (err) {
    //             console.log(err);
    //             return res.status(404).json(err);
    //         } else {
    //             return res.status(200);
    //             // const string = encodeURIComponent(req.body.category);
    //             // res.redirect(`/dataEntryHome/addItem/?id=${req.params.vendorID}&success=` + string);
    //         }
    //     })
}

module.exports = {sellItem};
