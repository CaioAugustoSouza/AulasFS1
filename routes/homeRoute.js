const express = require ('express');
const HomeController = require ('../controllers/homeController');
const AuthMiddleware = require('../middlewares/authmiddleware');


const router = express.Router();
let ctrl = new HomeController ();


let auth = new AuthMiddleware();

router.get ('/',auth.validar, ctrl.homeView);


module.exports = router


