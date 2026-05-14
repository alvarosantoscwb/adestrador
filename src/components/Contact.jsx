import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <section id="contato" className="py-16 sm:py-20 lg:py-24 bg-gray-50 dark:bg-gray-800 scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-3">
            Entre em Contato
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto">
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
              {[
                { icon: '📞', title: 'Telefone', line1: '(41) 99999-9999', line2: 'Segunda a Sábado, 9h às 18h' },
                { icon: '📧', title: 'Email', line1: 'contato@adestradorpro.com.br', line2: 'Respondemos em até 24h' },
                { icon: '📍', title: 'Localização', line1: 'Curitiba e Região Metropolitana', line2: 'Colombo e cidades vizinhas • Adestramento em domicílio' },
                { icon: '💬', title: 'WhatsApp', line1: '(41) 99999-9999', line2: 'Resposta imediata' },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-3 sm:gap-4">
                  <div className="text-xl sm:text-2xl flex-shrink-0">{item.icon}</div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white text-sm sm:text-base">{item.title}</h3>
                    <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">{item.line1}</p>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">{item.line2}</p>
                  </div>
                </div>
              ))}
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
            className="bg-white dark:bg-gray-900 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl border border-gray-100 dark:border-gray-700"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
              Agende Sua Consulta Gratuita
            </h3>
            <form
              className="space-y-3 sm:space-y-4"
              action="mailto:contato@adestradorpro.com.br"
              method="post"
              encType="text/plain"
            >
              {[
                { id: 'name', label: 'Nome Completo *', type: 'text', placeholder: 'Seu nome completo', required: true },
                { id: 'phone', label: 'Telefone / WhatsApp *', type: 'tel', placeholder: '(41) 99999-9999', required: true },
                { id: 'dog', label: 'Nome do Cão', type: 'text', placeholder: 'Nome do seu cão', required: false },
              ].map((field) => (
                <div key={field.id}>
                  <label htmlFor={field.id} className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    id={field.id}
                    name={field.id}
                    required={field.required}
                    placeholder={field.placeholder}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all text-sm sm:text-base"
                  />
                </div>
              ))}

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Como podemos ajudar? *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  placeholder="Descreva o comportamento do seu cão ou o serviço desejado..."
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all resize-none text-sm sm:text-base"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl cursor-pointer"
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
