import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import useSmoothScroll from '../hooks/useSmoothScroll'

export default function Hero() {
  const scrollTo = useSmoothScroll(64)

  return (
    <section
      id="beranda"
      className="min-h-[90vh] md:min-h-screen flex items-center bg-surface pt-16"
    >
      <div className="max-w-6xl mx-auto px-4 w-full">
        <div className="flex flex-col md:grid md:grid-cols-2 md:items-center gap-8 md:gap-10">
          {/* Foto — di atas di mobile, di kanan di desktop */}
          <div className="order-1 md:order-2 flex justify-center md:justify-end">
            <div className="relative w-full max-w-[220px] md:max-w-md aspect-square rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.07)]">
              <img
                src="./images/hero-library.jpg"
                alt="Perpustakaan modern dengan rak buku"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Konten — di bawah di mobile, di kiri di desktop */}
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
                onClick={() => scrollTo('program')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-accent text-surface px-6 py-3 rounded-md font-semibold text-sm hover:bg-accent-hover transition-colors cursor-pointer border-none"
              >
                Lihat Program
                <FontAwesomeIcon icon={faArrowRight} className="text-sm" />
              </button>
              <button
                onClick={() => scrollTo('tentang')}
                className="w-full sm:w-auto inline-flex items-center justify-center border border-primary/20 text-primary/70 px-6 py-3 rounded-md font-semibold text-sm hover:bg-light transition-colors cursor-pointer bg-transparent"
              >
                Pelajari Lebih Lanjut
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}