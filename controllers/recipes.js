const fs = require('fs')
const data = require('../data.json')

exports.index = function(req, res){
    return res.render("admin/recipes")
}

exports.create = function(req, res){
    return res.render("admin/create")
}
