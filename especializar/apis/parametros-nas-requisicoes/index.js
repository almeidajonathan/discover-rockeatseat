const express = require('express')
const app = express()

app.listen('3000')

//middleware
app.use(express.json())

app.route('/').post((req, res) => {
    const {nome, cidade, tecnologias} = req.body 
    res.send(`meu nome é ${nome} e minha cidade é ${cidade}.`)
    console.log(`${nome} de ${cidade}.`)
}) 