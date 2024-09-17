document.addEventListener("DOMContentLoaded", () => {
    let btns = document.querySelectorAll('.btn-atualizar');
    for (let btn of btns) {
        btn.addEventListener('click', atualizar)
    }

    function atualizar() {
        let id = this.dataset.id;
        let nome = this.dataset.nome;
        if (confirm(`Deseja atualizar o usuário ${nome}`)) {
            if (id) {
                window.location.href = `/usuarios/atualizar/${id}`;
                // fetch(`/usuarios/atualizar/${id}`, {
                //     method: 'POST',
                //     headers: { 'Content-type': 'application/json' },
                // })
            }
        }
    }

    let btnAtualizar = document.querySelector('#btnAtualizar')
    btnAtualizar.addEventListener('click', atualizarCadastro)
    function atualizarCadastro() {
        let inputId = document.getElementById('inputId');
        let inputNome = document.getElementById('inputNome');
        let inputEmail = document.getElementById('inputEmail');
        let inputSenha = document.getElementById('inputSenha');
        let selPerfil = document.getElementById('selPerfil');
        let cbAtivo = document.getElementById('cbAtivo');


        if (true) {
            let obj = {
                id: inputId.value,
                nome: inputNome.value,
                email: inputEmail.value,
                senha: inputSenha.value,
                perfil: selPerfil.value,
                ativo: cbAtivo.checked
            }

            let stringObj = JSON.stringify(obj);

            fetch('/usuarios/atualizar', {
                method: 'POST',
                headers: { 'Content-type': 'application/json' },
                body: stringObj
            })
                .then(resposta => {
                    return resposta.json();
                })
                .then(resposta => {
                    if (resposta.ok) {
                        alert(resposta.msgm);
                        inputNome.value = ''
                        inputEmail.value = ''
                        inputSenha.value = ''
                        selPerfil.value = '0'
                        cbAtivo.checked = false
                    }
                    else {
                        alert(resposta.msgm)
                    }
                })
                .catch(function (e) {
                    console.error('Erro ao tentar fazer a requisição: ' + e);
                })
        }
    }
})