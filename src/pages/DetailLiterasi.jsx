import { useParams, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faPlay } from '@fortawesome/free-solid-svg-icons'
import articles from '../data/artikelLiterasi'

export default function DetailLiterasi() {
  const { kategori } = useParams()
  const navigate = useNavigate()
  const article = articles.find((a) => a.id === kategori)

  if (!article) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center bg-light">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-primary mb-4">
            Artikel tidak ditemukan
          </h1>
          <button
            onClick={() => navigate('/konten-literasi')}
            className="text-accent font-semibold hover:text-accent-hover transition-colors"
          >
            &larr; Kembali ke Konten Literasi
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-16">
      {/* ==================== HEADER ==================== */}
      <section className="py-6 md:py-10 bg-surface">
        <div className="max-w-5xl mx-auto px-4">
          <button
            onClick={() => navigate('/konten-literasi')}
            className="inline-flex items-center gap-2 text-accent text-sm font-semibold hover:text-accent-hover transition-colors mb-8 bg-transparent border-none p-0 cursor-pointer"
          >
            <FontAwesomeIcon icon={faArrowLeft} className="text-xs" />
            Kembali ke Konten Literasi
          </button>

          <div className="flex items-start gap-4 md:gap-5 mb-4">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-accent/10 rounded-md flex items-center justify-center flex-shrink-0">
              <FontAwesomeIcon
                icon={article.icon}
                className="text-accent text-xl md:text-2xl"
              />
            </div>
            <div>
              <p className="text-accent text-sm font-semibold tracking-wide mb-1">
                KONTEN LITERASI
              </p>
              <h1 className="text-2xl md:text-5xl font-bold text-primary leading-tight">
                {article.title}
              </h1>
            </div>
          </div>
          <p className="text-muted text-base md:text-lg max-w-2xl">
            {article.subtitle}
          </p>
        </div>
      </section>

      {/* ==================== DESKRIPSI + POIN ==================== */}
      <section className="py-6 md:py-10 bg-light">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-col md:grid md:grid-cols-5 gap-8 md:gap-12">
            <div className="md:col-span-3">
              <p className="text-primary/70 text-lg leading-relaxed">
                {article.desc}
              </p>
            </div>
            <div className="md:col-span-2">
              <div className="bg-surface rounded-lg p-6 shadow-sm">
                <h2 className="font-bold text-primary mb-4 flex items-center gap-2">
                  <span className="w-1.5 h-5 bg-accent rounded-full inline-block"></span>
                  Poin Penting
                </h2>
                <ul className="space-y-3">
                  {article.points.map((point, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-primary/70 text-sm"
                    >
                      <span className="text-accent font-bold flex-shrink-0 mt-0.5">
                        {i + 1}.
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== GALERI FOTO ==================== */}
      <section className="py-8 md:py-12 bg-surface">
        <div className="max-w-5xl mx-auto px-4">
          <div className="mb-8">
            <p className="text-accent text-sm font-semibold tracking-wide mb-2">
              DOKUMENTASI
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-primary">
              Galeri <span className="text-accent">Foto</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
            {article.photos.map((photo, i) => (
              <div
                key={i}
                className={`${photo.radius} overflow-hidden bg-surface shadow-sm hover:shadow-[0_4px_20px_rgba(0,0,0,0.07)] transition-shadow`}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    className="w-full h-full object-cover hover:scale-105 transition-transform"
                    loading="lazy"
                  />
                </div>
                <div className="p-3">
                  <p className="text-muted text-xs">{photo.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ==================== KONTEN UTAMA (ZIG-ZAG) ==================== */}
      <section className="py-12 md:py-16 bg-light">
        <div className="max-w-5xl mx-auto px-4">
          <div className="space-y-10 md:space-y-14">
            {article.contentFull.map((section, i) => {
              const isOdd = i % 2 === 0
              return (
                <div
                  key={i}
                  className={`flex flex-col md:grid md:grid-cols-5 gap-6 md:gap-10 items-start ${
                    isOdd ? '' : 'md:text-right'
                  }`}
                >
                  <div
                    className={`flex justify-center ${
                      isOdd ? 'md:order-2 md:col-span-1' : 'md:order-1 md:col-span-1'
                    }`}
                  >
                    <div className="w-12 h-12 bg-accent/10 rounded-md flex items-center justify-center flex-shrink-0 mt-2">
                      <span className="text-accent font-bold text-lg">
                        {i + 1}
                      </span>
                    </div>
                  </div>
                  <div
                    className={`${
                      isOdd ? 'md:order-1 md:col-span-4' : 'md:order-2 md:col-span-4'
                    }`}
                  >
                    <h2 className="text-xl md:text-2xl font-bold text-primary mb-3">
                      {section.heading}
                    </h2>
                    <p className="text-primary/70 leading-relaxed">
                      {section.body}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ==================== VIDEO ==================== */}
      <section className="py-8 md:py-12 bg-surface">
        <div className="max-w-5xl mx-auto px-4">
          <div className="mb-8">
            <p className="text-accent text-sm font-semibold tracking-wide mb-2">
              TONTON
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-primary">
              Video <span className="text-accent">Terkait</span>
            </h2>
          </div>
          <div className="max-w-3xl mx-auto rounded-lg overflow-hidden shadow-sm">
            <div className="aspect-video">
              <iframe
                src={article.videoUrl}
                title={`Video tentang ${article.title}`}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== FOOTER KEMBALI ==================== */}
      <section className="py-8 md:py-10 bg-light">
        <div className="max-w-5xl mx-auto px-4">
          <div className="pt-8 border-t border-primary/10">
            <button
              onClick={() => navigate('/konten-literasi')}
              className="inline-flex items-center gap-2 text-accent font-semibold hover:text-accent-hover transition-colors bg-transparent border-none p-0 cursor-pointer"
            >
              <FontAwesomeIcon icon={faArrowLeft} className="text-sm" />
              Kembali ke Konten Literasi
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
