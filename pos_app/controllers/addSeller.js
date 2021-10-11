const request = require('request');
const {response} = require("express");
const apiOptions = { //FIXME - this won't work long term
    server: 'http://localhost:3000'
};

const addSeller = async (req, res) => {
    if (req.query.success) {
        let result = await getSellerName(req.query.success);
        res.render('addSeller', {firstName: result[0].firstName, lastName: result[0].lastName, success: req.query.success});
    } else {
        res.render('addSeller');
    }
};

const getSellerName = (vendorID) => {
    return new Promise((resolve, reject) => {
        const path = '/api/sellers/';
        const requestOption = {
            url: `${apiOptions.server}${path}${vendorID}`,
            method: 'GET',
            json: {}
        }

        request(requestOption, function(err, response, body) {
            if (err) {
                console.log('New vendor error: ', err);
                return reject(err);
            } else {
                return resolve(body);
            }
        })
    })
}

module.exports = {addSeller}
