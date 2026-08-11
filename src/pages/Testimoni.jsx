import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faQuoteLeft,
  faStar,
  faArrowRight,
  faUsers,
  faFaceSmile,
  faBookOpen,
} from '@fortawesome/free-solid-svg-icons'

// ======================== DATA TESTIMONI ========================
const testimonials = [
  {
    name: 'Sri Wahyuni',
    role: 'Guru SDN Bulusari',
    quote:
      'Pelatihan komputer dasar yang digelar Pojok Literasi Digital sangat membantu saya mengelola administrasi sekolah. Sekarang terbiasa membuat dokumen dan laporan dengan lebih cepat.',
    radius: 'rounded-sm',
    avatarTone: 'bg-accent',
  },
  {
    name: 'Budi Santoso',
    role: 'Petani & Pembuat Konten',
    quote:
      'Awalnya ragu memanfaatkan media sosial untuk usaha. Setelah ikut materi "Media Sosial Bijak", saya jadi bisa mempromosikan hasil panen tanpa takut salah langkah.',
    radius: 'rounded-lg',
    avatarTone: 'bg-accent-secondary',
  },
  {
    name: 'Laila Rahmawati',
    role: 'Mahasiswa',
    quote:
      'Materi tentang keamanan digital membuka mata. Saya jadi lebih kritis memilah informasi dan waspada terhadap hoaks serta penipuan online yang sering beredar.',
    radius: 'rounded-xl',
    avatarTone: 'bg-muted',
  },
  {
    name: 'Pak Karto',
    role: 'Karang Taruna',
    quote:
      'Anak-anak di kampung kami jadi lebih semangat belajar. Web sederhana yang mereka buat dari pelatihan coding sungguh sesuatu yang dulu tak pernah kami bayangkan.',
    radius: 'rounded-md',
    avatarTone: 'bg-accent-hover',
  },
  {
    name: 'Nur Aisyah',
    role: 'Ibu Rumah Tangga',
    quote:
      'Kegiatan ini membekali saya berbelanja dan bertransaksi daring dengan lebih aman. Sangat bermanfaat untuk menjaga keamanan data pribadi keluarga saya.',
    radius: 'rounded-lg',
    avatarTone: 'bg-muted',
  },
  {
    name: 'Rendi Firmansyah',
    role: 'Pelajar SMK',
    quote:
      'Dari tidak tahu apa-apa soal koding, kini saya bisa membangun tampilan web sendiri. Terima kasih Pojok Literasi Digital karena sudah membuka jalan belajar baru.',
    radius: 'rounded-sm',
    avatarTone: 'bg-accent',
  },
]

