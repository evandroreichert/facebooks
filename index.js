const express = require('express')
const cors = require('cors')
const app = express()
const porta = 3000

app.use(cors())
app.use(express.json())

let livros = []

app.post('/api/livros/cadastrar', (req, res) => {
    const livro = req.body
    
    if (!livro || !livro.titulo) {
        return res.status(400).json({ message: 'Dados do livro inválidos!' })
    }

    livros.push(livro)
    console.log('Livros cadastrados até agora:', livros)
    res.status(201).json({ message: 'Livro cadastrado com sucesso!', livro })
})

app.get('/api/livros', (req, res) => {
    res.json(livros)
})

app.listen(porta, () => {
    console.log(`Servidor rodando na porta ${porta}`)
})