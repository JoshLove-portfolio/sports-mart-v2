const request = require('request');
const apiOptions = { //FIXME - this won't work long term
    server: 'http://localhost:3000'
};

const addSeller = (req, res) => {
    if(req.query.success){
        res.render('addSeller', {Success: req.query.success});
    } else {
        res.render('addSeller');
    }
};

const getSellerName = (vendorID) => {
    const path = '/api/sellers/';
    const requestOptions = {
        url: `${apiOptions.server}${path}/${vendorID}`,
        method: 'GET',
        json: {}
    };

    request(requestOptions,
        (err, { statusCode }, body) => {
        if (err) {
            console.error(err);
            return body;
        }
            return body;
        })
}

module.exports = {addSeller}
