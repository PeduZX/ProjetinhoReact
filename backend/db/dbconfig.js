const mysql2 = require('mysql2');

const conexao = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'CurriculosLink'
});

conexao.connect((erro) => {
    if(erro){
        console.log('Erro ao conectar ao banco de dados:', erro);
        return;
    }
    console.log('Conexão bem-sucedida ao banco de dados!');
})

module.exports = conexao;

