import { useEffect, useState } from 'react'
import { supabase } from '../../lib/supabase'

const STATUS_LABEL = {
  pending: { label: 'Pendente', class: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400' },
  approved: { label: 'Aprovado', class: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' },
  rejected: { label: 'Rejeitado', class: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400' },
}

const AdminTestimonials = () => {
  const [testimonials, setTestimonials] = useState([])
  const [filter, setFilter] = useState('pending')
  const [loading, setLoading] = useState(true)

  const fetchData = () => {
    setLoading(true)
    supabase
      .from('testimonials')
      .select('*')
      .eq('status', filter)
      .order('created_at', { ascending: false })
      .then(({ data }) => {
        setTestimonials(data || [])
        setLoading(false)
      })
  }

  useEffect(() => { fetchData() }, [filter])

  const updateStatus = async (id, status) => {
    await supabase.from('testimonials').update({ status }).eq('id', id)
    setTestimonials(prev => prev.filter(t => t.id !== id))
  }

  const deleteItem = async (id) => {
    if (!confirm('Deletar este depoimento?')) return
    await supabase.from('testimonials').delete().eq('id', id)
    setTestimonials(prev => prev.filter(t => t.id !== id))
  }

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Depoimentos</h1>

      {/* Filtros */}
      <div className="flex gap-2 mb-6">
        {['pending', 'approved', 'rejected'].map(s => (
          <button
            key={s}
            onClick={() => setFilter(s)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
              filter === s
                ? 'bg-green-600 text-white'
                : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700 hover:border-green-500'
            }`}
          >
            {STATUS_LABEL[s].label}
          </button>
        ))}
      </div>

      {loading ? (
        <div className="space-y-4">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="h-32 bg-gray-200 dark:bg-gray-700 rounded-xl animate-pulse" />
          ))}
        </div>
      ) : testimonials.length === 0 ? (
        <div className="text-center py-16 text-gray-400 dark:text-gray-500">
          <p className="text-4xl mb-3">🐕</p>
          <p>Nenhum depoimento {STATUS_LABEL[filter].label.toLowerCase()}.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {testimonials.map(t => (
            <div
              key={t.id}
              className="bg-white dark:bg-gray-800 rounded-xl p-5 border border-gray-100 dark:border-gray-700 shadow-sm"
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <div>
                  <p className="font-semibold text-gray-900 dark:text-white">{t.nome}</p>
                  {t.cidade && <p className="text-sm text-gray-500 dark:text-gray-400">{t.cidade}</p>}
                </div>
                <div className="flex items-center gap-2 flex-shrink-0">
                  <span className={`text-xs font-semibold px-2 py-1 rounded-full ${STATUS_LABEL[t.status].class}`}>
                    {STATUS_LABEL[t.status].label}
                  </span>
                  <div className="flex text-yellow-400">
                    {'★'.repeat(t.rating)}{'☆'.repeat(5 - t.rating)}
                  </div>
                </div>
              </div>

              <p className="text-sm text-gray-700 dark:text-gray-300 mb-4 italic">"{t.texto}"</p>

              <div className="flex gap-2 flex-wrap">
                {t.status !== 'approved' && (
                  <button
                    onClick={() => updateStatus(t.id, 'approved')}
                    className="px-3 py-1.5 bg-green-600 text-white text-sm rounded-lg hover:bg-green-700 transition-colors cursor-pointer"
                  >
                    ✓ Aprovar
                  </button>
                )}
                {t.status !== 'rejected' && (
                  <button
                    onClick={() => updateStatus(t.id, 'rejected')}
                    className="px-3 py-1.5 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors cursor-pointer"
                  >
                    ✗ Rejeitar
                  </button>
                )}
                {t.status === 'approved' && (
                  <button
                    onClick={() => updateStatus(t.id, 'pending')}
                    className="px-3 py-1.5 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400 text-sm rounded-lg hover:bg-yellow-200 transition-colors cursor-pointer"
                  >
                    ↩ Voltar para pendente
                  </button>
                )}
                <button
                  onClick={() => deleteItem(t.id)}
                  className="px-3 py-1.5 bg-red-50 dark:bg-red-900/20 text-red-500 text-sm rounded-lg hover:bg-red-100 dark:hover:bg-red-900/40 transition-colors cursor-pointer ml-auto"
                >
                  🗑 Deletar
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default AdminTestimonials
