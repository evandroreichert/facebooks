import React, { useState } from 'react'
import { SearchIcon } from 'lucide-react'

const Header = ({ setSearchQuery }) => {
  const [inputValue, setInputValue] = useState('')

  const handleSearch = () => {
    setSearchQuery(inputValue)
  }

  return (
    <header className="sticky top-0 bg-white bg-opacity-90 backdrop-blur-sm z-10 shadow-sm">
      <div className="container mx-auto px-4 py-4 border-b border-gray-200">
        <nav className="flex items-center justify-between">
          <a
            href="/"
            className="text-4xl font-bold text-blue-600 hover:text-blue-700 transition-colors"
          >
            facebooks
          </a>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <SearchIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Procure um livro aqui..."
                className="w-[300px] pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all"
                aria-label="Procurar livro"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
            </div>
            <a
              href="#buscar-cadastrar-livros"
              onClick={handleSearch}
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2"
            >
              Buscar Livro
            </a>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
