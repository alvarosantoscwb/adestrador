import { motion } from 'framer-motion'

const services = [
  {
    id: 'basico',
    icon: '🐕',
    title: 'Adestramento Básico',
    description: 'Ensine os fundamentos essenciais: sentar, deitar, ficar, vir e andar na guia. Ideal para filhotes e cães sem treinamento prévio.',
    features: ['Comandos básicos', 'Controle na guia', 'Socialização', '5-10 sessões'],
  },
  {
    id: 'avancado',
    icon: '🎯',
    title: 'Adestramento Avançado',
    description: 'Domine comandos complexos e melhore o comportamento em situações desafiadoras. Perfeito para cães com experiência básica.',
    features: ['Comandos avançados', 'Distração controlada', 'Comportamento em público', '10-15 sessões'],
  },
  {
    id: 'comportamento',
    icon: '🏠',
    title: 'Correção de Comportamento',
    description: 'Resolva problemas específicos como mordida, latidos excessivos, ansiedade de separação e agressividade.',
    features: ['Análise comportamental', 'Plano personalizado', 'Acompanhamento contínuo', 'Número variável de sessões'],
  },
  {
    id: 'domicilio',
    icon: '🐕‍🦺',
    title: 'Adestramento em Domicílio',
    description: 'Treinamento personalizado no conforto da sua casa. Maior conveniência e atenção individual para seu pet.',
    features: ['Na sua residência', 'Horário flexível', 'Foco no ambiente familiar', 'Plano personalizado'],
  },
  {
    id: 'ar-livre',
    icon: '🌳',
    title: 'Aulas ao Ar Livre',
    description: 'Prática em ambientes reais: parques, ruas e espaços públicos. Excelente para socialização e controle externo.',
    features: ['Ambientes variados', 'Socialização', 'Controle em público', '5-8 sessões'],
  },
  {
    id: 'filhotes',
    icon: '🐶',
    title: 'Adestramento para Filhotes',
    description: 'Comece cedo! O período ideal para estabelecer bons hábitos e prevenir problemas comportamentais no futuro.',
    features: ['Socialização precoce', 'Rotina e disciplina', 'Prevenção de problemas', '8-12 sessões'],
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

const Services = () => {
  return (
    <section id="servicos" className="py-16 sm:py-20 lg:py-24 bg-white dark:bg-gray-900 scroll-mt-20 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-8 sm:mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Nossos Serviços de Adestramento
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto px-2">
            Soluções completas para transformar o comportamento do seu cão e fortalecer o vínculo com sua família
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.article
              key={index}
              id={service.id}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={cardVariants}
              className="bg-white dark:bg-gray-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow group scroll-mt-20"
            >
              <div className="text-4xl sm:text-5xl mb-3 sm:mb-4 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">
                {service.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-3 sm:mb-4 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-1 sm:space-y-2">
                {service.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                    <span className="text-green-600 dark:text-green-400 text-base sm:text-lg">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="mt-8 sm:mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <button
            onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-block bg-green-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl cursor-pointer"
          >
            Solicite um Orçamento
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default Services
