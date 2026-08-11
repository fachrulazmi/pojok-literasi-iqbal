import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

const navLinks = [
  { to: '/', label: 'Beranda' },
  { to: '/konten-literasi', label: 'Konten Literasi' },
  { to: '/penutup', label: 'Penutup' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const handleNavClick = (path) => {
    navigate(path)
    setIsOpen(false)
  }

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/'
    return location.pathname.startsWith(path)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-surface shadow-[0_2px_15px_rgba(0,0,0,0.05)]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('/')}
            className="flex items-center gap-2 cursor-pointer bg-transparent border-none p-0"
          >
            <img
              src="./images/logo-kkn-400px.PNG"
              alt="Logo KKN Bulusari"
              className="h-8 w-auto"
            />
            <span className="font-bold text-lg text-primary">
              Pojok Literasi Digital
            </span>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.to}
                onClick={() => handleNavClick(link.to)}
                className={`transition-colors cursor-pointer text-sm font-medium bg-transparent border-none p-0 ${
                  isActive(link.to)
                    ? 'text-accent'
                    : 'text-muted hover:text-accent'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-primary p-3 bg-transparent border-none cursor-pointer min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label="Toggle menu"
          >
            <FontAwesomeIcon
              icon={isOpen ? faTimes : faBars}
              className="text-xl"
            />
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-primary/10">
            {navLinks.map((link) => (
              <button
                key={link.to}
                onClick={() => handleNavClick(link.to)}
                className={`block w-full text-left py-3.5 transition-colors cursor-pointer text-sm font-medium bg-transparent border-none min-h-[44px] ${
                  isActive(link.to)
                    ? 'text-accent'
                    : 'text-muted hover:text-accent'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}