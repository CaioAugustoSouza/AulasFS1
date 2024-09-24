const UsuarioModel = require("../models/usuarioModel");

class LoginController {
    loginView (req, res){
        res.render ('login.ejs', {layout: false});
    }
    async login (req, res){
        let msg;
        if (req.body.email && req.body.senha){
            let usuario = new UsuarioModel();
            usuario  = await usuario.validarUsuario(req.body.email, req.body.senha)
            if (usuario){
                res.cookie('usuarioLogado', usuario.id);
                res.redirect('/');
            }
            else {
                msg = 'Senha e/ou usuário incorreto'
                res.render ('login.ejs', {layout: false, msg: msg});
            }
        }
        else{
            res.render ('login.ejs', {layout: false, msg: msg});
        }
    }
}

module.exports = LoginController;