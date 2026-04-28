exports.index = (req, res) => {
    res.render('login');
}

exports.register = function(req, res) {
    res.send("Olá");
}
