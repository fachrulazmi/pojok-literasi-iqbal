import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faMapMarkerAlt,
  faEnvelope,
  faPhone,
  faClock,
} from '@fortawesome/free-solid-svg-icons'

// ======================== CONTACT ========================
function ContactSection() {
  return (
    <section className="py-16 md:py-24 bg-light">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-12">
          {/* Form Kiri */}
          <div className="order-1">
            <p className="text-accent text-sm font-semibold tracking-wide mb-3">
              KONTAK KAMI
            </p>
            <h2 className="text-xl md:text-4xl font-bold text-primary leading-tight mb-6">
              Hubungi <span className="text-accent">Kami</span>
            </h2>
            <p className="text-muted text-sm leading-relaxed mb-8">
              Punya pertanyaan atau ingin berkolaborasi? Jangan ragu untuk
              menghubungi kami melalui form di bawah ini.
            </p>

            <form className="space-y-5">
              <div>
                <label
                  htmlFor="nama"
                  className="block text-primary text-sm font-medium mb-2"
                >
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  id="nama"
                  placeholder="Masukkan nama Anda"
                  className="w-full px-4 py-3 rounded-md border border-primary/20 bg-surface text-primary text-sm focus:outline-none focus:border-accent transition-colors placeholder:text-muted"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-primary text-sm font-medium mb-2"
                >
                  Alamat Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="contoh@email.com"
                  className="w-full px-4 py-3 rounded-md border border-primary/20 bg-surface text-primary text-sm focus:outline-none focus:border-accent transition-colors placeholder:text-muted"
                />
              </div>
              <div>
                <label
                  htmlFor="pesan"
                  className="block text-primary text-sm font-medium mb-2"
                >
                  Pesan
                </label>
                <textarea
                  id="pesan"
                  rows={4}
                  placeholder="Tulis pesan Anda..."
                  className="w-full px-4 py-3 rounded-md border border-primary/20 bg-surface text-primary text-sm focus:outline-none focus:border-accent transition-colors resize-none placeholder:text-muted"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full sm:w-auto bg-accent text-surface px-8 py-3 rounded-md font-semibold text-sm hover:bg-accent-hover transition-colors cursor-pointer border-none"
              >
                Kirim Pesan
              </button>
            </form>
          </div>

          {/* Info Kanan */}
          <div className="order-2">
            <div className="bg-surface p-5 md:p-8 rounded-xl shadow-sm">
              <h3 className="font-semibold text-primary text-lg mb-6">
                Informasi Kontak
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-accent/10 rounded-md flex items-center justify-center flex-shrink-0">
                    <FontAwesomeIcon
                      icon={faMapMarkerAlt}
                      className="text-accent"
                    />
                  </div>
                  <div>
                    <p className="font-medium text-primary text-sm">
                      Alamat
                    </p>
                    <p className="text-muted text-sm mt-1">
                      Jl. Pendidikan No. 123, Kelurahan Cerdas, Kecamatan
                      Literasi, Kota Pelajar
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-accent/10 rounded-md flex items-center justify-center flex-shrink-0">
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className="text-accent"
                    />
                  </div>
                  <div>
                    <p className="font-medium text-primary text-sm">
                      Email
                    </p>
                    <p className="text-muted text-sm mt-1">
                      info@pojokliterasi.id
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-accent/10 rounded-md flex items-center justify-center flex-shrink-0">
                    <FontAwesomeIcon
                      icon={faPhone}
                      className="text-accent"
                    />
                  </div>
                  <div>
                    <p className="font-medium text-primary text-sm">
                      Telepon
                    </p>
                    <p className="text-muted text-sm mt-1">
                      +62 812-3456-7890
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-accent/10 rounded-md flex items-center justify-center flex-shrink-0">
                    <FontAwesomeIcon
                      icon={faClock}
                      className="text-accent"
                    />
                  </div>
                  <div>
                    <p className="font-medium text-primary text-sm">
                      Jam Operasional
                    </p>
                    <p className="text-muted text-sm mt-1">
                      Senin - Jumat: 08.00 - 16.00 WIB
                    </p>
                    <p className="text-muted text-sm">
                      Sabtu: 08.00 - 12.00 WIB
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ======================== PENUTUP PAGE ========================
export default function Penutup() {
  return (
    <div className="pt-16">
      <ContactSection />
    </div>
  )
}