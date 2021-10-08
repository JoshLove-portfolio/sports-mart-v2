const mongoose = require('mongoose');
const model = mongoose.model('sellers');

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

//TODO - Add a single item from a seller

module.exports = {sellersList};
