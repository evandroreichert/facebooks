import React from 'react'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative mt-16 border-t border-gray-200">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
      ></div>
      <div className="relative container mx-auto px-4 py-12">
        <div className="flex flex-col items-center">
          <div className="mb-4">
            <a href="/" className="text-3xl font-bold text-blue-600 hover:text-blue-700 transition-colors">
              facebooks
            </a>
          </div>
          <nav className="mb-8">
            <ul className="flex flex-wrap justify-center gap-6">
              <li>
                <a href="/" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="/" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Termos de Uso
                </a>
              </li>
              <li>
                <a href="/" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Política de Privacidade
                </a>
              </li>
              <li>
                <a href="/" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center">
            <p className="text-gray-600">
                facebooks 2025 &copy; Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

