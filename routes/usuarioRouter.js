const express = require ('express');

const UsuarioController = require ('../controllers/usuarioController');
const AuthMiddleware = require('../middlewares/authmiddleware');

const router = express.Router();

const ctrl = new UsuarioController ();
let auth = new AuthMiddleware();

router.get('/', auth.validar, ctrl.usuarioView);
router.get('/listar', auth.validar, ctrl.listarUsuarios);
router.get('/cadastrar', auth.validar, ctrl.cadastrarView);
router.post ('/cadastrar', auth.validar, ctrl.cadastrar);
router.get ('/atualizar/:id', auth.validar, ctrl.atualizarView);
router.get ('/excluir/:id', auth.validar, ctrl.excluir);
router.post ('/atualizar', auth.validar, ctrl.atualizar);

module.exports = router