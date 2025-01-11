const express = require('express')
const testRoute = require('./routes/testRoute')

const app = express()
const porta = 3000

app.use(express.json())

app.get('/', (req, res) => {
    res.send('server rodando')
})

app.use('/api', testRoute)

app.listen(porta, () => {
    console.log(`servidor rodando na porta ${porta}`)
})