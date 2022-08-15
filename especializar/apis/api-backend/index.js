const http = require('http')
const express = require('express')


const app = express()

let author = 'Jonathan'


app.listen('5001')

// middleware
app.use(express.json())

// rotas
app.route('/').get((req, res) => res.send(author))
app.route('/').post((req, res) => res.send(req.body))
app.route('/').put((req, res) => {
    author = req.body.author
    console.log(author);
    res.send(author)
    })
app.route('/:id').delete((req, res) => {
    res.send(req.params.id)
})
