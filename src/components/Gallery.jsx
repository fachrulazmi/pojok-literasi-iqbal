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

export default function Gallery() {
  return (
    <section id="galeri" className="py-14 md:py-20 bg-light">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="mb-10">
          <p className="text-accent text-sm font-semibold tracking-wide mb-3">
            GALERI KEGIATAN
          </p>
          <h2 className="text-2xl md:text-4xl font-bold text-primary leading-tight">
            Dokumentasi <span className="text-accent">Aktivitas</span> Kami
          </h2>
        </div>

        {/* Gallery Grid */}
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