// ======================== SECTION 1: HEADER ========================
function HeaderSection() {
  return (
    <section className="py-20 md:py-28 bg-surface">
      <div className="max-w-6xl mx-auto px-4">
        <div className="max-w-2xl">
          <p className="text-accent text-sm font-semibold tracking-wide mb-3">
            TESTIMONI
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-primary leading-tight mb-6">
            Suara <span className="text-accent">Warga</span> Bulusari
          </h1>
          <p className="text-primary/70 text-base md:text-lg leading-relaxed">
            Pengalaman dan kesan nyata dari para peserta yang telah mengikuti
            berbagai program literasi digital. Cerita mereka adalah bukti bahwa
            literasi digital benar-benar mengubah kehidupan sehari-hari.
          </p>
        </div>
      </div>
    </section>
  )
}
// ======================== SECTION 2: KUTIPAN ZIG-ZAG ========================
function CeritaSection() {
  return (
    <section className="py-20 md:py-24 bg-light">
      <div className="max-w-6xl mx-auto px-4">
        <div className="mb-12">
          <p className="text-accent text-sm font-semibold tracking-wide mb-3">
            CERITA MEREKA
          </p>
          <h2 className="text-2xl md:text-4xl font-bold text-primary leading-tight">
            Kesan yang <span className="text-accent">Berkesan</span>
          </h2>
        </div>

        {/* Zig-zag: 2 kolom dengan offset bergantian */}
        <div className="space-y-10 md:space-y-14">
          {testimonials.slice(0, 4).map((t, i) => {
            const isOdd = i % 2 === 0
            return (
              <div
                key={i}
                className="flex flex-col md:grid md:grid-cols-5 gap-6 md:gap-10 items-start"
              >
                {/* Kartu kutipan */}
                <div
                  className={`md:col-span-3 ${
                    isOdd ? 'md:order-1' : 'md:order-2 md:col-start-3'
                  } w-full`}
                >
                  <div
                    className={`bg-surface p-6 md:p-8 shadow-sm hover:shadow-[0_4px_20px_rgba(0,0,0,0.07)] transition-shadow ${t.radius}`}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className={`w-12 h-12 ${t.avatarTone} rounded-full flex items-center justify-center text-surface font-bold text-lg flex-shrink-0`}
                      >
                        {t.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-semibold text-primary text-sm">
                          {t.name}
                        </p>
                        <p className="text-muted text-xs">{t.role}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 mb-3">
                      {[...Array(5)].map((_, s) => (
                        <FontAwesomeIcon
                          key={s}
                          icon={faStar}
                          className="text-accent text-xs"
                        />
                      ))}
                    </div>
                    <FontAwesomeIcon
                      icon={faQuoteLeft}
                      className="text-accent/30 text-2xl mb-3"
                    />
                    <p className="text-primary/70 leading-relaxed text-sm md:text-base">
                      &ldquo;{t.quote}&rdquo;
                    </p>
                  </div>
                </div>

                {/* Kolom angka untuk keseimbangan asimetris */}
                <div
                  className={`hidden md:flex md:col-span-2 self-center items-center justify-center ${
                    isOdd ? 'md:order-2' : 'md:order-1'
                  }`}
                >
                  <div className="flex flex-col items-center justify-center">
                    <span className="text-accent-secondary font-bold text-5xl md:text-6xl block">
                      0{i + 1}
                    </span>
                    <span className="text-muted text-sm mt-2 block">
                      Kesan dari kegiatan
                    </span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
// ======================== SECTION 3: GRID KARTU ========================
function GridSection() {
  return (
    <section className="py-24 md:py-28 bg-surface">
      <div className="max-w-6xl mx-auto px-4">
        <div className="max-w-2xl mb-12">
          <p className="text-accent text-sm font-semibold tracking-wide mb-3">
            ULASAN
          </p>
          <h2 className="text-2xl md:text-4xl font-bold text-primary leading-tight">
            Kata Mereka Selengkapnya
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((t, i) => (
            <article
              key={i}
              className={`${t.radius} bg-light p-6 shadow-sm hover:shadow-[0_4px_20px_rgba(0,0,0,0.07)] transition-shadow flex flex-col`}
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, s) => (
                  <FontAwesomeIcon
                    key={s}
                    icon={faStar}
                    className="text-accent text-xs"
                  />
                ))}
              </div>
              <p className="text-primary/70 text-sm leading-relaxed mb-6 flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-primary/10">
                <div
                  className={`w-10 h-10 ${t.avatarTone} rounded-full flex items-center justify-center text-surface font-bold text-sm flex-shrink-0`}
                >
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-primary text-sm">
                    {t.name}
                  </p>
                  <p className="text-muted text-xs">{t.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
// ======================== SECTION 4: STATISTIK + CTA ========================
function StatSection() {
  const navigate = useNavigate()

  const stats = [
    { icon: faUsers, value: '120+', label: 'Peserta Program' },
    { icon: faFaceSmile, value: '90%', label: 'Puas & Terbantu' },
    { icon: faBookOpen, value: '4', label: 'Tema Pelatihan' },
  ]

  return (
    <section className="py-20 md:py-24 bg-light">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-10 md:gap-12 items-center">
          {/* Statistik */}
          <div className="order-1">
            <p className="text-accent text-sm font-semibold tracking-wide mb-3">
              DAMPAK
            </p>
            <h2 className="text-2xl md:text-4xl font-bold text-primary leading-tight mb-6">
              Dampak Nyata bagi{' '}
              <span className="text-accent">Masyarakat</span>
            </h2>
            <p className="text-primary/70 leading-relaxed mb-8">
              Berkat antusiasme warga, berbagai program literasi digital terus
              berkembang dan menjangkau lebih banyak orang di Bulusari.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {stats.map((s, i) => (
                <div
                  key={i}
                  className={`bg-surface p-5 shadow-sm ${
                    i === 0
                      ? 'rounded-sm'
                      : i === 1
                        ? 'rounded-md'
                        : 'rounded-lg'
                  }`}
                >
                  <FontAwesomeIcon
                    icon={s.icon}
                    className="text-accent text-lg mb-3"
                  />
                  <p className="text-2xl font-bold text-primary">{s.value}</p>
                  <p className="text-muted text-xs mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="order-2 md:justify-self-end w-full max-w-sm">
            <div className="bg-primary text-surface rounded-xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.07)]">
              <h3 className="text-xl font-bold text-surface mb-4">
                Ingin Ikut Belajar?
              </h3>
              <p className="text-surface/70 text-sm leading-relaxed mb-6">
                Jelajahi berbagai konten dan program literasi digital yang bisa
                kamu ikuti bersama kami.
              </p>
              <button
                onClick={() => navigate('/konten-literasi')}
                className="w-full inline-flex items-center justify-center gap-2 bg-accent text-surface px-6 py-3 rounded-md font-semibold text-sm hover:bg-accent-hover transition-colors cursor-pointer border-none"
              >
                Jelajahi Konten
                <FontAwesomeIcon icon={faArrowRight} className="text-sm" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ======================== TESTIMONI PAGE ========================
export default function Testimoni() {
  return (
    <div className="pt-16">
      <HeaderSection />
      <CeritaSection />
      <GridSection />
      <StatSection />
    </div>
  )
}
