// Display homepage
const addItem = (req, res) => {
    if (req.query.id && req.query.success) {
        res.render('addItem', {id: req.query.id, success: req.query.success});
    } else if (req.query.id) {
        res.render('addItem', {id: req.query.id});
    } else {
        res.render('addItem');
    }
};

module.exports = {addItem}
