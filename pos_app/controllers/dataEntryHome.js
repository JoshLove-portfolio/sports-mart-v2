// Demo JSON
const fs = require('fs');
const hbs = require('hbs');

const sellers = JSON.parse(fs.readFileSync('./data/sellers.json', 'utf8'));

// Hoping to make an API call for this value
const currentBarcode = "000000";

hbs.registerHelper('checkBarcode', function(value) {
    return value === currentBarcode;
})

// Display homepage
const dataEntryHome = (req, res) => {
    res.render('dataEntryHome', {sellers});
};

module.exports = {dataEntryHome}
