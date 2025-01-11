const express = require('express')
const { buscarLivros } = require('../controllers/livroController')

const router = express.Router()

// router.get('/livros/buscar', buscarLivros)

router.get('/livros/buscar', (req, res) => {
    console.log('Rota /livros/buscar foi chamada!')
    buscarLivros(req, res)
  })

module.exports = router
