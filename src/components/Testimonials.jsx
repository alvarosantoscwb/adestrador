import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { supabase } from '../lib/supabase'

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, delay: i * 0.08 },
  }),
}

const StarSelector = ({ value, onChange }) => (
  <div className="flex gap-1">
    {[1, 2, 3, 4, 5].map(star => (
      <button
        key={star}
        type="button"
        onClick={() => onChange(star)}
        className={`text-2xl transition-transform hover:scale-110 cursor-pointer ${star <= value ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-600'}`}
      >
        ★
      </button>
    ))}
  </div>
)

const TestimonialCard = ({ testimonial, index }) => (
  <motion.article
    custom={index}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: '-50px' }}
    variants={cardVariants}
    className="bg-gray-50 dark:bg-gray-800 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-shadow"
  >
    <div className="flex items-center gap-1 mb-3">
      {[...Array(testimonial.rating)].map((_, i) => (
        <span key={i} className="text-yellow-400 text-lg sm:text-xl">★</span>
      ))}
    </div>
    <p className="text-xs sm:text-sm lg:text-base text-gray-700 dark:text-gray-300 mb-3 sm:mb-4 leading-relaxed italic">
      "{testimonial.texto}"
    </p>
    <div className="border-t border-gray-200 dark:border-gray-700 pt-3">
      <p className="font-bold text-gray-900 dark:text-white text-sm sm:text-base">{testimonial.nome}</p>
      {testimonial.cidade && (
        <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">{testimonial.cidade}</p>
      )}
    </div>
  </motion.article>
)

const SubmitForm = () => {
  const [form, setForm] = useState({ nome: '', cidade: '', texto: '', rating: 5 })
  const [status, setStatus] = useState('idle') // idle | loading | success | error

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    const { error } = await supabase.from('testimonials').insert([{
      nome: form.nome,
      cidade: form.cidade,
      texto: form.texto,
      rating: form.rating,
      status: 'pending',
    }])
    if (error) {
      setStatus('error')
    } else {
      setStatus('success')
      setForm({ nome: '', cidade: '', texto: '', rating: 5 })
    }
  }

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center py-10 px-6 bg-green-50 dark:bg-green-900/20 rounded-2xl border border-green-200 dark:border-green-800"
      >
        <div className="text-5xl mb-4">🐕</div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Depoimento enviado!</h3>
        <p className="text-gray-600 dark:text-gray-400">Obrigado pelo seu relato. Ele será publicado após aprovação.</p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-6 text-green-600 dark:text-green-400 font-medium hover:underline cursor-pointer"
        >
          Enviar outro
        </button>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Seu nome *
          </label>
          <input
            type="text"
            required
            value={form.nome}
            onChange={e => setForm(f => ({ ...f, nome: e.target.value }))}
            placeholder="João Silva"
            className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Cidade
          </label>
          <input
            type="text"
            value={form.cidade}
            onChange={e => setForm(f => ({ ...f, cidade: e.target.value }))}
            placeholder="Curitiba, PR"
            className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all text-sm"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          Avaliação *
        </label>
        <StarSelector value={form.rating} onChange={r => setForm(f => ({ ...f, rating: r }))} />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Seu depoimento *
        </label>
        <textarea
          required
          rows={4}
          value={form.texto}
          onChange={e => setForm(f => ({ ...f, texto: e.target.value }))}
          placeholder="Conte como foi a experiência com o adestramento..."
          className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all resize-none text-sm"
        />
      </div>

      {status === 'error' && (
        <p className="text-red-500 text-sm">Erro ao enviar. Tente novamente.</p>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors disabled:opacity-60 cursor-pointer"
      >
        {status === 'loading' ? 'Enviando...' : 'Enviar Depoimento'}
      </button>
    </form>
  )
}

const Testimonials = ({ stats }) => {
  const [testimonials, setTestimonials] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    supabase
      .from('testimonials')
      .select('*')
      .eq('status', 'approved')
      .order('created_at', { ascending: false })
      .then(({ data }) => {
        setTestimonials(data || [])
        setLoading(false)
      })
  }, [])

  return (
    <section id="depoimentos" className="py-16 sm:py-20 lg:py-24 bg-white dark:bg-gray-900 scroll-mt-20 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-8 sm:mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto px-2">
            Histórias reais de transformações que mudaram a vida de cães e suas famílias
          </p>
        </motion.div>

        {loading ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="bg-gray-100 dark:bg-gray-800 rounded-2xl h-52 animate-pulse" />
            ))}
          </div>
        ) : testimonials.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {testimonials.map((t, i) => (
              <TestimonialCard key={t.id} testimonial={t} index={i} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 dark:text-gray-400 py-12">
            Ainda sem depoimentos aprovados. Seja o primeiro!
          </p>
        )}

        {stats && stats.count > 0 && (
          <motion.div
            className="mt-8 sm:mt-12 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-3 bg-green-50 dark:bg-green-900/20 rounded-lg p-4 sm:p-6">
              <div className="text-3xl sm:text-4xl">⭐</div>
              <div className="text-left">
                <p className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">{stats.average}/5.0</p>
                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
                  Baseado em {stats.count >= 500 ? '+500' : stats.count} {stats.count === 1 ? 'avaliação' : 'avaliações'}
                </p>
              </div>
            </div>
          </motion.div>
        )}

        {/* Form de envio */}
        <motion.div
          className="mt-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 sm:p-8 border border-gray-100 dark:border-gray-700">
            <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Deixe seu Depoimento
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
              Seu relato será publicado após análise. Obrigado pela confiança!
            </p>
            <SubmitForm />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials
