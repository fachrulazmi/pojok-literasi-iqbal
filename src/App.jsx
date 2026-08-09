import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Beranda from './pages/Beranda'
import KontenLiterasi from './pages/KontenLiterasi'
import DetailLiterasi from './pages/DetailLiterasi'
import Penutup from './pages/Penutup'

export default function App() {
  return (
    <BrowserRouter basename="/pojok-literasi-digital">
      <div className="font-sans">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Beranda />} />
            <Route path="/konten-literasi" element={<KontenLiterasi />} />
            <Route path="/konten-literasi/:kategori" element={<DetailLiterasi />} />
            <Route path="/penutup" element={<Penutup />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}