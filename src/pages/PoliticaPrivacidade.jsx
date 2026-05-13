import SEO from '../components/SEO'

const PoliticaPrivacidade = () => {
  return (
    <>
      <SEO 
        title="Política de Privacidade | AdestradorProfissional"
        description="Conheça nossa política de privacidade e como protegemos seus dados. Seus dados são tratados com segurança e transparência."
      />
      <div className="pt-24 sm:pt-28 lg:pt-32 py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-green-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
            Política de Privacidade
          </h1>
          <p className="text-base sm:text-lg text-gray-600 mb-8">
            Última atualização: {new Date().toLocaleDateString('pt-BR')}
          </p>

          <div className="space-y-8 text-gray-700">
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">1. Introdução</h2>
              <p className="leading-relaxed">
                Bem-vindo à AdestradorPro. Esta Política de Privacidade descreve como coletamos, usamos e protegemos suas informações pessoais quando você utiliza nossos serviços de adestramento de cães.
              </p>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">2. Informações que Coletamos</h2>
              <p className="leading-relaxed mb-4">
                Coletamos apenas as informações necessárias para fornecer nossos serviços:
              </p>
              <ul className="space-y-2 list-disc list-inside">
                <li><strong>Nome completo</strong> - Para identificação e comunicação</li>
                <li><strong>Email</strong> - Para envio de orçamentos e confirmações</li>
                <li><strong>Telefone</strong> - Para contato e agendamento</li>
                <li><strong>Nome do animal</strong> - Para personalizar o adestramento</li>
                <li><strong>Informações sobre comportamento</strong> - Para entender suas necessidades</li>
                <li><strong>Endereço (opcional)</strong> - Para atendimento em domicílio</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">3. Como Usamos suas Informações</h2>
              <ul className="space-y-2 list-disc list-inside">
                <li>Processar agendamentos de adestramento</li>
                <li>Enviar orçamentos e informações sobre nossos serviços</li>
                <li>Comunicar sobre mudanças ou novos serviços</li>
                <li>Melhorar a qualidade do atendimento</li>
                <li>Personalizar a experiência do adestramento</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">4. Compartilhamento de Informações</h2>
              <p className="leading-relaxed">
                <strong>NÃO compartilhamos</strong> suas informações pessoais com terceiros sem seu consentimento, exceto quando necessário para:
              </p>
              <ul className="space-y-2 list-disc list-inside">
                <li>Cumprimento de obrigações legais</li>
                <li>Proteção dos nossos direitos</li>
                <li>Prevenção de fraudes</li>
                <li>Execução de serviços solicitados</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">5. Segurança dos Dados</h2>
              <p className="leading-relaxed">
                Adotamos medidas de segurança apropriadas para proteger suas informações contra acesso não autorizado, alteração ou destruição. Utilizamos tecnologias de criptografia e seguimos as melhores práticas de segurança.
              </p>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">6. Seus Direitos</h2>
              <ul className="space-y-2 list-disc list-inside">
                <li>Acesso às suas informações pessoais</li>
                <li>Correção de dados incompletos ou incorretos</li>
                <li>Exclusão de suas informações</li>
                <li>Oposição ao processamento de dados</li>
                <li>Revogação de consentimento</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">7. Cookies</h2>
              <p className="leading-relaxed">
                Podemos usar cookies para melhorar sua experiência. Você pode gerenciar suas preferências de cookies através das configurações do seu navegador.
              </p>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">8. Contato</h2>
              <p className="leading-relaxed">
                Para dúvidas, solicitações ou exercício de seus direitos, entre em contato:
              </p>
              <ul className="space-y-2">
                <li><strong>Email:</strong> contato@adestradorpro.com.br</li>
                <li><strong>Telefone:</strong> (41) 99999-9999</li>
                <li><strong>WhatsApp:</strong> (41) 99999-9999</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">9. Atualizações</h2>
              <p className="leading-relaxed">
                Reservamo-nos o direito de atualizar esta política a qualquer momento. Notificaremos sobre mudanças significativas através de nossos canais de comunicação.
              </p>
            </section>
          </div>

          <div className="mt-12 text-center">
            <a href="/" className="inline-block bg-green-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl">
              Voltar para a Página Inicial
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default PoliticaPrivacidade
