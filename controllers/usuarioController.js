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
    async cadastrar(req, res) {
        let ok;
        if (req.body.nome && req.body.email && req.body.senha && req.body.perfil && req.body.perfil > 0) {
            let usuario = new UsuarioModel ();
            usuario.nome = req.body.nome;
            usuario.email = req.body.email;
            usuario.senha = req.body.senha;
            usuario.ativo = req.body.ativo;
            usuario.perfil_id = req.body.perfil;
            let result = await usuario.gravar();
            if (result){
                res.send ({ok:true, msgm:'Cadastro realizado com sucesso'})
            }
            else {
                res.send ({ok:false, msgm:'Erro ao cadastrar'})
            }
        }
        else {
            res.send ({ok: false, msgm: 'Informações incorretas'});
        }
    }
    async excluir (req, res){
        // recebe parametro de exclusão
        let usuarioModel = new UsuarioModel();
    }
}

module.exports = UsuarioController