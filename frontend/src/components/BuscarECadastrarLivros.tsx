import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import { Search, Star, Book, Calendar, PenTool, Trash2 } from 'lucide-react'

const BuscarECadastrarLivros = ({ searchQuery }) => {
  const [titulo, setTitulo] = useState('')
  const [livros, setLivros] = useState<any[]>([])
  const [livroSelecionado, setLivroSelecionado] = useState<any | null>(null)
  const [formData, setFormData] = useState({
    dataInicio: '',
    dataFim: '',
    nota: 0,
    opiniao: '',
  })
  const [livrosCadastrados, setLivrosCadastrados] = useState<any[]>([])
  const [mensagem, setMensagem] = useState('')
  
  const formRef = useRef<HTMLFormElement | null>(null)

  const buscarLivros = async (query: string) => {
    if (!query) return

    try {
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${query}`
      )
      setLivros(response.data.items || [])
    } catch (error) {
      console.error('Erro ao buscar livros:', error)
    }
  }

  useEffect(() => {
    if (searchQuery) {
      setTitulo(searchQuery)
      buscarLivros(searchQuery)
    }
  }, [searchQuery])

  useEffect(() => {
    if (livroSelecionado && formRef.current) {
      formRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }, [livroSelecionado])

  const selecionarLivro = (livro) => {
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
    }

    try {
      const response = await axios.post('http://localhost:3000/api/livros/cadastrar', livro, {
        headers: {
          'Content-Type': 'application/json',
        },
      })

      setLivrosCadastrados((prevLivros) => [...prevLivros, livro])

      setMensagem('Livro cadastrado com sucesso!')

      setFormData({
        dataInicio: '',
        dataFim: '',
        nota: 0,
        opiniao: '',
      })
      setTitulo('')
      setLivros([]) 
      setLivroSelecionado(null) 

      setTimeout(() => {
        setMensagem('')
      }, 3000)
    } catch (error) {
      console.error('Erro ao cadastrar livro:', error)
    }
  }

  const excluirLivro = (livro: any) => {
    const livrosAtualizados = livrosCadastrados.filter(l => l.titulo !== livro.titulo)
    setLivrosCadastrados(livrosAtualizados)

    setMensagem('Livro excluído com sucesso!')
    setTimeout(() => {
      setMensagem('')
    }, 3000)
  }

  return (
    <div id="buscar-cadastrar-livros" className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-blue-900 mb-8">Buscar e Cadastrar Livro</h1>

      <div className="mb-8">
        <div className="flex items-center mb-4">
          <input
            type="text"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            placeholder="Digite o título do livro"
            className="flex-grow px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-300"
          />
          <button 
            onClick={() => buscarLivros(titulo)}
            className="px-6 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            <Search className="inline-block mr-2" size={18} />
            Buscar
          </button>
        </div>

        {livros.length > 0 && (
          <ul className="bg-white shadow-md rounded-md overflow-hidden">
            {livros.map((livro: any) => (
              <li 
                key={livro.id} 
                onClick={() => selecionarLivro(livro)}
                className="p-4 border-b border-gray-200 hover:bg-gray-50 cursor-pointer transition-colors"
              >
                <strong className="text-blue-900">{livro.volumeInfo.title}</strong>
                <span className="text-gray-600 ml-2">- {livro.volumeInfo.authors?.join(', ')}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {mensagem && (
        <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-8" role="alert">
          {mensagem}
        </div>
      )}

      {livroSelecionado && (
        <form ref={formRef} onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">{livroSelecionado.volumeInfo.title}</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="mb-2"><strong>Autor(es):</strong> {livroSelecionado.volumeInfo.authors?.join(', ')}</p>
              <p className="mb-2"><strong>Páginas:</strong> {livroSelecionado.volumeInfo.pageCount}</p>
              <p className="mb-4"><strong>Descrição:</strong> {livroSelecionado.volumeInfo.description}</p>
              
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="dataInicio">
                    <Calendar className="inline-block mr-2" size={18} />
                    Data de Início:
                  </label>
                  <input
                    id="dataInicio"
                    type="date"
                    value={formData.dataInicio}
                    onChange={(e) => setFormData({ ...formData, dataInicio: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="dataFim">
                    <Calendar className="inline-block mr-2" size={18} />
                    Data de Fim:
                  </label>
                  <input
                    id="dataFim"
                    type="date"
                    value={formData.dataFim}
                    onChange={(e) => setFormData({ ...formData, dataFim: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nota">
                  <Star className="inline-block mr-2" size={18} />
                  Nota (0-5):
                </label>
                <input
                  id="nota"
                  type="number"
                  min="0"
                  max="5"
                  value={formData.nota}
                  onChange={(e) => setFormData({ ...formData, nota: +e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="opiniao">
                  <PenTool className="inline-block mr-2" size={18} />
                  O que achou/está achando do livro?
                </label>
                <textarea
                  id="opiniao"
                  value={formData.opiniao}
                  onChange={(e) => setFormData({ ...formData, opiniao: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
                  rows={4}
                  required
                />
              </div>
            </div>
            <div>
              <img
                src={livroSelecionado.volumeInfo.imageLinks?.thumbnail}
                alt="Capa do livro"
                className="w-full max-w-[300px] mx-auto rounded-lg shadow-md"
              />
            </div>
          </div>

          <button 
            type="submit"
            className="w-full mt-6 px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            <Book className="inline-block mr-2" size={18} />
            Cadastrar Livro
          </button>
        </form>
      )}

      {livrosCadastrados.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Livros Cadastrados</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {livrosCadastrados.map((livro, index) => (
              <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
                <img src={livro.imagem} alt="Capa do livro" className="w-40 h-auto object-cover m-auto" />
                <div className="p-4">
                  <h3 className="text-lg font-bold text-blue-900 mb-2">{livro.titulo}</h3>
                  <p className="text-gray-600 mb-2">{livro.autor}</p>
                  <div className="flex items-center mb-2">
                    <Star className="text-yellow-400 mr-1" size={18} />
                    <span className="font-bold">{livro.nota}</span>
                  </div>
                  <p className="text-gray-700 text-sm">{livro.opiniao}</p>
                  
                  <div className="flex justify-between mt-4">
                    <button 
                      onClick={() => excluirLivro(livro)}
                      className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
                    >
                      <Trash2 className="inline-block mr-2" size={18} />
                      Excluir
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default BuscarECadastrarLivros