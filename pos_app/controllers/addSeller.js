const request = require('request');
const {response} = require("express");
const apiOptions = { //FIXME - this won't work long term
    server: 'http://localhost:3000'
};

const addSeller = (req, res) => {
    if (req.query.success) {
        //FIXME - I'd really like to get the first/last name of the vendor passed back from query string but I can't figure this out
        //FIXME - attempt down below
        //let result;
        //result = getSellerName(req.query.success);

        res.render('addSeller', {success: req.query.success});
    } else {
        res.render('addSeller');
    }
};

//FIXME - why is this called twice?

// const getSellerName = (vendorID) => {
//     const path = '/api/sellers/';
//     const requestOptions = {
//         url: `${apiOptions.server}${path}${vendorID}`,
//         method: 'GET',
//         json: {}
//     };
//
//     let result;
//
//     request(
//         requestOptions,
//         (err, { statusCode }, body) => {
//         result = body;
//         if (err) {
//             console.error(err);
//         }
//             return body;
//         }
//         )
//
//     return result;
// }

module.exports = {addSeller}
