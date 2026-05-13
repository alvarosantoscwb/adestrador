import { Helmet } from 'react-helmet-async'
import { useLocation } from 'react-router-dom'

const SEO = ({ 
  title = 'Adestrador Profissional de Cães | Transforme o Seu Pet',
  description = 'Adestramento profissional de cães com técnicas modernas e positivas. Comportamento, obediência e educação para seu melhor amigo. Agende sua consulta!',
  keywords = 'adestrador de cães, adestramento de cachorros, educação canina, comportamento animal, treinamento de cães, adestrador profissional',
  ogImage = 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=1200&h=630&fit=crop',
  type = 'website'
}) => {
  const location = useLocation()
  const canonicalUrl = `https://adestradorpro.com.br${location.pathname}`
  const ogUrl = canonicalUrl

  return (
    <Helmet>
      {/* Meta Tags Básicas */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Adestrador Profissional" />
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:locale" content="pt_BR" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={ogUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Additional SEO */}
      <meta name="theme-color" content="#dc2626" />
      <meta name="msapplication-TileColor" content="#dc2626" />
      
      {/* Structured Data para Negócio Local */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Adestrador Profissional de Cães",
          "description": "Adestramento profissional de cães com técnicas modernas e positivas",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Colombo",
            "addressRegion": "PR",
            "addressCountry": "BR"
          },
          "priceRange": "$$",
          "openingHours": "Mo-Sa 09:00-18:00",
          "telephone": "+5541999999999",
          "image": ogImage
        })}
      </script>

      {/* Structured Data para Serviço */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Adestramento de Cães",
          "description": "Serviço profissional de adestramento e educação canina",
          "provider": {
            "@type": "Person",
            "name": "Adestrador Profissional"
          },
          "areaServed": {
            "@type": "GeoCircle",
            "geoMidpoint": {
              "@type": "GeoCoordinates",
              "latitude": -25.2846,
              "longitude": -49.2738
            },
            "geoRadius": "50000"
          }
        })}
      </script>
    </Helmet>
  )
}

export default SEO
