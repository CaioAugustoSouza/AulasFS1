class LoginController {
    loginView (req, res){
        res.render ('login.ejs', {layout: false});
    }
    login (req, res){
        if (req.body.email == 'admin@admin.com' && req.body.senha == '123456'){
            res.render ('home.ejs');
        }
        else{
            res.render ('login.ejs', {layout: false, msg: 'Senha e/ou usuário incorreto'});
        }
    }
}

module.exports = LoginController;