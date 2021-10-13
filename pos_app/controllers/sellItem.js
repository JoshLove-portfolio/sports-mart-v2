// Display homepage
const sellItem = (req, res) => {
    if(req.query.id){
        res.render('sellItem', {id: req.query.id});
    }
    res.render('sellItem');
};

module.exports = {sellItem}
