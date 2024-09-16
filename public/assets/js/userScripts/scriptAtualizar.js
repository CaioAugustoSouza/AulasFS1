document.addEventListener("DOMContentLoaded", ()=>{
    let btns = document.querySelectorAll ('.btn-atualizar');
    for (let btn of btns){
        btn.addEventListener('click',atualizar)
    }
    function atualizar (){
        let id = this.dataset.id;
        let nome = this.dataset.nome;
        let that = this;
        if (confirm (`Deseja atualizar o usuário ${nome}`)){
            if (id){
                fetch (`/usuarios/atualizar/${id}`)
            }
        }
    }

})