const UsuarioModel = require ('../models/usuarioModel')

class UsuarioController {
    listarUsuarios (req, res){
        let usuarioModel = new UsuarioModel ();
        let listaUsuarios = usuarioModel.listar();
        res.render ('usuarios/listar.ejs', {usuarios: listaUsuarios})
    }
    usuarioView (req, res) {
        res.render('usuarios/home.ejs');
    }
    cadastrarView (req, res) {
        res.render ('usuarios/cadastrar.ejs');
    }
}

module.exports = UsuarioController