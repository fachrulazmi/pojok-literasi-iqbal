import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes, faBookOpen } from '@fortawesome/free-solid-svg-icons'
import useSmoothScroll from '../hooks/useSmoothScroll'

const navLinks = [
  { to: 'beranda', label: 'Beranda' },
  { to: 'tentang', label: 'Tentang' },
  { to: 'program', label: 'Program' },
  { to: 'galeri', label: 'Galeri' },
  { to: 'testimoni', label: 'Testimoni' },
  { to: 'kontak', label: 'Kontak' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const scrollTo = useSmoothScroll(64)

  const handleNavClick = (id) => {
    scrollTo(id)
    setIsOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-surface shadow-[0_2px_15px_rgba(0,0,0,0.05)]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => scrollTo('beranda')}
            className="flex items-center gap-2 cursor-pointer bg-transparent border-none p-0"
          >
            <FontAwesomeIcon
              icon={faBookOpen}
              className="text-accent text-xl"
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
                onClick={() => scrollTo(link.to)}
                className="text-muted hover:text-accent transition-colors cursor-pointer text-sm font-medium bg-transparent border-none p-0"
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
                className="block w-full text-left py-3.5 text-muted hover:text-accent transition-colors cursor-pointer text-sm font-medium bg-transparent border-none min-h-[44px]"
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