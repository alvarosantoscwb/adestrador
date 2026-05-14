import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'
import { supabase } from '../lib/supabase'

const navItems = [
  { id: 'inicio', label: 'Início' },
  { id: 'servicos', label: 'Serviços' },
  { id: 'galeria', label: 'Galeria' },
  { id: 'sobre', label: 'Sobre' },
  { id: 'depoimentos', label: 'Depoimentos' },
]

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme()

  return (
    <motion.button
      onClick={toggleTheme}
      aria-label={isDark ? 'Ativar modo claro' : 'Ativar modo escuro'}
      className="p-2 rounded-lg text-gray-600 dark:text-gray-300 hover:text-yellow-500 dark:hover:text-yellow-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer"
      whileTap={{ scale: 0.85, rotate: 20 }}
    >
      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          <motion.svg
            key="sun"
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
            initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
            transition={{ duration: 0.2 }}
          >
            <circle cx="12" cy="12" r="5" />
            <path strokeLinecap="round" d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
          </motion.svg>
        ) : (
          <motion.svg
            key="moon"
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
            initial={{ opacity: 0, rotate: 90, scale: 0.5 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: -90, scale: 0.5 }}
            transition={{ duration: 0.2 }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </motion.svg>
        )}
      </AnimatePresence>
    </motion.button>
  )
}

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('inicio')
  const [isScrolled, setIsScrolled] = useState(false)
  const [session, setSession] = useState(null)
  const navigate = useNavigate()
  const location = useLocation()

  const isHomePage = location.pathname === '/'

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

    return () => subscription.unsubscribe()
  }, [])

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (!isHomePage) return
    const observers = []
    navItems.forEach(({ id }) => {
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
    if (sectionId === 'admin') {
      navigate('/admin')
      return
    }
    setTimeout(() => {
      if (isHomePage) {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' })
      } else {
        navigate('/#' + sectionId)
      }
    }, 250)
  }

  const allNavItems = [...navItems]
  if (session) {
    allNavItems.push({ id: 'admin', label: 'Painel' })
  }
  allNavItems.push({ id: 'contato', label: 'Contato', isButton: true })

  return (
    <header className={`fixed w-full top-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-gray-100 dark:border-gray-800 transition-shadow duration-300 ${isScrolled ? 'shadow-md' : 'shadow-sm'}`}>
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4" aria-label="Navegação principal">
        <div className="flex justify-between items-center">
          <button
            onClick={() => scrollToSection('inicio')}
            className="flex items-center gap-2 sm:gap-3 group cursor-pointer"
            aria-label="Ir para o início"
          >
            <span className="text-3xl sm:text-4xl group-hover:scale-110 transition-transform">🐕‍🦺</span>
            <span className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
              AdestradorPro
            </span>
          </button>

          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {allNavItems.map(item =>
              item.isButton ? (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="bg-green-600 text-white px-4 sm:px-6 py-2 rounded-lg hover:bg-green-700 transition-colors font-medium text-sm sm:text-base ml-2 cursor-pointer"
                >
                  {item.label}
                </button>
              ) : (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-3 py-2 font-medium text-sm sm:text-base transition-colors cursor-pointer ${
                    (isHomePage && activeSection === item.id) || (!isHomePage && item.id === 'admin' && location.pathname.startsWith('/admin'))
                      ? 'text-green-600 dark:text-green-400'
                      : 'text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400'
                  }`}
                >
                  {item.label}
                  {((isHomePage && activeSection === item.id) || (!isHomePage && item.id === 'admin' && location.pathname.startsWith('/admin'))) && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute bottom-0 left-2 right-2 h-0.5 bg-green-600 dark:bg-green-400 rounded-full"
                    />
                  )}
                </button>
              )
            )}
            <div className="ml-3">
              <ThemeToggle />
            </div>
          </div>

          <div className="flex md:hidden items-center gap-3">
            <ThemeToggle />
            <button
              className="text-gray-700 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400 p-2 cursor-pointer"
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
              <div className="pt-3 pb-2 space-y-1 border-t border-gray-100 dark:border-gray-800 mt-3">
                {allNavItems.map(item => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg font-medium text-base transition-colors cursor-pointer ${
                      item.isButton
                        ? 'bg-green-600 text-white hover:bg-green-700 text-center mt-2 block'
                        : (isHomePage && activeSection === item.id) || (!isHomePage && item.id === 'admin' && location.pathname.startsWith('/admin'))
                        ? 'bg-green-50 dark:bg-green-900/30 text-green-600 dark:text-green-400'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800'
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
