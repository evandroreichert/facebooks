const { buscarLivrosGoogle } = require('../services/livroService')

const buscarLivros = async (req, res) => {
  console.log('buscou livro')
  const { titulo } = req.query

  if (!titulo) {
    return res.status(400).json({ error: 'Título do livro é obrigatório' })
  }

  const livros = await buscarLivrosGoogle(titulo)
  
  if (livros.length === 0) {
    return res.status(404).json({ message: 'Nenhum livro encontrado' })
  }

  res.json(livros)
}

module.exports = { buscarLivros }