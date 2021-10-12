const mongoose = require('mongoose');
const express = require("express");
const model = mongoose.model('sellers');

//SET for seller
const addSeller = async (req, res) => {
    model.create({
        vendorID: req.body.vendorID,
        phoneNum: req.body.phoneNum,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        address: req.body.address,
        city: req.body.city,
        state: req.body.state,
        zipCode: req.body.zipCode
    },
        (err, seller) => {
        if(err) {
            console.log(err)
            return res.status(404).json(err);
        } else {
            const string = encodeURIComponent(req.body.vendorID);
            res.redirect('/dataEntryHome/addSeller/?success=' + string);
        }
        })
}

//GET for all sellers
const sellersList = async (req, res) => {
    model.find({})
        .exec((err, sellers) => {
            if(!sellers){
                return res.status(404).json({"message": "Sellers not found in db"});
            } else if (err) {
                return res.status(404).json(err);
            } else {
                return res.status(200).json(sellers);
            }
        });
};

const getSingleSeller = async (req, res) => {
    model.find({vendorID: req.params.vendorID})
        .exec((err, seller) => {
            if(!seller) {
                return res.status(404).json({"message": "Seller not found"});
            } else if (err) {
                return res.status(404).json(err);
            } else {
                return res.status(200).json(seller);
            }
        })
}

//TODO - Add a single item from a seller

module.exports = {
    sellersList,
    getSingleSeller,
    addSeller
};
