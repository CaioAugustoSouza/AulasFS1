
const Database = require ('../Utils/database.js');

class PerfilModel {
    #per_id
    #per_descricao
    constructor (per_id, per_descricao){
        this.#per_id = per_id;
        this.#per_descricao = per_descricao;
    }
    // get e set id 
    get per_id () {
        return this.#per_id;
    }
    set id (novo_id){
        this.#per_id = novo_id
    }
    // get e set descricao 
    get per_descricao () {
        return this.#per_descricao;
    }
    set per_descricao (nova_descricao){
        this.#per_descricao = nova_descricao;
    }
    async listar () {
        const db = new Database ();
        const sql = `select * from tb_perfil order by per_descricao`
        const resultados = await db.ExecutaComando(sql);
        const listaPerfil = []
        for (const registro of resultados){
            listaPerfil.push(new PerfilModel (
                registro['per_id'], 
                registro['per_descricao']
            ))
        }
        return listaPerfil;
    }
}

module.exports = PerfilModel