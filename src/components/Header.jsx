import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const navItems = [
  { id: 'inicio', label: 'Início' },
  { id: 'servicos', label: 'Serviços' },
  { id: 'sobre', label: 'Sobre' },
  { id: 'depoimentos', label: 'Depoimentos' },
  { id: 'contato', label: 'Contato', isButton: true },
]

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('inicio')
  const [isScrolled, setIsScrolled] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const isHomePage = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (!isHomePage) return

    const sections = navItems.map(i => i.id)
    const observers = []

    sections.forEach(id => {
      const el = document.getElementById(id)
      if (!el) return
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id) },
        { rootMargin: '-25% 0px -65% 0px' }
      )
      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach(o => o.disconnect())
  }, [isHomePage])

  const scrollToSection = (sectionId) => {
    setIsMenuOpen(false)
    // Aguarda animação de fechar o menu (200ms) antes de rolar
    setTimeout(() => {
      if (isHomePage) {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
      } else {
        navigate('/#' + sectionId)
      }
    }, 250)
  }

  return (
    <header className={`fixed w-full top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 transition-shadow duration-300 ${isScrolled ? 'shadow-md' : 'shadow-sm'}`}>
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4" aria-label="Navegação principal">
        <div className="flex justify-between items-center">
          <button
            onClick={() => scrollToSection('inicio')}
            className="flex items-center gap-2 sm:gap-3 group"
            aria-label="Ir para o início"
          >
            <span className="text-3xl sm:text-4xl group-hover:scale-110 transition-transform">🐕‍🦺</span>
            <span className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-green-600 transition-colors">
              AdestradorPro
            </span>
          </button>

          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map(item =>
              item.isButton ? (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="bg-green-600 text-white px-4 sm:px-6 py-2 rounded-lg hover:bg-green-700 transition-colors font-medium text-sm sm:text-base ml-2"
                >
                  {item.label}
                </button>
              ) : (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-3 py-2 font-medium text-sm sm:text-base transition-colors ${
                    isHomePage && activeSection === item.id
                      ? 'text-green-600'
                      : 'text-gray-700 hover:text-green-600'
                  }`}
                >
                  {item.label}
                  {isHomePage && activeSection === item.id && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute bottom-0 left-2 right-2 h-0.5 bg-green-600 rounded-full"
                    />
                  )}
                </button>
              )
            )}
          </div>

          <button
            className="md:hidden text-gray-700 hover:text-green-600 p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
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

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden"
            >
              <div className="pt-3 pb-2 space-y-1 border-t border-gray-100 mt-3">
                {navItems.map(item => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg font-medium text-base transition-colors ${
                      item.isButton
                        ? 'bg-green-600 text-white hover:bg-green-700 text-center mt-2 block'
                        : isHomePage && activeSection === item.id
                        ? 'bg-green-50 text-green-600'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}

export default Header
