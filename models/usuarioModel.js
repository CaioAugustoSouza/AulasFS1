const Database = require('../Utils/database.js');
let db = new Database();
class UsuarioModel {
    #id
    #nome
    #senha
    #email
    #ativo
    #perfil_id
    #perfil_descricao

    constructor(id, nome, email, senha, ativo, perfil_id, perfil_descricao) {
        this.#id = id;
        this.#nome = nome;
        this.#email = email;
        this.#senha = senha;
        this.#ativo = ativo;
        this.#perfil_id = perfil_id;
        this.#perfil_descricao = perfil_descricao;
    }
    // get e set id 
    get id() {
        return this.#id;
    }
    set id(novo_id) {
        this.#id = novo_id
    }
    // get e set nome 
    get nome() {
        return this.#nome;
    }
    set nome(novo_nome) {
        this.#nome = novo_nome
    }
    // get e set senha 
    get senha() {
        return this.#senha;
    }
    set senha(novo_senha) {
        this.#senha = novo_senha
    }
    // get e set email
    get email() {
        return this.#email;
    }
    set email(novo_email) {
        this.#email = novo_email
    }
    // get e set perfil_id
    get perfil_id() {
        return this.#perfil_id;
    }
    set perfil_id(novo_perfil_id) {
        this.#perfil_id = novo_perfil_id
    }
    // get e set ativo
    get ativo() {
        return this.#ativo
    }
    set ativo(novo_ativo) {
        this.#ativo = novo_ativo
    }
    // get e set perfil_descricao
    get perfil_descricao() {
        return this.#perfil_descricao
    }
    set perfil_descricao(nova_descricao) {
        this.#perfil_descricao = nova_descricao
    }



    async listar() {  
        let sql = `select * from tb_usuario u
                    inner join tb_perfil p on u.per_id = p.per_id`;
        const resultados = await db.ExecutaComando(sql);
        const listaUsuarios = []
        for (const registro of resultados) {
            listaUsuarios.push(new UsuarioModel(
                registro['usu_id'],
                registro['usu_nome'],
                registro['usu_email'],
                registro['usu_senha'],
                registro['usu_ativo'],
                registro['per_id'],
                registro['per_descricao']
            ))
        }
        return listaUsuarios;
    }
    async gravar() {
        let sql = `insert into tb_usuario (usu_nome, usu_email, usu_senha, usu_ativo, per_id) values ( ?, ?, ?, ?, ?)`
        let valores = [this.#nome, this.#email, this.#senha, this.#ativo, this.#perfil_id];
        let result = await db.ExecutaComandoNonQuery(sql,valores);
        return result;
    }
    async excluir(id){
        let sql = `delete from tb_usuario where usu_id = ?`
        let valores = [id];
        let result = await db.ExecutaComandoNonQuery(sql, valores);
        return result;
    }
    async obter(id){
        let sql = `select * from tb_usuario where usu_id = ?` //comando sql
        let valores = [id];
        let result = await db.ExecutaComando(sql, valores);
        if (result.length>0){
            return new UsuarioModel (
                result[0]['usu_id'],
                result[0]['usu_nome'],
                result[0]['usu_email'],
                result[0]['usu_senha'],
                result[0]['usu_ativo'],
                result[0]['per_id'],
            )
        }
        return null;
    }

    async atualizar(){
        let sql = `UPDATE tb_usuario
                    SET usu_nome = ?, 
                        usu_email = ?, 
                        usu_senha = ?, 
                        usu_ativo = ?, 
                        per_id = ?
                    WHERE usu_id = ?;`
        let valores = [this.#nome, this.#email, this.#senha, this.#ativo, this.#perfil_id, this.#id];
        let result = await db.ExecutaComandoNonQuery(sql,valores);
        return result;
    }
}

module.exports = UsuarioModel