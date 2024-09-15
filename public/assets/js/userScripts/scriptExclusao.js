document.addEventListener('DOMContentLoaded', () => {

    let btns = document.querySelectorAll('.btn-exlusao');
    for (let btn of btns) {
        btn.addEventListener('click', excluir)
    }

    function excluir() {
        let id = this.dataset.id;
        let nome = this.dataset.nome;
        if (confirm('Deseja realmente fazer essa exclusão ?')) {
            let that = this;
            if (id) {
                fetch(`/usuarios/excluir/${id}`)
                    .then(response => {return response.json()})
                    .then(response => {
                        alert (response.msg);
                        if (response.ok){
                            that.parentElement.parentElement.remove();
                        }
                    })
                    .catch (e=>{console.error(e)});
            }
            else {
                alert (`Id não selecionado`);
            }
        }

    }
})