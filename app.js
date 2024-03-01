const express = require("express");
const app = express();
app.listen(8081, function(){
    console.log("Servidor Ativo!")
})

app.get("/", function(red, res){
    console.log("Página Principal")
    res.send("<h2>Salve Torcida Jovem</h2>")
})

app.get("/Cadastrar", function(req,res){
    console.log("Página de Cadastro")
    res.send("Pagina de Cadastro")
})

app.get("/produtos/:item/:quantidade", function(req,res){
    res.send("Página de Produtos: " + req.params.item + "Quantidade: " + req.params.quantidade)
})

app.get("/Contato", function(req,res){
    console.log("Página de Contato")
    res.send("Pagina de Contato")
})


