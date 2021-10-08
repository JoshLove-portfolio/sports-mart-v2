const request = require('request');
const hbs = require('hbs');
const apiOptions = {
    server: 'http://localhost:3000'
};

//FIXME - This whole thing is a little janky since I decided to place this information at the dataEntryHome view
//FIXME - In reality, this probably needs to be it's own js file which is called to grab seller information from the api

// Hoping to make an API call for this value
const currentBarcode = "000000";

hbs.registerHelper('checkBarcode', function(value) {
    return value === currentBarcode;
})


const renderSellerList = (req, res, responseBody) => {
    let message = null;
    if (!(responseBody instanceof Array)) {
        message = 'API lookup error';
        responseBody = [];
    } else {
        if (!responseBody.length) {
            message = 'No sellers in the db';
        }
    }
    res.render('dataEntryHome', {sellers: responseBody, message});
}

const sellerList = (req, res) => {
    const path ='/api/sellers';
    const requestOptions = {
        url: `${apiOptions.server}${path}`,
        method: 'GET',
        json: {}
    };
    console.log('CALLING ' + requestOptions.url);
    request(requestOptions,
        (err, { statusCode }, body) => {
        if (err) {
            console.error(err);
        }
        renderSellerList(req, res, body)
        });
};

module.exports = {sellerList}
