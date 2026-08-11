import { useEffect } from 'react'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Beranda from './pages/Beranda'
import KontenLiterasi from './pages/KontenLiterasi'
import DetailLiterasi from './pages/DetailLiterasi'
import Penutup from './pages/Penutup'

// React Router v7 menghilangkan trailing slash pada URL root (".../pojok-literasi-digital"),
// sehingga path gambar relatif (./images/...) gagal dimuat. Normalisasi ini mengarahkan
// kembali ke versi ber-slash agar aset relatif terselesaikan dengan benar.
function RootSlashRedirect() {
  const location = useLocation()
  useEffect(() => {
    const { pathname, search, hash } = window.location
    if (pathname === '/pojok-literasi-digital') {
      window.location.replace('/pojok-literasi-digital/' + search + hash)
    }
  }, [location.pathname])
  return null
}

export default function App() {
  return (
    <BrowserRouter basename="/pojok-literasi-digital">
      <div className="font-sans">
        <RootSlashRedirect />
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
