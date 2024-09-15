const express = require ('express');

const UsuarioController = require ('../controllers/usuarioController');

const router = express.Router();

const ctrl = new UsuarioController ();

router.get('/', ctrl.usuarioView);
router.get('/listar', ctrl.listarUsuarios);
router.get('/cadastrar', ctrl.cadastrarView);
router.post ('/cadastrar', ctrl.cadastrar);
router.get ('/atualizar/:id', ctrl.atualizarView);
router.get ('/excluir/:id', ctrl.excluir);

module.exports = router