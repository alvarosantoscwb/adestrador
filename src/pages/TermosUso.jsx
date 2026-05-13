import SEO from '../components/SEO'

const TermosUso = () => {
  return (
    <>
      <SEO 
        title="Termos de Uso | AdestradorProfissional"
        description="Conheça os termos de uso dos nossos serviços de adestramento de cães. Regras claras e transparentes para uma experiência segura."
      />
      <div className="pt-24 sm:pt-28 lg:pt-32 py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-green-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
            Termos de Uso
          </h1>
          <p className="text-base sm:text-lg text-gray-600 mb-8">
            Última atualização: {new Date().toLocaleDateString('pt-BR')}
          </p>

          <div className="space-y-8 text-gray-700">
            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">1. Aceitação dos Termos</h2>
              <p className="leading-relaxed">
                Ao utilizar os serviços de adestramento de cães da AdestradorPro, você concorda com estes Termos de Uso. Se você não concordar, por favor não utilize nossos serviços.
              </p>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">2. Descrição dos Serviços</h2>
              <p className="leading-relaxed mb-4">
                A AdestradorPro oferece serviços profissionais de adestramento e educação canina, incluindo:
              </p>
              <ul className="space-y-2 list-disc list-inside">
                <li>Adestramento básico e avançado</li>
                <li>Correção de comportamento</li>
                <li>Adestramento em domicílio</li>
                <li>Aulas ao ar livre</li>
                <li>Adestramento para filhotes</li>
                <li>Consultoria e orientação</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">3. Obrigações do Cliente</h2>
              <ul className="space-y-2 list-disc list-inside">
                <li>Fornecer informações verdadeiras e completas sobre o animal</li>
                <li>Comparecer às sessões agendadas ou avisar com antecedência</li>
                <li>Seguir as orientações e recomendações do adestrador</li>
                <li>Manter a segurança do animal e das pessoas ao redor</li>
                <li>Respeitar os horários agendados</li>
                <li>Pagar os serviços contratados nos prazos acordados</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">4. Obrigações da AdestradorPro</h2>
              <ul className="space-y-2 list-disc list-inside">
                <li>Fornecer serviços de qualidade profissional</li>
                <li>Realizar sessões conforme combinado</li>
                <li>Manter sigilo sobre informações do cliente</li>
                <li>Tratar os animais com respeito e cuidado</li>
                <li>Utilizar métodos de adestramento positivos</li>
                <li>Fornecer orientações claras e objetivas</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">5. Pagamento e Orçamentos</h2>
              <p className="leading-relaxed mb-4">
                Os orçamentos são fornecidos gratuitamente e são válidos por 30 dias. Os preços são acordados antes do início dos serviços.
              </p>
              <ul className="space-y-2 list-disc list-inside">
                <li>Pagamento conforme combinado (à vista, parcelado, etc.)</li>
                <li>Orçamentos não vinculativos</li>
                <li>Possibilidade de reembolso em casos específicos</li>
                <li>Alterações de preço informadas com antecedência</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">6. Cancelamento e Reembolso</h2>
              <p className="leading-relaxed mb-4">
                Clientes podem cancelar ou reagendar sessões com até 24 horas de antecedência sem custo adicional.
              </p>
              <ul className="space-y-2 list-disc list-inside">
                <li>Cancelamento com 24h de aviso: sem multa</li>
                <li>Cancelamento com menos de 24h: pode haver cobrança</li>
                <li>Reembolso: em casos de não prestação do serviço</li>
                <li>Atrasos: sujeitos a cobrança de multa</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">7. Responsabilidades</h2>
              <p className="leading-relaxed mb-4">
                A AdestradorPro não se responsabiliza por:
              </p>
              <ul className="space-y-2 list-disc list-inside">
                <li>Comportamento imprevisível de animais</li>
                <li>Resultados que dependem da continuidade dos donos</li>
                <li>Lesões causadas por animais não adestrados</li>
                <li>Danos a propriedade de terceiros</li>
              <li>Fatos fora de nosso controle razoável</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">8. Segurança e Bem-Estar Animal</h2>
              <p className="leading-relaxed">
                Nosso adestrador utiliza apenas métodos positivos e reforço de comportamento desejado. Não utilizamos punição física ou psicológica.
              </p>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">9. Propriedade Intelectual</h2>
              <p className="leading-relaxed">
                Todo o conteúdo (textos, imagens, vídeos, materiais) é protegido por direitos autorais e não pode ser copiado, distribuído ou utilizado sem permissão.
              </p>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">10. Limitação de Responsabilidade</h2>
              <p className="leading-relaxed">
                Na máxima extensão permitida pela lei, a AdestradorPro não será responsável por danos diretos, indiretos, incidentais ou consequenciais decorrentes do uso ou não uso de nossos serviços.
              </p>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">11. Alterações nos Termos</h2>
              <p className="leading-relaxed">
                Reservamo-nos o direito de modificar estes termos a qualquer momento. Notificaremos sobre alterações através de nosso site, email ou WhatsApp.
              </p>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">12. Lei Aplicável</h2>
              <p className="leading-relaxed">
                Estes termos são regidos pelas leis do Brasil, especialmente o Código de Defesa do Consumidor e leis de proteção animal.
              </p>
            </section>

            <section>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">13. Contato</h2>
              <p className="leading-relaxed">
                Para dúvidas sobre estes termos, entre em contato:
              </p>
              <ul className="space-y-2">
                <li><strong>Email:</strong> contato@adestradorpro.com.br</li>
                <li><strong>Telefone:</strong> (41) 99999-9999</li>
                <li><strong>WhatsApp:</strong> (41) 99999-9999</li>
              </ul>
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

export default TermosUso
