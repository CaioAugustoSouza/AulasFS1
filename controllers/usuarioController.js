const UsuarioModel = require('../models/usuarioModel')
const PerfilModel = require ('../models/perfilModel');

class UsuarioController {
    async listarUsuarios(req, res) {
        let usuarioModel = new UsuarioModel();
        let listaUsuarios = await usuarioModel.listar();
        res.render('usuarios/listar.ejs', { usuarios: listaUsuarios })
    }
    usuarioView(req, res) {
        res.render('usuarios/home.ejs');
    }
    async cadastrarView(req, res) {
        let perfilModel = new PerfilModel ();
        let listaPerfil = await perfilModel.listar ()
        res.render('usuarios/cadastrar.ejs', {perfil: listaPerfil});
    }
    cadastrar(req, res) {
        let ok;
        if (req.body.nome && req.body.email && req.body.senha && req.body.perfil && req.body.perfil > 0) {
            ok = true
        }
        else {
            ok = false
        }
        res.send ({ok:ok})
    }
}

module.exports = UsuarioController