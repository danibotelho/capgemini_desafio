const express = require('express')
const router = express.Router()
const controller = require('../controllers/anuncioController')

//create -> POST ->
router.post('/cadastrar', controller.criaAnuncio)

//read -> GET -> find()
router.get('/todos', controller.mostrarAnuncios)
router.get('/cliente', controller.mostrarCliente)
router.get('/dias', controller.mostrarDias)

//delete -> DELETE -> getById() ou findOne() e remove()
router.delete('/:id', controller.deletaAnuncio)

module.exports = router