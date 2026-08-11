import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBullseye } from '@fortawesome/free-solid-svg-icons'

export default function About() {
  return (
    <section id="tentang" className="py-16 md:py-24 bg-light">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:grid md:grid-cols-2 md:items-center gap-10">
          {/* Foto Kiri */}
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

          {/* Konten Kanan */}
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
            <h2 className="text-xl md:text-4xl font-bold text-primary leading-tight mb-6">
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
                <p className="text-2xl md:text-3xl font-bold text-accent">500+</p>
                <p className="text-muted text-sm mt-1">Peserta Terlatih</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-bold text-accent">20+</p>
                <p className="text-muted text-sm mt-1">Program Pelatihan</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-bold text-accent">15+</p>
                <p className="text-muted text-sm mt-1">Mitra Komunitas</p>
              </div>
              <div>
                <p className="text-2xl md:text-3xl font-bold text-accent">3</p>
                <p className="text-muted text-sm mt-1">Tahun Berkarya</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}