import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowRight,
  faBullseye,
  faLaptopCode,
  faShieldHalved,
  faUsers,
  faMobileScreen,
} from '@fortawesome/free-solid-svg-icons'

// ======================== HERO ========================
function HeroSection() {
  const navigate = useNavigate()

  return (
    <section className="min-h-[90vh] md:min-h-screen flex items-center bg-surface pt-16">
      <div className="max-w-6xl mx-auto px-4 w-full">
        <div className="flex flex-col md:grid md:grid-cols-2 md:items-center gap-8 md:gap-10">
          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <div className="relative w-full max-w-[220px] md:max-w-md aspect-square rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.07)]">
              <img
                src="./images/hero-library.jpg"
                alt="Perpustakaan modern dengan rak buku"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="order-2 md:order-1">
            <p className="text-accent text-sm font-semibold tracking-wide mb-3">
              POJOK LITERASI DIGITAL
            </p>
            <h1 className="text-3xl md:text-5xl font-bold text-primary leading-tight mb-6">
              Membangun Masyarakat{' '}
              <span className="text-accent">Melek Digital</span> di Era
              Informasi
            </h1>
            <p className="text-primary/70 text-base md:text-lg leading-relaxed mb-8 max-w-lg">
              Pojok Literasi Digital hadir untuk meningkatkan pemahaman
              masyarakat tentang teknologi, internet sehat, dan keterampilan
              digital yang relevan dengan kebutuhan zaman.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => navigate('/konten-literasi')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-accent text-surface px-6 py-3 rounded-md font-semibold text-sm hover:bg-accent-hover transition-colors cursor-pointer border-none"
              >
                Lihat Konten
                <FontAwesomeIcon icon={faArrowRight} className="text-sm" />
              </button>
              <button
                onClick={() => navigate('/penutup')}
                className="w-full sm:w-auto inline-flex items-center justify-center border border-primary/20 text-primary/70 px-6 py-3 rounded-md font-semibold text-sm hover:bg-light transition-colors cursor-pointer bg-transparent"
              >
                Hubungi Kami
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ======================== ABOUT ========================
function AboutSection() {
  return (
    <section className="py-16 md:py-24 bg-light">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:grid md:grid-cols-2 md:items-center gap-10">
          <div className="order-1 flex justify-center">
            <div className="w-full max-w-sm aspect-[4/3] rounded-xl overflow-hidden shadow-sm">
              <img
                src="./images/about-class.jpg"
                alt="Ruang kelas pelatihan komputer"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          <div className="order-2">
            <div className="flex items-center gap-3 mb-4">
              <FontAwesomeIcon
                icon={faBullseye}
                className="text-accent text-xl"
              />
              <p className="text-accent text-sm font-semibold tracking-wide">
                TENTANG KAMI
              </p>
            </div>
            <h2 className="text-2xl md:text-4xl font-bold text-primary leading-tight mb-6">
              Misi Kami dalam{' '}
              <span className="text-accent">Literasi Digital</span>
            </h2>
            <p className="text-primary/70 text-base leading-relaxed mb-4">
              Pojok Literasi Digital adalah ruang belajar dan berbagi pengetahuan
              seputar teknologi informasi dan komunikasi. Kami percaya bahwa
              setiap orang berhak mendapatkan akses terhadap pengetahuan digital
              yang berkualitas.
            </p>
            <p className="text-primary/70 text-base leading-relaxed mb-6">
              Dengan pendekatan yang inklusif dan partisipatif, kami berupaya
              menjembatani kesenjangan digital di masyarakat melalui berbagai
              program pelatihan, workshop, dan pendampingan.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="text-3xl font-bold text-accent">500+</p>
                <p className="text-muted text-sm mt-1">Peserta Terlatih</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-accent">20+</p>
                <p className="text-muted text-sm mt-1">Program Pelatihan</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-accent">15+</p>
                <p className="text-muted text-sm mt-1">Mitra Komunitas</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-accent">3</p>
                <p className="text-muted text-sm mt-1">Tahun Berkarya</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ======================== PROGRAMS ========================
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

function ProgramsSection() {
  return (
    <section className="py-20 md:py-32 bg-surface">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-12">
          <p className="text-accent text-sm font-semibold tracking-wide mb-3">
            PROGRAM KAMI
          </p>
          <h2 className="text-2xl md:text-4xl font-bold text-primary leading-tight">
            Layanan & Pelatihan{' '}
            <span className="text-accent">Literasi Digital</span>
          </h2>
        </div>

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

// ======================== GALLERY ========================
const galleryItems = [
  {
    title: 'Workshop Komputer',
    desc: 'Pelatihan dasar komputer untuk ibu-ibu PKK',
    radius: 'rounded-sm',
    img: './images/gallery-1.jpg',
  },
  {
    title: 'Kelas Internet Sehat',
    desc: 'Edukasi keamanan digital untuk remaja',
    radius: 'rounded-xl',
    img: './images/gallery-2.jpg',
  },
  {
    title: 'Pelatihan Coding',
    desc: 'Belajar HTML & CSS untuk pemula',
    radius: 'rounded-md',
    img: './images/gallery-3.jpg',
  },
  {
    title: 'Diskusi Literasi',
    desc: 'Forum diskusi literasi digital masyarakat',
    radius: 'rounded-2xl',
    img: './images/gallery-4.jpg',
  },
  {
    title: 'Sosialisasi Medsos',
    desc: 'Bijak bermedia sosial di era digital',
    radius: 'rounded-lg',
    img: './images/gallery-5.jpg',
  },
  {
    title: 'Pendampingan UMKM',
    desc: 'Digitalisasi usaha kecil menengah',
    radius: 'rounded-sm',
    img: './images/gallery-6.jpg',
  },
]

function GallerySection() {
  return (
    <section className="py-14 md:py-20 bg-light">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-10">
          <p className="text-accent text-sm font-semibold tracking-wide mb-3">
            GALERI KEGIATAN
          </p>
          <h2 className="text-2xl md:text-4xl font-bold text-primary leading-tight">
            Dokumentasi <span className="text-accent">Aktivitas</span> Kami
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={index}
              className={`${item.radius} overflow-hidden bg-surface shadow-sm hover:shadow-[0_4px_20px_rgba(0,0,0,0.07)] transition-shadow group cursor-pointer`}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-primary text-sm md:text-base mb-1">
                  {item.title}
                </h3>
                <p className="text-muted text-xs md:text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ======================== BERANDA PAGE ========================
export default function Beranda() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProgramsSection />
      <GallerySection />
    </>
  )
}