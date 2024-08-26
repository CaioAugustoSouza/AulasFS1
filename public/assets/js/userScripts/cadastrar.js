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
            ativo: cdAtivo.checked
        }

        let stringObj = JSON.stringify(obj);

        fetch ()
        .then(function (){
            console.log ('fetch retornou');
        })
    }
})