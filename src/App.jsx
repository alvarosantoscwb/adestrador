import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import Header from './components/Header'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import Home from './pages/Home'
import PoliticaPrivacidade from './pages/PoliticaPrivacidade'
import TermosUso from './pages/TermosUso'

const AdminLogin = lazy(() => import('./pages/admin/AdminLogin'))
const AdminLayout = lazy(() => import('./pages/admin/AdminLayout'))
const AdminDashboard = lazy(() => import('./pages/admin/AdminDashboard'))
const AdminTestimonials = lazy(() => import('./pages/admin/AdminTestimonials'))
const AdminGallery = lazy(() => import('./pages/admin/AdminGallery'))

const AdminFallback = () => (
  <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
    <div className="text-4xl animate-bounce">🐕‍🦺</div>
  </div>
)

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          {/* Site principal */}
          <Route path="/" element={
            <>
              <Header />
              <main>
                <Home />
              </main>
              <Footer />
              <WhatsAppButton />
            </>
          } />
          <Route path="/politica-privacidade" element={
            <>
              <Header />
              <main><PoliticaPrivacidade /></main>
              <Footer />
            </>
          } />
          <Route path="/termos-de-uso" element={
            <>
              <Header />
              <main><TermosUso /></main>
              <Footer />
            </>
          } />

          {/* Admin — carregado só quando acessado */}
          <Route path="/admin/login" element={<Suspense fallback={<AdminFallback />}><AdminLogin /></Suspense>} />
          <Route path="/admin" element={<Suspense fallback={<AdminFallback />}><AdminLayout /></Suspense>}>
            <Route index element={<Suspense fallback={<AdminFallback />}><AdminDashboard /></Suspense>} />
            <Route path="depoimentos" element={<Suspense fallback={<AdminFallback />}><AdminTestimonials /></Suspense>} />
            <Route path="galeria" element={<Suspense fallback={<AdminFallback />}><AdminGallery /></Suspense>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
