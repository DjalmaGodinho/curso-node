const Sequelize = require("sequelize");
const sequelize = new Sequelize('test', 'root', 'segreds', {
    host: "localhost",
    dialect: 'mysql'
});

// Testar a conexao com o banco de dados
sequelize.authenticate().then(function(){
    console.log("Conectado com sucesso!");
}).catch(function(erro){
    console.log("Falha na conexao!: " + erro);
});

// Criar script da tabela
const Postagem = sequelize.define('postagem', {
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
});

const Usuarios = sequelize.define('usuarios', {
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }
});

// Executando a criação da Tabela
Postagem.sync({force: true});
Usuarios.sync({force: true});

// Insert na POSTAGEM
Postagem.create({
    titulo: "Um Titulo Qualquer",
    conteudo: "Um conteudo qualquer"
});

Usuarios.create({
    nome: "Djalma",
    sobrenome: "Godinho",
    idade: 32,
    email: "djalma@teste.com.br"
});