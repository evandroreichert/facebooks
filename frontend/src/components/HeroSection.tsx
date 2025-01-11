import React from "react"
import { ArrowBigDownDash, Star } from 'lucide-react';

const HeroSection = () => {
  return (
    <main className="container mx-auto px-4 py-12 mt-8 sm:mt-16">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight mb-6 text-blue-900">
            ORGANIZE SUAS LEITURAS
          </h1>
          <p className="text-gray-700 mb-8 text-lg">
            Cadastre os livros que leu, adicione datas importantes e compartilhe suas opiniões sobre cada obra.
          </p>
          <button className="px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 text-lg font-semibold">
            Cadastrar Livro
            <ArrowBigDownDash className="inline-block w-6 h-6 ml-2" />
          </button>
        </div>
        <div className="relative mt-8 md:mt-0">
          <img
            src="https://i.gifer.com/NYqp.gif"
            alt="Capa do livro Harry Potter e a Pedra Filosofal"
            className="w-full max-w-[400px] rounded-lg shadow-lg mx-auto"
          />
          <div className="absolute bottom-4 right-4 bg-blue-900 text-white p-4 rounded-lg max-w-[250px]">
            <div className="text-xl font-bold mb-1">Mais Avaliado</div>
            <div className="text-sm mb-2">da semana</div>
            <div>
              <div className="font-medium">Harry Potter e a Pedra Filosofal</div>
              <div className="text-sm">J. K. Rowling</div>
            </div>
            <div className="flex items-center mt-2">
              <Star className="w-4 h-4 fill-current text-yellow-400" />
              <Star className="w-4 h-4 fill-current text-yellow-400" />
              <Star className="w-4 h-4 fill-current text-yellow-400" />
              <Star className="w-4 h-4 fill-current text-yellow-400" />
              <Star className="w-4 h-4 fill-current text-yellow-400" />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default HeroSection

