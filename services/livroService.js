const axios = require('axios')

const buscarLivrosGoogle = async (titulo) => {
  try {
    const response = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${titulo}`)
    const livros = response.data.items.map(item => ({
      id: item.id,
      titulo: item.volumeInfo.title,
      autor: item.volumeInfo.authors ? item.volumeInfo.authors.join(', ') : 'Autor desconhecido',
      quantidade_de_paginas: item.volumeInfo.pageCount,
      imagem_capa: item.volumeInfo.imageLinks ? item.volumeInfo.imageLinks.thumbnail : null,
    }))
    return livros
  } catch (error) {
    console.error('Erro ao buscar livros:', error)
    return []
  }
}

module.exports = { buscarLivrosGoogle }
