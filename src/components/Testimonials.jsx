import { motion } from 'framer-motion'

const testimonials = [
  {
    name: 'Maria Silva',
    location: 'Curitiba, PR',
    text: 'Nosso cãozinho Max era muito agressivo com visitantes. Após algumas sessões, ele se transformou! Agora recebemos visitas sem problemas. O método é realmente eficaz.',
    rating: 5,
    before: 'Latia e pulava em todos',
    after: 'Calmíssimo e socializado',
  },
  {
    name: 'João Santos',
    location: 'Colombo, PR',
    text: 'Tínhamos um Pug que não obedecia a nada. Com o adestramento em domicílio, aprendemos técnicas que usamos até hoje. Melhor investimento que fizemos!',
    rating: 5,
    before: 'Desobediente e teimoso',
    after: 'Atencioso e disciplinado',
  },
  {
    name: 'Ana Costa',
    location: 'São José dos Pinhais, PR',
    text: 'Resolvemos a ansiedade de separação do nosso Pastor Alemão em tempo recorde. O adestrador foi paciente, profissional e explicou tudo com clareza.',
    rating: 5,
    before: 'Destruía tudo quando saíamos',
    after: 'Calmíssimo quando sozinho',
  },
  {
    name: 'Carlos Oliveira',
    location: 'Pinhais, PR',
    text: 'Levamos nosso filhote para socialização precoce. Melhor decisão! Hoje ele é um cão equilibrado que se dá bem com outros animais e pessoas.',
    rating: 5,
    before: 'Medroso e arredio',
    after: 'Social e confiante',
  },
  {
    name: 'Fernanda Lima',
    location: 'Araucária, PR',
    text: 'Adestramento avançado para competição. Nosso cão hoje obedece comandos complexos mesmo com distrações. Profissionalismo impecável!',
    rating: 5,
    before: 'Básico, distraia fácil',
    after: 'Avançado, foco total',
  },
  {
    name: 'Ricardo Almeida',
    location: 'Fazenda Rio Grande, PR',
    text: 'Recuperamos o vínculo com nosso cão depois de meses de problemas. A abordagem positiva realmente funciona. Recomendo para todos!',
    rating: 5,
    before: 'Relação tensa e conflituosa',
    after: 'Vínculo forte e amoroso',
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08 },
  }),
}

const Testimonials = () => {
  return (
    <section id="depoimentos" className="py-16 sm:py-20 lg:py-24 bg-white scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-8 sm:mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto px-2">
            Histórias reais de transformações que mudaram a vida de cães e suas famílias
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.article
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={cardVariants}
              className="bg-gradient-to-br from-gray-50 to-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center gap-1 mb-3 sm:mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg sm:text-xl">★</span>
                ))}
              </div>
              <p className="text-xs sm:text-sm lg:text-base text-gray-700 mb-3 sm:mb-4 leading-relaxed italic">
                "{testimonial.text}"
              </p>
              <div className="border-t border-gray-200 pt-3 sm:pt-4">
                <p className="font-bold text-gray-900 text-sm sm:text-base">{testimonial.name}</p>
                <p className="text-xs sm:text-sm text-gray-600">{testimonial.location}</p>
              </div>
              <div className="mt-3 sm:mt-4 grid grid-cols-2 gap-2 text-xs">
                <div className="bg-red-50 rounded-lg p-2 sm:p-3">
                  <p className="text-xs text-red-600 font-medium mb-1">Antes</p>
                  <p className="text-gray-700 text-xs sm:text-sm leading-tight">{testimonial.before}</p>
                </div>
                <div className="bg-green-50 rounded-lg p-2 sm:p-3">
                  <p className="text-xs text-green-600 font-medium mb-1">Depois</p>
                  <p className="text-gray-700 text-xs sm:text-sm leading-tight">{testimonial.after}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="mt-8 sm:mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-3 sm:gap-4 bg-green-50 rounded-lg p-4 sm:p-6">
            <div className="text-3xl sm:text-4xl">⭐</div>
            <div className="text-left">
              <p className="text-xl sm:text-2xl font-bold text-gray-900">5.0/5.0</p>
              <p className="text-sm sm:text-base text-gray-700">Baseado em +500 avaliações</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials
