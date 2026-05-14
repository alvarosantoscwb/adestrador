import { motion } from 'framer-motion'

const stats = [
  { number: '10+', label: 'Anos de Experiência' },
  { number: '500+', label: 'Cães Treinados' },
  { number: '98%', label: 'Taxa de Sucesso' },
  { number: '5.0', label: 'Avaliação Média' },
]

const About = () => {
  return (
    <section id="sobre" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 to-white scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <motion.div
            className="relative order-2 lg:order-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <img
              src="https://images.unsplash.com/photo-1552053831-71594a27632d?w=800&h=600&fit=crop"
              alt="Adestrador profissional com cão treinado"
              className="rounded-2xl shadow-2xl w-full h-auto object-cover"
              loading="lazy"
              width={800}
              height={600}
            />
            <div className="absolute -bottom-4 -left-4 bg-green-600 text-white rounded-xl p-4 sm:p-6 shadow-lg">
              <p className="text-2xl sm:text-3xl font-bold">10+</p>
              <p className="text-xs sm:text-sm">Anos de Experiência</p>
            </div>
          </motion.div>

          <motion.div
            className="space-y-4 sm:space-y-6 order-1 lg:order-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
              Sobre Mim: Sua Parceria no Adestramento Canino
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
              Olá! Sou um adestrador profissional certificado com mais de 10 anos de experiência transformando o comportamento de cães e melhorando a qualidade de vida de suas famílias.
            </p>
            <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
              Minha filosofia é baseada em métodos positivos e cientificamente comprovados, onde reforçamos comportamentos desejados em vez de punir os indesejados. Isso cria um vínculo mais forte entre você e seu pet, com resultados duradouros.
            </p>
            <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
              Cada cão é único, e por isso crio planos personalizados que se adaptam às necessidades específicas do seu animal e da sua família. Já trabalhei com mais de 500 cães, desde filhotes até cães adultos com problemas comportamentais complexos.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center p-3 sm:p-4 bg-white rounded-lg shadow-md"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <p className="text-2xl sm:text-3xl font-bold text-green-600">{stat.number}</p>
                  <p className="text-xs sm:text-sm text-gray-700 font-medium">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            <div className="pt-4">
              <button
                onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
                className="inline-block bg-green-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl"
              >
                Agende uma Consulta Gratuita
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
