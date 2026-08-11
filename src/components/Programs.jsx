import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLaptopCode,
  faShieldHalved,
  faUsers,
  faMobileScreen,
} from '@fortawesome/free-solid-svg-icons'

const programs = [
  {
    icon: faLaptopCode,
    title: 'Pelatihan Komputer Dasar',
    desc: 'Mengenalkan dasar-dasar penggunaan komputer, sistem operasi, dan perangkat lunak perkantoran untuk pemula.',
    radius: 'rounded-sm',
  },
  {
    icon: faShieldHalved,
    title: 'Internet Sehat & Aman',
    desc: 'Edukasi tentang keamanan digital, perlindungan data pribadi, dan cara menghindari penipuan online.',
    radius: 'rounded-lg',
  },
  {
    icon: faUsers,
    title: 'Media Sosial Bijak',
    desc: 'Pelatihan penggunaan media sosial secara positif, etika bermedia, dan pencegahan cyberbullying.',
    radius: 'rounded-xl',
  },
  {
    icon: faMobileScreen,
    title: 'Coding untuk Pemula',
    desc: 'Pengenalan logika pemrograman dan pembuatan website sederhana menggunakan HTML, CSS, dan JavaScript.',
    radius: 'rounded-md',
  },
]

export default function Programs() {
  return (
    <section id="program" className="py-20 md:py-32 bg-surface">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="mb-12">
          <p className="text-accent text-sm font-semibold tracking-wide mb-3">
            PROGRAM KAMI
          </p>
          <h2 className="text-xl md:text-4xl font-bold text-primary leading-tight">
            Layanan & Pelatihan{' '}
            <span className="text-accent">Literasi Digital</span>
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className={`${program.radius} bg-light p-6 shadow-sm hover:shadow-[0_4px_20px_rgba(0,0,0,0.07)] transition-shadow group`}
            >
              <div className="w-12 h-12 bg-accent/10 rounded-md flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                <FontAwesomeIcon
                  icon={program.icon}
                  className="text-accent text-lg"
                />
              </div>
              <h3 className="font-semibold text-primary text-base mb-3">
                {program.title}
              </h3>
              <p className="text-muted text-sm leading-relaxed">
                {program.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}