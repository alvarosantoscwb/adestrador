import { Link } from 'react-router-dom'

const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-3 sm:mb-4">
              <span className="text-4xl sm:text-5xl">🐕‍🦺</span>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">AdestradorPro</h3>
            </div>
            <p className="text-gray-500 dark:text-gray-400 mb-3 sm:mb-4 text-sm sm:text-base">
              Adestramento profissional de cães com técnicas modernas e positivas. Transformamos o comportamento do seu pet.
            </p>
            <div className="flex gap-3 sm:gap-4">
              <a href="#" className="text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors text-sm" aria-label="Facebook">Facebook</a>
              <a href="#" className="text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors text-sm" aria-label="Instagram">Instagram</a>
              <a href="#" className="text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors text-sm" aria-label="YouTube">YouTube</a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-3 sm:mb-4 text-base sm:text-lg text-gray-900 dark:text-white">Serviços</h4>
            <ul className="space-y-2">
              {[
                { id: 'basico', label: 'Adestramento Básico' },
                { id: 'avancado', label: 'Adestramento Avançado' },
                { id: 'comportamento', label: 'Correção de Comportamento' },
                { id: 'domicilio', label: 'Adestramento em Domicílio' },
                { id: 'ar-livre', label: 'Aulas ao Ar Livre' },
                { id: 'filhotes', label: 'Adestramento para Filhotes' },
              ].map(item => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollTo(item.id)}
                    className="text-gray-500 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors text-sm sm:text-base text-left cursor-pointer"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-3 sm:mb-4 text-base sm:text-lg text-gray-900 dark:text-white">Navegação</h4>
            <ul className="space-y-2">
              {[
                { id: 'inicio', label: 'Início' },
                { id: 'sobre', label: 'Sobre Nós' },
                { id: 'depoimentos', label: 'Depoimentos' },
                { id: 'contato', label: 'Contato' },
              ].map(item => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollTo(item.id)}
                    className="text-gray-500 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors text-sm sm:text-base text-left cursor-pointer"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
              <li>
                <Link to="/politica-privacidade" className="text-gray-500 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors text-sm sm:text-base block">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link to="/termos-de-uso" className="text-gray-500 dark:text-gray-400 hover:text-green-600 dark:hover:text-green-400 transition-colors text-sm sm:text-base block">
                  Termos de Uso
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-3 sm:mb-4 text-base sm:text-lg text-gray-900 dark:text-white">Localização</h4>
            <address className="not-italic">
              <p className="text-gray-500 dark:text-gray-400 mb-2 text-sm sm:text-base">
                Curitiba e Região Metropolitana<br />
                Atendemos em domicílio
              </p>
            </address>
            <div className="space-y-2">
              <p className="text-gray-500 dark:text-gray-400 text-sm sm:text-base">
                <strong className="text-gray-900 dark:text-white">Telefone:</strong> (41) 99999-9999
              </p>
              <p className="text-gray-500 dark:text-gray-400 text-sm sm:text-base">
                <strong className="text-gray-900 dark:text-white">Email:</strong> contato@adestradorpro.com.br
              </p>
              <p className="text-gray-500 dark:text-gray-400 text-sm sm:text-base">
                <strong className="text-gray-900 dark:text-white">Horário:</strong> Seg-Sab, 9h às 18h
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-100 dark:border-gray-800 pt-6 sm:pt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
            <div className="text-center sm:text-left">
              <p className="text-gray-400 dark:text-gray-500 text-xs sm:text-sm">
                © {currentYear} AdestradorPro. Todos os direitos reservados.
              </p>
            </div>
            <div className="text-center sm:text-right">
              <p className="text-gray-400 dark:text-gray-500 text-xs sm:text-sm">
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
