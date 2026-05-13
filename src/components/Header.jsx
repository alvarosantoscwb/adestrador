import { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <header className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4" aria-label="Navegação principal">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 sm:gap-3 group">
            <span className="text-3xl sm:text-4xl lg:text-5xl group-hover:scale-110 transition-transform">
              🐕‍🦺
            </span>
            <span className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 group-hover:text-green-600 transition-colors">
              AdestradorPro
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-4 sm:space-x-6 lg:space-x-8">
            <Link to="/" className="text-gray-700 hover:text-green-600 transition-colors font-medium text-sm sm:text-base">Início</Link>
            <Link to="/servicos" className="text-gray-700 hover:text-green-600 transition-colors font-medium text-sm sm:text-base">Serviços</Link>
            <Link to="/sobre" className="text-gray-700 hover:text-green-600 transition-colors font-medium text-sm sm:text-base">Sobre</Link>
            <Link to="/depoimentos" className="text-gray-700 hover:text-green-600 transition-colors font-medium text-sm sm:text-base">Depoimentos</Link>
            <Link to="/contato" className="bg-green-600 text-white px-4 sm:px-6 py-2 rounded-lg hover:bg-green-700 transition-colors font-medium text-sm sm:text-base">
              Contato
            </Link>
          </div>

          <button
            className="md:hidden text-gray-700 hover:text-green-600 p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Abrir menu"
            aria-expanded={isMenuOpen}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-2 sm:space-y-3 pb-4">
            <Link to="/" onClick={closeMenu} className="block text-gray-700 hover:text-green-600 transition-colors font-medium text-base py-2">Início</Link>
            <Link to="/servicos" onClick={closeMenu} className="block text-gray-700 hover:text-green-600 transition-colors font-medium text-base py-2">Serviços</Link>
            <Link to="/sobre" onClick={closeMenu} className="block text-gray-700 hover:text-green-600 transition-colors font-medium text-base py-2">Sobre</Link>
            <Link to="/depoimentos" onClick={closeMenu} className="block text-gray-700 hover:text-green-600 transition-colors font-medium text-base py-2">Depoimentos</Link>
            <Link to="/contato" onClick={closeMenu} className="block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium text-base text-center mt-4">
              Contato
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
