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
                res.send ({ok:true, msgm:`Usuário ${usuario.nome} cadastrado com sucesso`})
            }
            else {
                res.send ({ok:false, msgm:'Erro ao cadastrar usuário'})
            }
        }
        else {
            res.send ({ok: false, msgm: 'Informações incorretas'});
        }
    }
    async excluir (req, res){
        // recebe parametro de 
        let id = req.params.id;
        let usuarioModel = new UsuarioModel();
        let result = await usuarioModel.excluir(id)
        let msg = '';
        if (result){
            msg = 'Usuário excluído com sucesso!';
        }
        else {
            msg = 'Erro ao excluir usuário';
        }
        res.send ({ok:result, msg :msg});

    }
    async atualizarView (req, res){
        let id = req.params.id;
        let perfil = new PerfilModel ();
        let usuario = new UsuarioModel ();
        usuario = await usuario.obter(id);
        let lista = await perfil.listar ();
        res.render('usuarios/cadastrar.ejs');
    }
}

module.exports = UsuarioController