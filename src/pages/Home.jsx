import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import SEO from '../components/SEO'
import Hero from '../components/Hero'
import Services from '../components/Services'
import Gallery from '../components/Gallery'
import About from '../components/About'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'

const Home = () => {
  const location = useLocation()

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash)
      if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 150)
    }
  }, [location.hash])

  return (
    <>
      <SEO
        title="Adestrador Profissional de Cães | Curitiba e Região Metropolitana"
        description="Adestramento profissional de cães com técnicas modernas e positivas. Comportamento, obediência e educação para seu melhor amigo. Atendemos em Curitiba, Colombo e região. Agende sua consulta!"
      />
      <Hero />
      <Services />
      <Gallery />
      <About />
      <Testimonials />
      <Contact />
    </>
  )
}

export default Home
