import { useEffect, useState } from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import { supabase } from '../../lib/supabase'

const AdminLayout = () => {
  const [checking, setChecking] = useState(true)
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (!data.session) navigate('/admin/login')
      else setChecking(false)
    })
  }, [navigate])

  const handleLogout = async () => {
    await supabase.auth.signOut()
    navigate('/admin/login')
  }

  if (checking) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-4xl animate-bounce">🐕‍🦺</div>
      </div>
    )
  }

  const navLinkClass = ({ isActive }) =>
    `flex items-center gap-2.5 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
      isActive
        ? 'bg-green-600 text-white'
        : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
    }`

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex">
      {/* Sidebar desktop */}
      <aside className="hidden md:flex w-56 flex-col bg-white dark:bg-gray-800 border-r border-gray-100 dark:border-gray-700 p-4">
        <div className="flex items-center gap-2 mb-8 px-2">
          <span className="text-3xl">🐕‍🦺</span>
          <div>
            <p className="font-bold text-gray-900 dark:text-white text-sm leading-tight">AdestradorPro</p>
            <p className="text-xs text-gray-400">Admin</p>
          </div>
        </div>
        <nav className="flex-1 space-y-1">
          <NavLink to="/admin" end className={navLinkClass}>
            <span>📊</span> Dashboard
          </NavLink>
          <NavLink to="/admin/depoimentos" className={navLinkClass}>
            <span>💬</span> Depoimentos
          </NavLink>
          <NavLink to="/admin/galeria" className={navLinkClass}>
            <span>🖼️</span> Galeria
          </NavLink>
        </nav>
        <div className="border-t border-gray-100 dark:border-gray-700 pt-4 space-y-1">
          <a
            href="/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 px-4 py-2.5 rounded-lg text-sm font-medium text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            <span>🌐</span> Ver site
          </a>
          <button
            onClick={handleLogout}
            className="w-full flex items-center gap-2.5 px-4 py-2.5 rounded-lg text-sm font-medium text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors cursor-pointer"
          >
            <span>🚪</span> Sair
          </button>
        </div>
      </aside>

      {/* Mobile header */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-40 bg-white dark:bg-gray-800 border-b border-gray-100 dark:border-gray-700 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl">🐕‍🦺</span>
          <span className="font-bold text-gray-900 dark:text-white text-sm">Admin</span>
        </div>
        <button onClick={() => setMenuOpen(!menuOpen)} className="p-2 cursor-pointer text-gray-600 dark:text-gray-400">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden fixed inset-0 z-30 bg-black/40" onClick={() => setMenuOpen(false)}>
          <div
            className="w-56 h-full bg-white dark:bg-gray-800 p-4 pt-16 space-y-1"
            onClick={e => e.stopPropagation()}
          >
            <NavLink to="/admin" end className={navLinkClass} onClick={() => setMenuOpen(false)}>
              <span>📊</span> Dashboard
            </NavLink>
            <NavLink to="/admin/depoimentos" className={navLinkClass} onClick={() => setMenuOpen(false)}>
              <span>💬</span> Depoimentos
            </NavLink>
            <NavLink to="/admin/galeria" className={navLinkClass} onClick={() => setMenuOpen(false)}>
              <span>🖼️</span> Galeria
            </NavLink>
            <div className="border-t border-gray-100 dark:border-gray-700 pt-3 mt-3 space-y-1">
              <a href="/" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2.5 px-4 py-2.5 rounded-lg text-sm font-medium text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <span>🌐</span> Ver site
              </a>
              <button onClick={handleLogout}
                className="w-full flex items-center gap-2.5 px-4 py-2.5 rounded-lg text-sm font-medium text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 cursor-pointer"
              >
                <span>🚪</span> Sair
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Main content */}
      <main className="flex-1 p-4 sm:p-6 md:p-8 mt-12 md:mt-0 overflow-auto">
        <Outlet />
      </main>
    </div>
  )
}

export default AdminLayout
