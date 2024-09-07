
const Database = require ('../Utils/database.js');



class UsuarioModel {
    #id
    #nome
    #senha
    #email
    #ativo
    #perfil_id
    constructor (id, nome, email, senha, ativo, perfil_id){
        this.#id = id;
        this.#nome = nome;
        this.#email = email;
        this.#senha = senha;
        this.#ativo = ativo;
        this.#perfil_id = perfil_id;
    }
    // get e set id 
    get id () {
        return this.#id;
    }
    set id (novo_id){
        this.#id = novo_id
    }
    // get e set nome 
    get nome () {
        return this.#nome;
    }
    set nome (novo_nome){
        this.#nome = novo_nome
    }
    // get e set senha 
    get senha () {
        return this.#senha;
    }
    set senha (novo_senha){
        this.#senha = novo_senha
    }
    // get e set email
    get email () {
        return this.#email;
    }
    set email (novo_email){
        this.#email = novo_email
    }
    // get e set perfil_id
    get perfil_id () {
        return this.#perfil_id;
    }
    set perfil_id (novo_perfil_id){
        this.#perfil_id = novo_perfil_id
    }
    // get e set ativo
    get ativo () {
        return this.#ativo
    }
    set ativo (novo_ativo){
        this.#ativo = novo_ativo
    }


    async listar () {
        const db = new Database ();
        const sql = `select * from tb_usuario u
                    inner join tb_perfil p on u.per_id = p.per_id`;
        const resultados = await db.ExecutaComando(sql);
        const listaUsuarios = []
        for (const registro of resultados){
            listaUsuarios.push(new UsuarioModel (
                registro['usu_id'], 
                registro['usu_nome'], 
                registro['usu_email'], 
                registro['usu_senha'], 
                registro['usu_ativo'], 
                registro['per_id']
            ))
        }
        return listaUsuarios;
    }
    async gravar () {

    }
    async atualizar () {

    }
    async excluir () {

    }

}

module.exports = UsuarioModel