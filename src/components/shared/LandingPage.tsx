import { Link } from '@tanstack/react-router';
import { ArrowRight } from 'lucide-react';
import Container from './Container';

export interface LandingCard {
  title: string;
  text: string;
  points: string[];
}

export interface LandingPageProps {
  title: string;
  intro: string;
  cards: LandingCard[];
  ctaTitle: string;
  ctaText: string;
  ctaLabel: string;
}

/** Page de service : titre, introduction, cartes de prestations et appel à l'action. */
export default function LandingPage({ title, intro, cards, ctaTitle, ctaText, ctaLabel }: LandingPageProps) {
  const columns = cards.length === 2 ? 'md:grid-cols-2' : 'md:grid-cols-2 lg:grid-cols-3';

  return (
    <div className="min-h-screen page-shell">
      <Container className="py-12">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-text-main mb-4">{title}</h1>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">{intro}</p>
        </header>

        <div className={`grid ${columns} gap-8 mb-12`}>
          {cards.map((card) => (
            <article key={card.title} className="card-bento p-6">
              <h2 className="text-xl font-bold text-text-main mb-3">{card.title}</h2>
              <p className="text-text-secondary mb-4">{card.text}</p>
              <ul className="space-y-2 text-text-secondary list-disc pl-5">
                {card.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <section className="text-center">
          <h2 className="text-2xl font-bold text-text-main mb-4">{ctaTitle}</h2>
          <p className="text-text-secondary mb-6 max-w-2xl mx-auto">{ctaText}</p>
          <Link
            to="/contact"
            className="btn-premium inline-flex items-center gap-3 px-8 py-4 text-base font-medium rounded-lg"
          >
            {ctaLabel}
            <ArrowRight className="w-5 h-5" aria-hidden="true" />
          </Link>
        </section>
      </Container>
    </div>
  );
}
