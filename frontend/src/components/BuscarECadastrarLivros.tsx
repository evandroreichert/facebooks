import React, { useState } from 'react'
import axios from 'axios'

const BuscarECadastrarLivros = () => {
  const [titulo, setTitulo] = useState('')
  const [livros, setLivros] = useState<any[]>([])
  const [livroSelecionado, setLivroSelecionado] = useState<any | null>(null)
  const [formData, setFormData] = useState({
    dataInicio: '',
    dataFim: '',
    nota: 0,
    opiniao: '',
  })

  const buscarLivros = async () => {
    if (!titulo) return

    try {
      const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${titulo}`)
      setLivros(response.data.items || [])
    } catch (error) {
      console.error('Erro ao buscar livros:', error)
    }
  }

  const selecionarLivro = (livro: any) => {
    setLivroSelecionado(livro)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
  
    const livro = {
      titulo: livroSelecionado.volumeInfo.title, 
      autor: livroSelecionado.volumeInfo.authors?.join(', '),
      imagem: livroSelecionado.volumeInfo.imageLinks?.thumbnail,
      paginas: livroSelecionado.volumeInfo.pageCount,
      dataInicio: formData.dataInicio,
      dataFim: formData.dataFim,
      nota: formData.nota,
      opiniao: formData.opiniao,
    };
  
    try {
      const response = await axios.post('http://localhost:3000/api/livros/cadastrar', livro, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      console.log('Livro cadastrado:', response.data)
    } catch (error) {
      console.error('Erro ao cadastrar livro:', error)
    }
  }
  

  return (
    <div>
      <h1>Buscar e Cadastrar Livro</h1>

      <input
        type="text"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
        placeholder="Digite o título do livro"
      />
      <button onClick={buscarLivros}>Buscar</button>

      <ul>
        {livros.map((livro: any) => (
          <li key={livro.id} onClick={() => selecionarLivro(livro)}>
            <strong>{livro.volumeInfo.title}</strong> - {livro.volumeInfo.authors?.join(', ')}
          </li>
        ))}
      </ul>

      {livroSelecionado && (
        <form onSubmit={handleSubmit}>
          <h2>Cadastro de Livro</h2>
          <p><strong>{livroSelecionado.volumeInfo.title}</strong></p>
          <p><strong>Autor(es):</strong> {livroSelecionado.volumeInfo.authors?.join(', ')}</p>
          <p><strong>Páginas:</strong> {livroSelecionado.volumeInfo.pageCount}</p>
          <img src={livroSelecionado.volumeInfo.imageLinks?.thumbnail} alt="Capa do livro" />

          <div>
            <label>Data de Início:</label>
            <input
              type="date"
              value={formData.dataInicio}
              onChange={(e) => setFormData({ ...formData, dataInicio: e.target.value })}
            />
          </div>

          <div>
            <label>Data de Fim:</label>
            <input
              type="date"
              value={formData.dataFim}
              onChange={(e) => setFormData({ ...formData, dataFim: e.target.value })}
            />
          </div>

          <div>
            <label>Nota (0-5):</label>
            <input
              type="number"
              min="0"
              max="5"
              value={formData.nota}
              onChange={(e) => setFormData({ ...formData, nota: +e.target.value })}
            />
          </div>

          <div>
            <label>Opinião:</label>
            <textarea
              value={formData.opiniao}
              onChange={(e) => setFormData({ ...formData, opiniao: e.target.value })}
            />
          </div>

          <button type="submit">Cadastrar Livro</button>
        </form>
      )}
    </div>
  )
}

export default BuscarECadastrarLivros
