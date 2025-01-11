const express = require('express')
const { cadastrarLivro, listarLivros } = require('../controllers/livrosController')

const router = express.Router()

router.post('/cadastrar', cadastrarLivro)

router.get('/listar', listarLivros)

module.exports = router