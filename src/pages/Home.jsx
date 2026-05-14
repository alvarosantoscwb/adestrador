import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { supabase } from '../lib/supabase'
import SEO from '../components/SEO'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Gallery from '../components/Gallery'
import About from '../components/About'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'

const Home = () => {
  const location = useLocation()
  const [stats, setStats] = useState({ count: 500, average: '5.0' })

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash)
      if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 150)
    }
  }, [location.hash])

  useEffect(() => {
    supabase
      .from('testimonials')
      .select('rating')
      .eq('status', 'approved')
      .then(({ data }) => {
        if (data && data.length > 0) {
          const count = data.length
          const average = (data.reduce((acc, t) => acc + (t.rating || 5), 0) / count).toFixed(1)
          setStats({ count, average })
        }
      })
  }, [])

  return (
    <>
      <SEO
        title="Adestrador Profissional de Cães | Curitiba e Região Metropolitana"
        description="Adestramento profissional de cães com técnicas modernas e positivas. Comportamento, obediência e educação para seu melhor amigo. Atendemos em Curitiba, Colombo e região. Agende sua consulta!"
      />
      <Hero stats={stats} />
      <Services />
      <Gallery />
      <About />
      <Testimonials stats={stats} />
      <Contact />
    </>
  )
}

export default Home
