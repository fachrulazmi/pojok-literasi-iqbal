import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowRight,
  faBullseye,
  faHandshake,
  faLightbulb,
  faHeart,
} from '@fortawesome/free-solid-svg-icons'
import articles from '../data/artikelLiterasi'

// ======================== SECTION 1: NARASI PENGENALAN + DEFINISI ========================
function IntroSection() {
  const navigate = useNavigate()

  return (
    <section
      id="tentang"
      className="min-h-[90vh] md:min-h-screen flex items-start md:items-center bg-surface pt-16"
    >
      <div className="max-w-6xl mx-auto px-4 w-full">
        <div className="flex flex-col md:grid md:grid-cols-2 md:items-center gap-8 md:gap-10">
          {/* Gambar — kanan di desktop, atas di mobile */}
          <div className="order-1 md:order-2 flex justify-center md:justify-end mt-8 md:mt-0">
            <div className="relative w-full max-w-[220px] md:max-w-md aspect-square rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.07)]">
              <img
                src="./images/hero-library.jpg"
                alt="Perpustakaan modern dengan rak buku"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Teks — kiri di desktop, bawah di mobile */}
          <div className="order-2 md:order-1">
            <h1 className="text-3xl md:text-5xl font-bold text-primary leading-tight mb-6">
              Apa itu{' '}
              <span className="text-accent">Pojok Literasi Digital</span>?
            </h1>
            <p className="text-primary/70 text-base md:text-lg leading-relaxed mb-4 max-w-lg">
              Pojok Literasi Digital adalah ruang edukasi dan pemberdayaan
              masyarakat untuk memahami, menyaring, dan menggunakan teknologi
              informasi secara sehat, bijak, dan bertanggung jawab.
            </p>
            <button
              onClick={() => navigate('/konten-literasi')}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-accent text-surface px-6 py-3 rounded-md font-semibold text-sm hover:bg-accent-hover transition-colors cursor-pointer border-none"
            >
              Jelajahi Konten
              <FontAwesomeIcon icon={faArrowRight} className="text-sm" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

// ======================== SECTION 2: TUJUAN & HARAPAN KAMI ========================
const tujuanList = [
  {
    icon: faLightbulb,
    title: 'Meningkatkan Literasi Digital',
    desc: 'Membekali masyarakat agar mampu memahami, menyaring, dan menggunakan teknologi informasi secara sehat serta produktif.',
    radius: 'rounded-sm',
  },
  {
    icon: faHandshake,
    title: 'Menjembatani Kesenjangan Digital',
    desc: 'Mengurangi kesenjangan akses dan keterampilan teknologi antargenerasi serta antardaerah melalui pendidikan yang inklusif.',
    radius: 'rounded-xl',
  },
  {
    icon: faBullseye,
    title: 'Menumbuhkan Kesadaran Kritis',
    desc: 'Melatih masyarakat untuk kritis terhadap informasi, mengenali hoaks, dan menjaga keamanan data pribadi di dunia maya.',
    radius: 'rounded-md',
  },
  {
    icon: faHeart,
    title: 'Harapan Kami',
    desc: 'Mewujudkan masyarakat yang melek digital, saling menguatkan, dan menghidupkan budaya literasi di setiap pojok kehidupan.',
    radius: 'rounded-lg',
  },
]

function TujuanSection() {
  return (
    <section id="tujuan" className="py-28 md:py-32 bg-light">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header asimetris: judul kiri, deskripsi kanan */}
        <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-12 mb-12 md:mb-16">
          <div className="md:pr-8">
            <p className="text-accent text-sm font-semibold tracking-wide mb-3">
              TUJUAN &amp; HARAPAN
            </p>
            <h2 className="text-2xl md:text-4xl font-bold text-primary leading-tight">
              Alasan Kami <span className="text-accent">Hadir</span> untuk
              Masyarakat
            </h2>
          </div>
          <p className="text-muted text-base md:text-lg leading-relaxed md:pt-2">
            Setiap langkah yang kami ambil berakar pada satu semangat besar:
            menumbuhkan budaya literasi digital yang sehat dan berkelanjutan di
            tengah perubahan teknologi yang begitu cepat.
          </p>
        </div>

        {/* Cards tujuan — radius variatif */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {tujuanList.map((item, index) => (
            <div
              key={index}
              className={`${item.radius} bg-surface p-6 shadow-sm hover:shadow-[0_4px_20px_rgba(0,0,0,0.07)] transition-shadow group`}
            >
              <div className="w-12 h-12 bg-accent/10 rounded-md flex items-center justify-center mb-5 group-hover:scale-105 transition-transform">
                <FontAwesomeIcon
                  icon={item.icon}
                  className="text-accent text-lg"
                />
              </div>
              <h3 className="font-semibold text-primary text-base mb-3">
                {item.title}
              </h3>
              <p className="text-muted text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ======================== SECTION 3: SINOPSIS PENDEK & THUMBNAIL ========================
function SinopsisSection() {
  const navigate = useNavigate()

  return (
    <section id="sinopsis" className="py-20 md:py-24 bg-surface">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <p className="text-accent text-sm font-semibold tracking-wide mb-3">
            SINOPSIS KONTEN
          </p>
          <h2 className="text-2xl md:text-4xl font-bold text-primary leading-tight">
            Sekilas <span className="text-accent">Garis Besar</span> Literasi
            Digital
          </h2>
          <p className="text-muted text-base md:text-lg leading-relaxed mt-4">
            Pilih salah satu tema untuk menjelajahi wawasan literasi digital
            lebih dalam melalui sinopsis dan thumbnail di bawah ini.
          </p>
        </div>

        {/* Cards sinopsis — thumbnail + radius variatif */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {articles.map((article) => (
            <article
              key={article.id}
              onClick={() => navigate(`/konten-literasi/${article.id}`)}
              className={`${article.radius} bg-light shadow-sm hover:shadow-[0_4px_20px_rgba(0,0,0,0.07)] transition-shadow overflow-hidden cursor-pointer group`}
            >
              {/* Thumbnail */}
              <div className="aspect-video overflow-hidden">
                <img
                  src={article.photos[0].src}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  loading="lazy"
                />
              </div>

              {/* Konten sinopsis */}
              <div className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 bg-accent/10 rounded-md flex items-center justify-center flex-shrink-0">
                    <FontAwesomeIcon
                      icon={article.icon}
                      className="text-accent text-sm"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-primary">
                    {article.title}
                  </h3>
                </div>
                <p className="text-muted text-sm leading-relaxed mb-4">
                  {article.desc}
                </p>
                <span className="inline-flex items-center gap-2 text-accent text-sm font-semibold">
                  Baca Selengkapnya
                  <FontAwesomeIcon icon={faArrowRight} className="text-xs" />
                </span>
              </div>
            </article>
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
      <IntroSection />
      <TujuanSection />
      <SinopsisSection />
    </>
  )
}