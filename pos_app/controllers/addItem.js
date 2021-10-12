// Display homepage
const addItem = (req, res) => {
    if (req.query.id) {
        res.render('addItem', {id: req.query.id});
    } else {
        res.render('addItem');
    }
};

module.exports = {addItem}
