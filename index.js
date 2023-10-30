const express = require("express");
const app = express();

app.get("/", function(req, res){
    res.sendFile(__dirname+"/html/index.html")
});

app.get("/sobre", function(req, res){
    res.sendFile(__dirname+"/html/sobre.html")
});

app.get("/blog", function(req, res){
    res.send("Bem-vindo a pagina do blog!");
});

//parametros
app.get("/ola/:cargo/:nome", function(req, res){
    var nome = "<h1> Ola " + req.params.nome + "</h1>";
    var cargo = "<h2> Ola " + req.params.cargo + "</h2>";
    
    res.send(nome + " " + cargo);
});

app.listen(8081, function(){
    console.log("Servidor rodando na url http://localhost:8081");
});