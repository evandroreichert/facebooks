const livros = []

const cadastrarLivro = (req, res) => {
  const { titulo, autor, paginas, imagem, dataInicio, dataFim, nota, opiniao } = req.body

  const novoLivro = {
    id: livros.length + 1,
    titulo,
    autor,
    paginas,
    imagem,
    dataInicio,
    dataFim,
    nota,
    opiniao,
  }

  livros.push(novoLivro)
  return res.status(201).json(novoLivro)
}

const listarLivros = (req, res) => {
  return res.json(livros)
}

module.exports = {
  cadastrarLivro,
  listarLivros,
}
