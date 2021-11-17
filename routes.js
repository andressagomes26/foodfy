const express = require("express")
const routes = express.Router()
const data = require('./data')
const recipes = require('./controllers/recipes')

routes.get("/", function(req, res){
    return res.render('home', {recipes: data})
})

routes.get("/sobre", function(req, res){
    return res.render('sobre')
})

routes.get("/recipes", function(req, res){
    return res.render('recipes', {recipes: data})
})

routes.get("/recipe/:index", function (req, res) {
  const recipes = data; // Array de receitas carregadas do data.js
  const recipeIndex = req.params.index;

  return res.render("recipe", {item: recipes[recipeIndex]})
})

// Rotas ADM 
routes.get("/admin/recipes", recipes.index); // Mostrar a lista de receitas
routes.get("/admin/recipes/create", recipes.create); // Mostrar formulário de nova receita
/*routes.get("/admin/recipes/:id", recipes.show); // Exibir detalhes de uma receita
routes.get("/admin/recipes/:id/edit", recipes.edit); // Mostrar formulário de edição de receita

routes.post("/admin/recipes", recipes.post); // Cadastrar nova receita
routes.put("/admin/recipes", recipes.put); // Editar uma receita
routes.delete("/admin/recipes", recipes.delete); // Deletar uma receita*/


module.exports = routes