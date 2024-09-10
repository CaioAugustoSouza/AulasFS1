document.addEventListener('DOMContentLoaded', () => {

    let btns = document.querySelectorAll('.btn-exlusao');
    for (let btn of btns) {
        btn.addEventListener('click', excluir)
    }

    function excluir() {
        let id = this.dataset.id;
        console.log(id)
        
    }
})