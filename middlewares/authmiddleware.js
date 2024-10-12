const UsuarioModel = require("../models/usuarioModel");

class AuthMiddleware {
    
    async validar (req, res, next){
        console.log(req);
        if(req.cookies.usuarioLogado) {
            let idUsuario =  req.cookies.usuarioLogado;
            let usuario = new UsuarioModel();
            usuario = await usuario.obter (idUsuario);
            if (usuario){
                //disponibilizado para a controladora
                req.usuario=usuario;
                //disponibilizado no res.render
                res.locals.usuario = usuario
                next ();
            }
        }
        else {
            res.redirect('/login');
        }
    }
}

module.exports = AuthMiddleware