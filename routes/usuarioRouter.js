const express = require ('express');

const UsuarioController = require ('../controllers/usuarioController');

const router = express.Router();

const ctrl = new UsuarioController ();

router.get('/', ctrl.usuarioView);
router.get('/listar', ctrl.listarUsuarios);
router.get('/cadastrar', ctrl.cadastrarView);

module.exports = router