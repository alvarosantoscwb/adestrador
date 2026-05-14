import { useEffect, useState, useRef } from 'react'
import { supabase } from '../../lib/supabase'

const AdminGallery = () => {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [tab, setTab] = useState('foto') // foto | video_youtube | video_upload
  const [form, setForm] = useState({ titulo: '', url: '' })
  const [uploading, setUploading] = useState(false)
  const [error, setError] = useState('')
  const fileRef = useRef()

  const fetchData = () => {
    supabase
      .from('gallery')
      .select('*')
      .order('ordem', { ascending: true })
      .then(({ data }) => {
        setItems(data || [])
        setLoading(false)
      })
  }

  useEffect(() => { fetchData() }, [])

  const handleUploadFoto = async (e) => {
    const file = e.target.files[0]
    if (!file) return
    setUploading(true)
    setError('')
    const ext = file.name.split('.').pop()
    const path = `${Date.now()}.${ext}`
    const { error: upErr } = await supabase.storage.from('gallery').upload(path, file)
    if (upErr) { setError('Erro no upload: ' + upErr.message); setUploading(false); return }
    const { data: { publicUrl } } = supabase.storage.from('gallery').getPublicUrl(path)
    const { error: dbErr } = await supabase.from('gallery').insert([{
      url: publicUrl,
      tipo: 'foto',
      titulo: form.titulo || '',
      ordem: items.length,
    }])
    if (dbErr) setError('Erro ao salvar: ' + dbErr.message)
    else { setForm({ titulo: '', url: '' }); fetchData() }
    setUploading(false)
  }

  const handleAddVideo = async (e) => {
    e.preventDefault()
    setError('')
    const tipo = tab === 'video_youtube' ? 'video_youtube' : 'video_upload'
    const { error: dbErr } = await supabase.from('gallery').insert([{
      url: form.url,
      tipo,
      titulo: form.titulo || '',
      ordem: items.length,
    }])
    if (dbErr) setError('Erro ao salvar: ' + dbErr.message)
    else { setForm({ titulo: '', url: '' }); fetchData() }
  }

  const handleUploadVideo = async (e) => {
    const file = e.target.files[0]
    if (!file) return
    setUploading(true)
    setError('')
    const ext = file.name.split('.').pop()
    const path = `videos/${Date.now()}.${ext}`
    const { error: upErr } = await supabase.storage.from('gallery').upload(path, file, { contentType: file.type })
    if (upErr) { setError('Erro no upload: ' + upErr.message); setUploading(false); return }
    const { data: { publicUrl } } = supabase.storage.from('gallery').getPublicUrl(path)
    const { error: dbErr } = await supabase.from('gallery').insert([{
      url: publicUrl,
      tipo: 'video_upload',
      titulo: form.titulo || '',
      ordem: items.length,
    }])
    if (dbErr) setError('Erro ao salvar: ' + dbErr.message)
    else { setForm({ titulo: '', url: '' }); fetchData() }
    setUploading(false)
  }

  const deleteItem = async (item) => {
    if (!confirm('Deletar este item da galeria?')) return
    if (item.tipo === 'foto' || item.tipo === 'video_upload') {
      const path = item.url.split('/gallery/')[1]
      if (path) await supabase.storage.from('gallery').remove([path])
    }
    await supabase.from('gallery').delete().eq('id', item.id)
    setItems(prev => prev.filter(i => i.id !== item.id))
  }

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Galeria</h1>

      {/* Adicionar novo item */}
      <div className="bg-white dark:bg-gray-800 rounded-xl p-5 border border-gray-100 dark:border-gray-700 shadow-sm mb-8">
        <h2 className="font-semibold text-gray-900 dark:text-white mb-4">Adicionar novo</h2>

        <div className="flex flex-wrap gap-2 mb-5">
          {[
            { key: 'foto', label: '📷 Foto' },
            { key: 'video_youtube', label: '▶️ YouTube' },
            { key: 'video_upload', label: '🎬 Vídeo' },
          ].map(t => (
            <button
              key={t.key}
              onClick={() => { setTab(t.key); setError('') }}
              className={`flex-1 sm:flex-none px-3 py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors cursor-pointer ${
                tab === t.key
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        <div className="space-y-3 max-w-md">
          <input
            type="text"
            placeholder="Título (opcional)"
            value={form.titulo}
            onChange={e => setForm(f => ({ ...f, titulo: e.target.value }))}
            className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 text-sm focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all"
          />

          {tab === 'foto' && (
            <div>
              <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={handleUploadFoto} />
              <button
                onClick={() => fileRef.current.click()}
                disabled={uploading}
                className="w-full py-2.5 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg text-sm text-gray-500 dark:text-gray-400 hover:border-green-500 hover:text-green-600 transition-colors cursor-pointer disabled:opacity-60"
              >
                {uploading ? 'Enviando...' : '+ Selecionar foto'}
              </button>
            </div>
          )}

          {tab === 'video_youtube' && (
            <form onSubmit={handleAddVideo} className="space-y-3">
              <input
                type="url"
                required
                placeholder="https://youtube.com/watch?v=..."
                value={form.url}
                onChange={e => setForm(f => ({ ...f, url: e.target.value }))}
                className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 text-sm focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all"
              />
              <button
                type="submit"
                className="px-5 py-2.5 bg-green-600 text-white text-sm rounded-lg hover:bg-green-700 transition-colors cursor-pointer"
              >
                Adicionar vídeo
              </button>
            </form>
          )}

          {tab === 'video_upload' && (
            <div>
              <input ref={fileRef} type="file" accept="video/*" className="hidden" onChange={handleUploadVideo} />
              <button
                onClick={() => fileRef.current.click()}
                disabled={uploading}
                className="w-full py-2.5 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg text-sm text-gray-500 dark:text-gray-400 hover:border-green-500 hover:text-green-600 transition-colors cursor-pointer disabled:opacity-60"
              >
                {uploading ? 'Enviando...' : '+ Selecionar vídeo'}
              </button>
              <p className="text-xs text-gray-400 mt-1">Dica: prefira YouTube para vídeos grandes — melhor qualidade e sem limite de storage.</p>
            </div>
          )}

          {error && <p className="text-red-500 text-sm">{error}</p>}
        </div>
      </div>

      {/* Lista de itens */}
      <h2 className="font-semibold text-gray-900 dark:text-white mb-4">Itens na galeria ({items.length})</h2>

      {loading ? (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="aspect-square bg-gray-200 dark:bg-gray-700 rounded-xl animate-pulse" />
          ))}
        </div>
      ) : items.length === 0 ? (
        <div className="text-center py-16 text-gray-400 dark:text-gray-500">
          <p className="text-4xl mb-3">🖼️</p>
          <p>Galeria vazia. Adicione fotos ou vídeos acima.</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {items.map(item => (
            <div key={item.id} className="relative group rounded-xl overflow-hidden border border-gray-100 dark:border-gray-700">
              {item.tipo === 'foto' ? (
                <img src={item.url} alt={item.titulo || ''} className="w-full aspect-square object-cover" />
              ) : item.tipo === 'video_youtube' ? (
                <div className="w-full aspect-square bg-gray-900 flex flex-col items-center justify-center gap-2">
                  <span className="text-3xl">▶️</span>
                  <span className="text-white text-xs text-center px-2 line-clamp-2">{item.titulo || 'YouTube'}</span>
                </div>
              ) : (
                <div className="w-full aspect-square bg-gray-900 flex flex-col items-center justify-center gap-2">
                  <span className="text-3xl">🎬</span>
                  <span className="text-white text-xs text-center px-2 line-clamp-2">{item.titulo || 'Vídeo'}</span>
                </div>
              )}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all flex items-center justify-center">
                <button
                  onClick={() => deleteItem(item)}
                  className="opacity-0 group-hover:opacity-100 bg-red-500 text-white text-xs px-3 py-1.5 rounded-lg cursor-pointer transition-opacity"
                >
                  🗑 Deletar
                </button>
              </div>
              {item.titulo && (
                <p className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-xs px-2 py-1 truncate">
                  {item.titulo}
                </p>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default AdminGallery
