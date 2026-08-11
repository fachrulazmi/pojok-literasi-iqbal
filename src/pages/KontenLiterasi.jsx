import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import articles from '../data/artikelLiterasi'

export default function KontenLiterasi() {
  const navigate = useNavigate()
  return (
    <div className="pt-16">
      {/* Header Section */}
      <section className="py-20 md:py-28 bg-surface">
        <div className="max-w-6xl mx-auto px-4">
          <div className="max-w-2xl">
            <p className="text-accent text-sm font-semibold tracking-wide mb-3">
              KONTEN LITERASI
            </p>
            <h1 className="text-2xl md:text-5xl font-bold text-primary leading-tight mb-6">
              Wawasan Literasi{' '}
              <span className="text-accent">Digital</span>
            </h1>
            <p className="text-primary/70 text-base md:text-lg leading-relaxed">
              Jelajahi berbagai perspektif literasi digital dalam kehidupan
              sosial, pelestarian kebudayaan, dan pengembangan spiritual
              keagamaan di era teknologi informasi.
            </p>
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section className="py-16 md:py-24 bg-light">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {articles.map((article) => (
              <article
                key={article.id}
                onClick={() => navigate(`/konten-literasi/${article.id}`)}
                className={`${article.radius} bg-surface shadow-sm hover:shadow-[0_4px_20px_rgba(0,0,0,0.07)] transition-shadow overflow-hidden cursor-pointer`}
              >
                {/* Icon Header */}
                <div className="bg-accent/5 p-5 flex flex-col items-center text-center">
                  <div className="w-10 h-10 bg-accent/10 rounded-md flex items-center justify-center mb-3">
                    <FontAwesomeIcon
                      icon={article.icon}
                      className="text-accent text-lg"
                    />
                  </div>
                  <h2 className="text-lg font-bold text-primary mb-1">
                    {article.title}
                  </h2>
                  <p className="text-muted text-xs">{article.subtitle}</p>
                </div>

                {/* Content */}
                <div className="p-4">
                  <p className="text-primary/70 text-sm leading-relaxed mb-3">
                    {article.desc}
                  </p>

                  <h3 className="font-semibold text-primary text-sm mb-3">
                    Poin Penting:
                  </h3>
                  <ul className="space-y-1.5">
                    {article.points.map((point, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-muted text-sm"
                      >
                        <span className="text-accent mt-1 flex-shrink-0">
                          &#8226;
                        </span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}