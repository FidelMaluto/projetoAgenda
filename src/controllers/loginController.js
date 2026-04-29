const Login = require('../models/loginModel');

exports.index = (req, res) => {
    res.render('login');
}

exports.register = async function (req, res) {
    try {
        const login = new Login(req.body);
        await login.register();

        if (login.errors.length > 0) {
            req.flash('errors', login.errors);
            req.session.save(function () {
                return res.redirect('back');
            });
            return;
        }

        req.flash('seccess', 'Usuário criado com sucesso!');
        req.session.save(function () {
            return res.redirect('back');
        });
        // return res.send(login.errors);
    } catch (err) {
        console.log(e);
        return res.render('404');
    }

}
