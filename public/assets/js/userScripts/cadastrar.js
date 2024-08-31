document.addEventListener('DOMContentLoaded', function () {
    let btnCadastrar = document.querySelector('#btnCadastrar');

    btnCadastrar.addEventListener('click', cadastrar);


    function validarCampos() {
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
        if (inputSenha.value == '') {
            listaCampos.push(inputSenha)
        }
        if (selPerfil.value == 0) {
            listaCampos.push(selPerfil)
        }
        if (listaCampos.length == 0) {
            return true;
        }
        else {
            for (let i = 0; listaCampos.length; i++) {
                listaCampos[i].style['border-color'] = "red";
                //outra opção de sintaxe
                // listaCampos [i].style.borderColor = "red";
                alert('Formulário não preenchido corretamente! Preencha corretamente os campos destacados!');
                return false;
            }
        }
    }

    function cadastrar() {
        console.log('função cadastro');
        let inputNome = document.getElementById('inputNome');
        let inputEmail = document.getElementById('inputEmail');
        let inputSenha = document.getElementById('inputSenha');
        let cbAtivo = document.getElementById('cbAtivo');


        if (validarCampos()) {
            let obj = {
                nome: inputNome.value,
                email: inputEmail.value,
                senha: inputSenha.value,
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
                    if (resposta.deuCerto) {
                        alert('Ok');
                    }
                    else {
                        alert('Erro!')
                    }
                })
                .catch(function (e) {
                    console.error('erro:' + e);
                })
        }
    }
})