import { Link, useLocation } from 'react-router-dom'
import { useEffect, useRef } from 'react'

const Services = () => {
  const location = useLocation()
  const servicesRef = useRef(null)

  const services = [
    {
      id: "basico",
      icon: "🐕",
      title: "Adestramento Básico",
      description: "Ensine os fundamentos essenciais: sentar, deitar, ficar, vir e andar na guia. Ideal para filhotes e cães sem treinamento prévio.",
      features: ["Comandos básicos", "Controle na guia", "Socialização", "5-10 sessões"]
    },
    {
      id: "avancado",
      icon: "🎯",
      title: "Adestramento Avançado",
      description: "Domine comandos complexos e melhore o comportamento em situações desafiadoras. Perfeito para cães com experiência básica.",
      features: ["Comandos avançados", "Distração controlada", "Comportamento em público", "10-15 sessões"]
    },
    {
      id: "comportamento",
      icon: "🏠",
      title: "Correção de Comportamento",
      description: "Resolva problemas específicos como mordida, latidos excessivos, ansiedade de separação e agressividade.",
      features: ["Análise comportamental", "Plano personalizado", "Acompanhamento contínuo", "Número variável de sessões"]
    },
    {
      id: "domicilio",
      icon: "🐕‍🦺",
      title: "Adestramento em Domicílio",
      description: "Treinamento personalizado no conforto da sua casa. Maior convenience e atenção individual para seu pet.",
      features: ["Na sua residência", "Horário flexível", "Foco no ambiente familiar", "Plano personalizado"]
    },
    {
      id: "ar-livre",
      icon: "🌳",
      title: "Aulas ao Ar Livre",
      description: "Prática em ambientes reais: parques, ruas e espaços públicos. Excelente para socialização e controle externo.",
      features: ["Ambientes variados", "Socialização", "Controle em público", "5-8 sessões"]
    },
    {
      id: "filhotes",
      icon: "🐶",
      title: "Adestramento para Filhotes",
      description: "Comece cedo! O período ideal para estabelecer bons hábitos e prevenir problemas comportamentais no futuro.",
      features: ["Socialização precoce", "Rotina e disciplina", "Prevenção de problemas", "8-12 sessões"]
    }
  ]

  // Scroll para o card específico quando a hash mudar
  useEffect(() => {
    const hash = location.hash
    if (hash && hash.startsWith('#')) {
      const element = document.querySelector(hash)
      if (element) {
        // Pequeno delay para garantir que o DOM está pronto
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
          // Opcional: destacar o card com uma animação
          element.classList.add('ring-2', 'ring-green-500', 'ring-offset-2')
          setTimeout(() => {
            element.classList.remove('ring-2', 'ring-green-500', 'ring-offset-2')
          }, 2000)
        }, 100)
      }
    }
  }, [location.hash])

  // Scroll para o topo quando a rota mudar sem hash
  useEffect(() => {
    if (!location.hash && location.pathname === '/servicos') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }, [location.pathname, location.hash])

  return (
    <section className="pt-24 sm:pt-28 lg:pt-32 py-12 sm:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Nossos Serviços de Adestramento
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto px-2">
            Soluções completas para transformar o comportamento do seu cão e fortalecer o vínculo com sua família
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <article 
              key={index} 
              id={service.id}
              ref={servicesRef}
              className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow group scroll-mt-20"
            >
              <div className="text-4xl sm:text-5xl mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                {service.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-1 sm:space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2 text-xs sm:text-sm text-gray-600">
                    <span className="text-green-600 text-base sm:text-lg">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-8 sm:mt-12 text-center">
          <Link to="/contato" className="inline-block bg-green-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl">
            Solicite um Orçamento Gratuito
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Services
