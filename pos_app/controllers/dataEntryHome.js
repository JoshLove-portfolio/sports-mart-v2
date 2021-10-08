// Demo JSON
const fs = require('fs');

const sellers = JSON.parse(fs.readFileSync('./data/sellers.json', 'utf8'));

console.log(sellers);

// Display homepage
const dataEntryHome = (req, res) => {
    res.render('dataEntryHome', {sellers});
};

module.exports = {dataEntryHome}
