// Display homepage
const home = (req, res) => {
    res.render('home', {title: 'SportsMart Test'});
};

module.exports = {home}
