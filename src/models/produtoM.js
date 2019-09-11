const mongoose = require('../db/database')


const ProdutoSchema = new mongoose.Schema({
    nome: {
            type: String,
            require: true
    },

    marca: {
        type: String,
        require: false
    },

    price: {
        type: Number, 
        require: true
    }

}) 

module.exports = mongoose.model("Produto", ProdutoSchema)
