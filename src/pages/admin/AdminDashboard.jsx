import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { supabase } from '../../lib/supabase'

const StatCard = ({ icon, label, value, color }) => (
  <div className={`bg-white dark:bg-gray-800 rounded-xl p-5 border border-gray-100 dark:border-gray-700 shadow-sm`}>
    <div className="flex items-center justify-between mb-3">
      <span className="text-2xl">{icon}</span>
      <span className={`text-xs font-semibold px-2 py-1 rounded-full ${color}`}>{label}</span>
    </div>
    <p className="text-3xl font-bold text-gray-900 dark:text-white">{value ?? '—'}</p>
  </div>
)

const AdminDashboard = () => {
  const [stats, setStats] = useState({})

  useEffect(() => {
    Promise.all([
      supabase.from('testimonials').select('status'),
      supabase.from('gallery').select('id', { count: 'exact', head: true }),
    ]).then(([{ data: t }, { count: g }]) => {
      const pending = t?.filter(x => x.status === 'pending').length ?? 0
      const approved = t?.filter(x => x.status === 'approved').length ?? 0
      setStats({ pending, approved, gallery: g ?? 0 })
    })
  }, [])

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Dashboard</h1>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        <StatCard icon="⏳" label="Pendentes" value={stats.pending} color="bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400" />
        <StatCard icon="✅" label="Aprovados" value={stats.approved} color="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" />
        <StatCard icon="🖼️" label="Galeria" value={stats.gallery} color="bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400" />
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <Link
          to="/admin/depoimentos"
          className="flex items-center gap-4 p-5 bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow group"
        >
          <span className="text-3xl group-hover:scale-110 transition-transform">💬</span>
          <div>
            <p className="font-semibold text-gray-900 dark:text-white">Gerenciar Depoimentos</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Aprovar ou rejeitar depoimentos pendentes</p>
          </div>
        </Link>
        <Link
          to="/admin/galeria"
          className="flex items-center gap-4 p-5 bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-shadow group"
        >
          <span className="text-3xl group-hover:scale-110 transition-transform">🖼️</span>
          <div>
            <p className="font-semibold text-gray-900 dark:text-white">Gerenciar Galeria</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Adicionar fotos e vídeos</p>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default AdminDashboard
