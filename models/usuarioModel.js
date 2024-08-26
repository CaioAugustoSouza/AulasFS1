let usuarios = [
    {
        "id": 1,
        "nome": "Caio",
        "email": "caio@unoeste.br",
        "senha": 12345
    },
    {
        "id": 2,
        "nome": "João",
        "email": "joao@unoeste.br",
        "senha": 12345
    },
    {
        "id": 3,
        "nome": "Hugo",
        "email": "hugo@unoeste.br",
        "senha": 12345
    },
    {
        "id": 4,
        "nome": "Diogo",
        "email": "diogo@unoeste.br",
        "senha": 12345
    }
]

class UsuarioModel {
    listar () {
        return usuarios;
    }

}

module.exports = UsuarioModel