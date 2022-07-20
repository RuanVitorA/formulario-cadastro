class tabelas {
    init(conexao){
        this.conexao = conexao

        this.criarFormulario()
    }

    criarFormulario(){
        const sql  = 'CREATE TABLE IF NOT EXISTS Formulario (id int NOT NULL AUTO_INCREMENT, cliente varchar(50) NOT NULL, observacoes text, PRIMARY KEY(id))'
       
        this.conexao.query(sql, (erro) => {
            if (erro) {
                console.log(erro)
            } else {
                console.log('Tabela de atedimento está funcionando')
            }
        })
    }
}

module.exports = new tabelas