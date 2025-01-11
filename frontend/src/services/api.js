import axios from 'axios'

const testarApi = async () => {
  try {
    const titulo = 'Harry Potter'
    const response = await axios.get(`http://localhost:3000/api/livros/buscar?titulo=${titulo}`)
    
    console.log('Livros encontrados:', response.data)
  } catch (error) {
    console.error('Erro ao consumir a API:', error.message)
  }
}

testarApi()
