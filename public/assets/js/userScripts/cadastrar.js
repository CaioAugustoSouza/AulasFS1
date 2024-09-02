document.addEventListener('DOMContentLoaded', function () {
    let btnCadastrar = document.querySelector('#btnCadastrar');

    btnCadastrar.addEventListener('click', cadastrar);

    function limparValidacao() {
        document.getElementById('msgErro').innerHTML = '';
        document.getElementById('inputNome').style['border-color'] = '#697a8d';
        document.getElementById('inputEmail').style['border-color'] = '#697a8d';
        document.getElementById('selPerfil').style['border-color'] = '#697a8d';
        document.getElementById('inputSenha').style['border-color'] = '#697a8d';
    }

    function validarCampos() {
        limparValidacao();
        let listaCampos = [];
        let inputNome = document.getElementById('inputNome');
        let inputEmail = document.getElementById('inputEmail');
        let inputSenha = document.getElementById('inputSenha');
        let selPerfil = document.getElementById('selPerfil');
        if (inputNome.value == '') {
            listaCampos.push(inputNome)
        }
        if (inputEmail.value == '') {
            listaCampos.push(inputEmail)
        }
        if (selPerfil.value == 0) {
            listaCampos.push(selPerfil)
        }
        if (inputSenha.value == '') {
            listaCampos.push(inputSenha)
        }
        if (listaCampos.length == 0) {
            return true;
        }
        else {
            for (let i=0; i<listaCampos.length; i++){
                listaCampos[i].style ['border-color'] = 'red';

            }
            document.getElementById ('msgErro').innerHTML = "Preencha os campos em destaque corretamente!"
        }
    }



    function cadastrar() {
        console.log('função cadastro');
        let inputNome = document.getElementById('inputNome');
        let inputEmail = document.getElementById('inputEmail');
        let inputSenha = document.getElementById('inputSenha');
        let selPerfil = document.getElementById('selPerfil');
        let cbAtivo = document.getElementById('cbAtivo');


        if (validarCampos()) {
        let obj = {
            nome: inputNome.value,
            email: inputEmail.value,
            senha: inputSenha.value,
            perfil: selPerfil.value,
            ativo: cbAtivo.checked
        }

        let stringObj = JSON.stringify(obj);

        fetch('/usuarios/cadastrar', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: stringObj
        })
            .then(function (resposta) {
                return resposta.json();
            })
            .then(function (resposta) {
                if (resposta.ok) {
                    alert('Usuário cadastrado com sucesso');
                    inputNome.value = ''
                    inputEmail.value = ''
                    inputSenha.value = ''
                    selPerfil.value = '0'
                    cbAtivo.checked = false
                }
                else {
                    alert('Erro!')
                }
            })
            .catch(function (e) {
                console.error('Erro:' + e);
            })
        }
    }
})