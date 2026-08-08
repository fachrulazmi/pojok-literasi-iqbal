import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'

const testimonials = [
  {
    quote:
      'Berkat pelatihan di Pojok Literasi Digital, saya sekarang bisa menggunakan komputer untuk membantu administrasi desa. Sangat bermanfaat!',
    name: 'Ibu Siti Maryam',
    role: 'Kader PKK Desa Sukamaju',
    radius: 'rounded-sm',
  },
  {
    quote:
      'Anak saya jadi lebih paham tentang bahaya internet dan sekarang lebih bijak menggunakan media sosial. Terima kasih Pojok Literasi!',
    name: 'Bapak Ahmad Fauzi',
    role: 'Orang Tua Peserta',
    radius: 'rounded-lg',
  },
  {
    quote:
      'Pelatihan coding-nya sangat mudah dipahami. Saya yang awalnya tidak tahu apa-apa, sekarang sudah bisa membuat website sederhana.',
    name: 'Rizki Pratama',
    role: 'Peserta Pelatihan Coding',
    radius: 'rounded-xl',
  },
]

export default function Testimonials() {
  return (
    <section id="testimoni" className="py-16 md:py-28 bg-surface">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="mb-12">
          <p className="text-accent text-sm font-semibold tracking-wide mb-3">
            TESTIMONI
          </p>
          <h2 className="text-2xl md:text-4xl font-bold text-primary leading-tight">
            Apa Kata <span className="text-accent">Mereka?</span>
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className={`bg-light p-6 ${item.radius} shadow-sm hover:shadow-[0_4px_20px_rgba(0,0,0,0.07)] transition-shadow`}
            >
              <FontAwesomeIcon
                icon={faQuoteLeft}
                className="text-accent/30 text-2xl mb-4"
              />
              <p className="text-primary/70 text-sm leading-relaxed mb-5 italic">
                &ldquo;{item.quote}&rdquo;
              </p>
              <div className="border-t border-primary/10 pt-4">
                <p className="font-semibold text-primary text-sm">
                  {item.name}
                </p>
                <p className="text-muted text-xs mt-1">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}