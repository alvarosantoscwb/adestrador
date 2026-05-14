import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <section id="contato" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-green-50 to-white scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
            Entre em Contato
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto">
            Transforme o comportamento do seu cão hoje! Agende uma consulta gratuita e descubra como podemos ajudar.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <motion.div
            className="space-y-4 sm:space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="text-xl sm:text-2xl flex-shrink-0">📞</div>
                <div>
                  <h3 className="font-bold text-gray-900 text-sm sm:text-base">Telefone</h3>
                  <p className="text-sm sm:text-base text-gray-700">(41) 99999-9999</p>
                  <p className="text-xs sm:text-sm text-gray-600">Segunda a Sábado, 9h às 18h</p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="text-xl sm:text-2xl flex-shrink-0">📧</div>
                <div>
                  <h3 className="font-bold text-gray-900 text-sm sm:text-base">Email</h3>
                  <p className="text-sm sm:text-base text-gray-700">contato@adestradorpro.com.br</p>
                  <p className="text-xs sm:text-sm text-gray-600">Respondemos em até 24h</p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="text-xl sm:text-2xl flex-shrink-0">📍</div>
                <div>
                  <h3 className="font-bold text-gray-900 text-sm sm:text-base">Localização</h3>
                  <p className="text-sm sm:text-base text-gray-700">Curitiba e Região Metropolitana</p>
                  <p className="text-xs sm:text-sm text-gray-600">Colombo e cidades vizinhas • Adestramento em domicílio</p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="text-xl sm:text-2xl flex-shrink-0">💬</div>
                <div>
                  <h3 className="font-bold text-gray-900 text-sm sm:text-base">WhatsApp</h3>
                  <p className="text-sm sm:text-base text-gray-700">(41) 99999-9999</p>
                  <p className="text-xs sm:text-sm text-gray-600">Resposta imediata</p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="https://wa.me/5541999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl"
              >
                <span className="text-xl sm:text-2xl">💬</span>
                Fale pelo WhatsApp
              </a>
            </div>
          </motion.div>

          <motion.div
            className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
              Agende Sua Consulta Gratuita
            </h3>
            <form
              className="space-y-3 sm:space-y-4"
              action="mailto:contato@adestradorpro.com.br"
              method="post"
              encType="text/plain"
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all text-sm sm:text-base"
                  placeholder="Seu nome completo"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Telefone / WhatsApp *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all text-sm sm:text-base"
                  placeholder="(41) 99999-9999"
                />
              </div>

              <div>
                <label htmlFor="dog" className="block text-sm font-medium text-gray-700 mb-1">
                  Nome do Cão
                </label>
                <input
                  type="text"
                  id="dog"
                  name="dog"
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all text-sm sm:text-base"
                  placeholder="Nome do seu cão"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Como podemos ajudar? *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all resize-none text-sm sm:text-base"
                  placeholder="Descreva o comportamento do seu cão ou o serviço desejado..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl"
              >
                Enviar Mensagem
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
