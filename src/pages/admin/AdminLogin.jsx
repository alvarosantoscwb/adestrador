import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { supabase } from '../../lib/supabase'

const AdminLogin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) {
      setError('Email ou senha incorretos.')
      setLoading(false)
    } else {
      navigate('/admin')
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center p-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <span className="text-5xl">🐕‍🦺</span>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mt-3">AdestradorPro</h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm mt-1">Painel Administrativo</p>
        </div>

        <form
          onSubmit={handleLogin}
          className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl border border-gray-100 dark:border-gray-700 space-y-4"
        >
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="admin@email.com"
              className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all text-sm"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Senha</label>
            <input
              type="password"
              required
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all text-sm"
            />
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-600 text-white py-2.5 rounded-lg font-semibold hover:bg-green-700 transition-colors disabled:opacity-60 cursor-pointer"
          >
            {loading ? 'Entrando...' : 'Entrar'}
          </button>

          <Link
            to="/"
            className="block text-center text-sm text-gray-500 hover:text-green-600 transition-colors pt-2"
          >
            ← Voltar para o site
          </Link>
        </form>
      </div>
    </div>
  )
}

export default AdminLogin
