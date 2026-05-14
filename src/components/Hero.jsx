import { motion } from 'framer-motion'

const Hero = () => {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="inicio" className="pt-20 sm:pt-24 lg:pt-28 bg-gradient-to-br from-green-50 to-white min-h-screen flex flex-col scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 flex-1 flex flex-col justify-center">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div
            className="space-y-6 sm:space-y-8 order-2 lg:order-1"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Transforme o Comportamento do Seu Cão com
              <span className="text-green-600 block sm:inline"> Adestramento Profissional</span>
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed">
              Métodos positivos e científicos para educar seu pet de forma amorosa e eficiente.
              Mais de 10 anos de experiência transformando cães e famílias.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => scrollTo('contato')}
                className="bg-green-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-green-700 transition-colors text-center shadow-lg hover:shadow-xl"
              >
                Agende uma Consulta Gratuita
              </button>
              <button
                onClick={() => scrollTo('servicos')}
                className="border-2 border-green-600 text-green-600 px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-green-50 transition-colors text-center"
              >
                Conheça Nossos Serviços
              </button>
            </div>
            <div className="flex items-center gap-4 sm:gap-6 pt-4 flex-wrap sm:flex-nowrap">
              <div className="flex -space-x-2 sm:-space-x-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-green-200 flex items-center justify-center text-green-600 font-bold border-2 border-white text-xs sm:text-sm">+500</div>
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-green-300 flex items-center justify-center text-green-700 font-bold border-2 border-white text-xs sm:text-sm">⭐</div>
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-green-400 flex items-center justify-center text-white font-bold border-2 border-white text-xs sm:text-sm">🐕</div>
              </div>
              <div className="text-xs sm:text-sm text-gray-600">
                <strong className="text-gray-900 block sm:inline">+500 clientes satisfeitos</strong>
                <span className="hidden sm:inline"> • </span>
                <br className="sm:hidden" />
                Avaliação 5.0/5.0
              </div>
            </div>
          </motion.div>

          <motion.div
            className="relative order-1 lg:order-2"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <img
              src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800&h=800&fit=crop"
              alt="Adestrador profissional trabalhando com cachorro treinado"
              className="rounded-2xl shadow-2xl w-full h-auto object-cover"
              loading="eager"
              width={800}
              height={800}
            />
            <div className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 bg-white rounded-xl p-3 sm:p-4 shadow-lg">
              <div className="flex items-center gap-2">
                <span className="text-2xl sm:text-3xl">🎓</span>
                <div>
                  <p className="font-bold text-gray-900 text-sm sm:text-base">Certificado</p>
                  <p className="text-xs sm:text-sm text-gray-600">Método Positivo</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.button
          className="flex flex-col items-center gap-1 text-gray-400 hover:text-green-600 transition-colors mx-auto mt-12 sm:mt-16 pb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          onClick={() => scrollTo('servicos')}
          aria-label="Rolar para serviços"
        >
          <span className="text-xs font-medium">Role para ver mais</span>
          <motion.svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </motion.svg>
        </motion.button>
      </div>
    </section>
  )
}

export default Hero
