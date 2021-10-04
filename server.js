const express = require('express')
const nunjucks = require('nunjucks')
const data = require('./data')

const server = express()

server.use(express.static("public"))

server.set("view engine", "njk")
nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true
})

// ROTAS 
server.get("/", function(req, res){
    return res.render('home', {receitas: data})
})

server.get("/sobre", function(req, res){
    return res.render('sobre')
})

server.get("/receitas", function(req, res){
    return res.render('receitas', {receitas: data})
})

server.get("/receita/:index", function (req, res) {
  const recipes = data; // Array de receitas carregadas do data.js
  const recipeIndex = req.params.index;

  return res.render("receita", {item: recipes[recipeIndex]})
})

server.listen(5000, function(){
    console.log("Server is running")
})