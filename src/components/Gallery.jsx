import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { supabase } from '../lib/supabase'

const getYoutubeId = (url) => {
  const match = url.match(/(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/)
  return match ? match[1] : null
}

const GalleryItem = ({ item, onClick }) => {
  if (item.tipo === 'foto') {
    return (
      <motion.div
        className="relative aspect-square overflow-hidden rounded-xl cursor-pointer group"
        whileHover={{ scale: 1.02 }}
        onClick={() => onClick(item)}
      >
        <img
          src={item.url}
          alt={item.titulo || 'Galeria'}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
        {item.titulo && (
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all flex items-end">
            <p className="text-white text-sm font-medium p-3 translate-y-full group-hover:translate-y-0 transition-transform">
              {item.titulo}
            </p>
          </div>
        )}
      </motion.div>
    )
  }

  if (item.tipo === 'video_youtube') {
    const videoId = getYoutubeId(item.url)
    return (
      <motion.div
        className="relative aspect-video overflow-hidden rounded-xl col-span-2"
        whileHover={{ scale: 1.01 }}
      >
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title={item.titulo || 'Vídeo'}
          className="w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </motion.div>
    )
  }

  if (item.tipo === 'video_upload') {
    return (
      <motion.div
        className="relative aspect-video overflow-hidden rounded-xl col-span-2"
        whileHover={{ scale: 1.01 }}
      >
        <video
          src={item.url}
          controls
          className="w-full h-full object-cover"
          title={item.titulo || 'Vídeo'}
        />
      </motion.div>
    )
  }

  return null
}

const Lightbox = ({ item, onClose }) => (
  <motion.div
    className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    onClick={onClose}
  >
    <button className="absolute top-4 right-4 text-white text-3xl hover:text-gray-300 cursor-pointer">✕</button>
    <img
      src={item.url}
      alt={item.titulo || ''}
      className="max-w-full max-h-[90vh] object-contain rounded-xl"
      onClick={e => e.stopPropagation()}
    />
  </motion.div>
)

const Gallery = () => {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [lightbox, setLightbox] = useState(null)

  useEffect(() => {
    supabase
      .from('gallery')
      .select('*')
      .order('ordem', { ascending: true })
      .then(({ data }) => {
        setItems(data || [])
        setLoading(false)
      })
  }, [])

  if (!loading && items.length === 0) return null

  return (
    <section id="galeria" className="py-16 sm:py-20 lg:py-24 bg-gray-50 dark:bg-gray-800 scroll-mt-20 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Galeria
          </h2>
          <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Fotos e vídeos do nosso trabalho com cães e famílias
          </p>
        </motion.div>

        {loading ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="aspect-square bg-gray-200 dark:bg-gray-700 rounded-xl animate-pulse" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {items.map(item => (
              <GalleryItem key={item.id} item={item} onClick={setLightbox} />
            ))}
          </div>
        )}
      </div>

      <AnimatePresence>
        {lightbox && <Lightbox item={lightbox} onClose={() => setLightbox(null)} />}
      </AnimatePresence>
    </section>
  )
}

export default Gallery
