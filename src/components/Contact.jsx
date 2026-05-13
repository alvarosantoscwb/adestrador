const Contact = () => {
  return (
    <section className="pt-24 sm:pt-28 lg:pt-32 py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-green-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="space-y-4 sm:space-y-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
              Entre em Contato
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-700 leading-relaxed">
              Transforme o comportamento do seu cão hoje! Agende uma consulta gratuita e descubra como podemos ajudar.
            </p>

            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="text-xl sm:text-2xl flex-shrink-0">📞</div>
                <div>
                  <h3 className="font-bold text-gray-900 text-sm sm:text-base">Telefone</h3>
                  <p className="text-sm sm:text-base text-gray-700">(11) 99999-9999</p>
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
                  <p className="text-sm sm:text-base text-gray-700">(11) 99999-9999</p>
                  <p className="text-xs sm:text-sm text-gray-600">Resposta imediata</p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <a href="https://wa.me/5511999999999" className="inline-flex items-center gap-2 bg-green-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl">
                <span className="text-xl sm:text-2xl">💬</span>
                Fale pelo WhatsApp
              </a>
            </div>
          </div>

          <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 shadow-xl">
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
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all text-sm sm:text-base"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Telefone *
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
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
