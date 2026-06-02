import { motion } from 'framer-motion';
import { Link } from '@tanstack/react-router';
import { ArrowRight, Zap } from 'lucide-react';
import {
  SERVICES_HEADING,
  SERVICE_OFFERINGS,
  SERVICE_TECHNOLOGIES,
} from '../../data/services';

type ServicesOverviewProps = {
  id?: string;
  className?: string;
  showBadge?: boolean;
  badgeLabel?: string;
  showCta?: boolean;
  headingAs?: 'h1' | 'h2';
};

export default function ServicesOverview({
  id = 'services',
  className = 'section-premium py-24 px-4',
  showBadge = true,
  badgeLabel = 'Expertise',
  showCta = false,
  headingAs = 'h2',
}: ServicesOverviewProps) {
  const Heading = headingAs;

  return (
    <section id={id} className={className}>
      <div className="max-w-7xl mx-auto">
        <motion.header
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {showBadge && (
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium mb-6">
              <Zap className="w-4 h-4 text-accent" aria-hidden="true" />
              <span>{badgeLabel}</span>
            </span>
          )}

          <Heading className="text-4xl md:text-5xl font-bold mb-4 text-text-main">
            {SERVICES_HEADING.prefix}{' '}
            <span className="text-gradient">{SERVICES_HEADING.highlight}</span>
          </Heading>

          <p className="text-xl max-w-2xl mx-auto text-text-secondary leading-relaxed">
            {SERVICES_HEADING.subtitle}
          </p>

          <ul
            className="flex flex-wrap justify-center gap-2 mt-8 max-w-3xl mx-auto list-none p-0 m-0"
            aria-label="Technologies et compétences"
          >
            {SERVICE_TECHNOLOGIES.map((tech) => (
              <li key={tech}>
                <span className="tech-badge">{tech}</span>
              </li>
            ))}
          </ul>
        </motion.header>

        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {SERVICE_OFFERINGS.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <Link
                  to="/contact"
                  className="card-bento group flex h-full flex-col p-6 md:p-7 touch-area focus-visible no-underline hover:border-accent/30 transition-colors duration-200"
                  aria-label={`${service.title} — ${service.description}`}
                >
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-accent mb-6 border border-border-color/40 group-hover:scale-105 transition-transform duration-300`}
                    aria-hidden="true"
                  >
                    <Icon className="w-7 h-7" strokeWidth={1.75} />
                  </div>

                  <h3 className="text-xl font-bold text-text-main mb-3 group-hover:text-accent transition-colors leading-snug">
                    {service.title}
                  </h3>

                  <p className="text-text-secondary leading-relaxed flex-1">
                    {service.description}
                  </p>

                  <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-text-muted group-hover:text-accent transition-colors">
                    En savoir plus
                    <ArrowRight className="w-4 h-4 opacity-70 group-hover:translate-x-0.5 transition-transform" />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>

        {showCta && (
          <motion.div
            className="text-center mt-14"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-text-secondary mb-6 max-w-xl mx-auto">
              Un besoin précis ou plusieurs services combinés ? Parlons-en lors d&apos;un premier
              échange gratuit.
            </p>
            <Link
              to="/contact"
              className="btn btn-primary inline-flex items-center gap-2 px-8 py-4 font-semibold"
            >
              Demander un devis
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
}
