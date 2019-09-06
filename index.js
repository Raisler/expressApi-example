const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const Produto = require('./src/models/produtoM')


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

app.post('/registro', async (req, res, next) => {

        const produto = await Produto.create(req.body)
        return produto.save()    
})

app.listen(8019, () => 
{
 console.log("servidor rodando")
})


