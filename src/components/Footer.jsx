import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookOpen } from '@fortawesome/free-solid-svg-icons'
import {
  faFacebookF,
  faInstagram,
  faYoutube,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'
import useSmoothScroll from '../hooks/useSmoothScroll'

const footerLinks = [
  {
    title: 'Navigasi',
    links: [
      { to: 'beranda', label: 'Beranda' },
      { to: 'tentang', label: 'Tentang' },
      { to: 'program', label: 'Program' },
      { to: 'galeri', label: 'Galeri' },
      { to: 'kontak', label: 'Kontak' },
    ],
  },
  {
    title: 'Program',
    links: [
      { to: 'program', label: 'Komputer Dasar' },
      { to: 'program', label: 'Internet Sehat' },
      { to: 'program', label: 'Media Sosial Bijak' },
      { to: 'program', label: 'Coding Pemula' },
    ],
  },
]

export default function Footer() {
  const scrollTo = useSmoothScroll(64)

  return (
    <footer className="bg-primary text-surface/80">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Kolom 1: Navigasi */}
          <div>
            <h4 className="font-semibold text-surface text-sm mb-4">
              Navigasi
            </h4>
            <ul className="space-y-2">
              {footerLinks[0].links.map((link) => (
                <li key={link.to}>
                  <button
                    onClick={() => scrollTo(link.to)}
                    className="text-surface/50 hover:text-accent transition-colors cursor-pointer text-sm bg-transparent border-none px-0 py-1.5 min-h-[44px] flex items-center"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Kolom 2: Program */}
          <div>
            <h4 className="font-semibold text-surface text-sm mb-4">
              Program
            </h4>
            <ul className="space-y-2">
              {footerLinks[1].links.map((link, i) => (
                <li key={i}>
                  <button
                    onClick={() => scrollTo(link.to)}
                    className="text-surface/50 hover:text-accent transition-colors cursor-pointer text-sm bg-transparent border-none px-0 py-1.5 min-h-[44px] flex items-center"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Kolom 3: Media Sosial */}
          <div>
            <h4 className="font-semibold text-surface text-sm mb-4">
              Ikuti Kami
            </h4>
            <div className="flex items-center gap-4 mb-4">
              <a
                href="#"
                className="w-11 h-11 bg-surface/10 rounded-md flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="Facebook"
              >
                <FontAwesomeIcon icon={faFacebookF} className="text-sm" />
              </a>
              <a
                href="#"
                className="w-11 h-11 bg-surface/10 rounded-md flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="Instagram"
              >
                <FontAwesomeIcon icon={faInstagram} className="text-sm" />
              </a>
              <a
                href="#"
                className="w-11 h-11 bg-surface/10 rounded-md flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="YouTube"
              >
                <FontAwesomeIcon icon={faYoutube} className="text-sm" />
              </a>
              <a
                href="#"
                className="w-11 h-11 bg-surface/10 rounded-md flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="Twitter"
              >
                <FontAwesomeIcon icon={faTwitter} className="text-sm" />
              </a>
            </div>
            <p className="text-surface/50 text-xs leading-relaxed">
              Dapatkan informasi terbaru seputar program dan kegiatan Pojok
              Literasi Digital melalui media sosial kami.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-surface/10 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <FontAwesomeIcon
              icon={faBookOpen}
              className="text-accent text-sm"
            />
            <span className="text-surface/50 text-sm">
              Pojok Literasi Digital
            </span>
          </div>
          <p className="text-surface/30 text-xs">
            &copy; {new Date().getFullYear()} Pojok Literasi Digital. Hak Cipta
            Dilindungi.
          </p>
        </div>
      </div>
    </footer>
  )
}