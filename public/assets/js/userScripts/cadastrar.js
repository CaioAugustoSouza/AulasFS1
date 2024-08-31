document.addEventListener ('DOMContentLoaded', function (){
    let btnCadastrar = document.querySelector ('#btnCadastrar');

    btnCadastrar.addEventListener('click', cadastrar);
    function cadastrar () {
        console.log ('função cadastro');
        let inputNome = document.getElementById ('inputNome');
        let inputEmail = document.getElementById ('inputEmail');
        let inputSenha = document.getElementById ('inputSenha');
        let cbAtivo = document.getElementById ('inputNome');

        let obj = {
            nome: inputNome.value,
            email: inputEmail.value,
            senha: inputSenha.value,
            ativo: cbAtivo.checked
        }

        let stringObj = JSON.stringify(obj);

        fetch ('/usuarios/cadastrar', {
            method: 'POST',
            headers: {'Content-type' : 'application/json'},
            body: stringObj
        })
        .then(function (resposta){
            return resposta.json();
        })
        .then(function (resposta){
            if (resposta.deuCerto) {
                alert ('Ok');
            }
            else {
                alert ('Erro!')
            }
        })
        .catch (function(e){
            console.error ('erro:'+ e);
        })
    }
})