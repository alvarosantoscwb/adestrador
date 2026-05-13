import { Link, useLocation } from 'react-router-dom'
import { useEffect } from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleServiceClick = (e, hash) => {
    // Se já estamos na página de serviços
    if (window.location.pathname === '/servicos') {
      e.preventDefault()
      // Atualiza a hash
      window.location.hash = hash
      // Scroll para o elemento
      const element = document.querySelector(hash)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  }

  return (
    <footer className="bg-gray-900 text-white py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-3 sm:mb-4">
              <span className="text-4xl sm:text-5xl">🐕‍🦺</span>
              <h3 className="text-xl sm:text-2xl font-bold">AdestradorPro</h3>
            </div>
            <p className="text-gray-400 mb-3 sm:mb-4 text-sm sm:text-base">
              Adestramento profissional de cães com técnicas modernas e positivas. Transformamos o comportamento do seu pet.
            </p>
            <div className="flex gap-3 sm:gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm" aria-label="Facebook">
                Facebook
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm" aria-label="Instagram">
                Instagram
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm" aria-label="YouTube">
                YouTube
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-3 sm:mb-4 text-base sm:text-lg">Serviços</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/servicos#basico" onClick={(e) => handleServiceClick(e, '#basico')} className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base block">
                  Adestramento Básico
                </Link>
              </li>
              <li>
                <Link to="/servicos#avancado" onClick={(e) => handleServiceClick(e, '#avancado')} className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base block">
                  Adestramento Avançado
                </Link>
              </li>
              <li>
                <Link to="/servicos#comportamento" onClick={(e) => handleServiceClick(e, '#comportamento')} className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base block">
                  Correção de Comportamento
                </Link>
              </li>
              <li>
                <Link to="/servicos#domicilio" onClick={(e) => handleServiceClick(e, '#domicilio')} className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base block">
                  Adestramento em Domicílio
                </Link>
              </li>
              <li>
                <Link to="/servicos#ar-livre" onClick={(e) => handleServiceClick(e, '#ar-livre')} className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base block">
                  Aulas ao Ar Livre
                </Link>
              </li>
              <li>
                <Link to="/servicos#filhotes" onClick={(e) => handleServiceClick(e, '#filhotes')} className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base block">
                  Adestramento para Filhotes
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-3 sm:mb-4 text-base sm:text-lg">Informações</h4>
            <ul className="space-y-2">
              <li><Link to="/sobre" onClick={scrollToTop} className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base block">Sobre Nós</Link></li>
              <li><Link to="/depoimentos" onClick={scrollToTop} className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base block">Depoimentos</Link></li>
              <li><Link to="/contato" onClick={scrollToTop} className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base block">Contato</Link></li>
              <li><Link to="/politica-privacidade" onClick={scrollToTop} className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base block">Política de Privacidade</Link></li>
              <li><Link to="/termos-de-uso" onClick={scrollToTop} className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base block">Termos de Uso</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-3 sm:mb-4 text-base sm:text-lg">Localização</h4>
            <address className="not-italic">
              <p className="text-gray-400 mb-2 text-sm sm:text-base">
                Curitiba e Região Metropolitana<br />
                Atendemos em domicílio
              </p>
            </address>
            <div className="space-y-2">
              <p className="text-gray-400 text-sm sm:text-base">
                <strong className="text-white">Telefone:</strong> (41) 99999-9999
              </p>
              <p className="text-gray-400 text-sm sm:text-base">
                <strong className="text-white">Email:</strong> contato@adestradorpro.com.br
              </p>
              <p className="text-gray-400 text-sm sm:text-base">
                <strong className="text-white">Horário:</strong> Seg-Sab, 9h às 18h
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 sm:pt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
            <div className="text-center sm:text-left">
              <p className="text-gray-400 text-xs sm:text-sm">
                © {currentYear} AdestradorPro. Todos os direitos reservados.
              </p>
            </div>
            <div className="text-center sm:text-right">
              <p className="text-gray-400 text-xs sm:text-sm">
                Adestrador Profissional de Cães • Curitiba, PR
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
