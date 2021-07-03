const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json())

const anuncio = require("./routes/anuncios.routes")

app.use('/anuncio', anuncio)


module.exports = app