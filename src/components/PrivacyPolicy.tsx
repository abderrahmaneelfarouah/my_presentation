import { useEffect, useState } from 'react';
import Container from './shared/Container';
import { SOCIAL_LINKS } from '../utils/constants';

interface GoogleFundingChoices {
  callbackQueue?: Array<Record<string, () => void>>;
  showRevocationMessage?: () => void;
}

export default function PrivacyPolicy() {
  const [consentControlsReady, setConsentControlsReady] = useState(false);

  useEffect(() => {
    const browserWindow = window as Window & { googlefc?: GoogleFundingChoices };
    browserWindow.googlefc = browserWindow.googlefc || {};
    browserWindow.googlefc.callbackQueue = browserWindow.googlefc.callbackQueue || [];
    browserWindow.googlefc.callbackQueue.push({
      CONSENT_API_READY: () => setConsentControlsReady(true),
    });
  }, []);

  const reopenConsentMessage = () => {
    const browserWindow = window as Window & { googlefc?: GoogleFundingChoices };
    browserWindow.googlefc?.showRevocationMessage?.();
  };

  return (
    <section className="w-full py-8 sm:py-12">
      <Container className="max-w-4xl">
        <article className="glass ring-chrome rounded-xl p-5 sm:p-8 space-y-8 text-text-secondary">
          <header>
            <h1 className="text-3xl sm:text-4xl font-bold text-center text-text-main mb-4">
              Politique de confidentialité
            </h1>
            <p>
              Cette page décrit les traitements de données associés au site
              d’Abderrahmane El Farouah. Elle complète les{' '}
              <a className="text-accent hover:underline" href="/mentions-legales">
                mentions légales
              </a>
              .
            </p>
          </header>

          <section>
            <h2 className="text-xl font-bold text-text-main mb-3">Responsable et contact</h2>
            <p>
              Le responsable du traitement est Abderrahmane El Farouah,
              développeur web freelance, joignable à{' '}
              <a className="text-accent hover:underline" href={`mailto:${SOCIAL_LINKS.EMAIL}`}>
                {SOCIAL_LINKS.EMAIL}
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-text-main mb-3">Données et finalités</h2>
            <ul className="list-disc pl-6 space-y-3">
              <li>
                Si vous écrivez à l’adresse de contact, votre messagerie transmet
                le message et les coordonnées que vous choisissez de communiquer
                afin de pouvoir vous répondre.
              </li>
              <li>
                Le formulaire de rendez-vous transmet votre nom, votre adresse
                e-mail et la date demandée au serveur du site. Ces informations
                servent à traiter la demande et à envoyer une notification par
                e-mail via Resend.
              </li>
              <li>
                Le serveur conserve temporairement les demandes de rendez-vous
                dans sa mémoire d’exécution ; cette mémoire n’est pas un stockage
                persistant et peut être réinitialisée entre les invocations. La
                notification e-mail peut toutefois rester dans les boîtes
                concernées.
              </li>
              <li>
                Le choix du thème est enregistré dans le stockage local du
                navigateur sous la clé « theme » afin de mémoriser votre
                préférence.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-text-main mb-3">
              Publicité, cookies et mesure d’audience
            </h2>
            <p className="mb-3">
              Des emplacements Google AdSense sont présents sur les articles du
              blog. Google et ses partenaires peuvent utiliser des cookies ou
              technologies similaires et traiter des données de navigation pour
              fournir, mesurer et, selon les choix applicables, personnaliser
              les annonces. Les informations et paramètres de Google sont
              disponibles dans sa{' '}
              <a
                className="text-accent hover:underline"
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
              >
                politique de confidentialité
              </a>
              .
            </p>
            <p className="mb-3">
              Google Analytics n’est pas chargé par la version actuelle du site.
              Le thème utilise le stockage local décrit ci-dessus. Les cookies
              publicitaires et leur durée éventuelle dépendent des services
              concernés et des choix enregistrés.
            </p>
            <p>
              Pour les visiteurs concernés par les règles de consentement de
              Google, le message de confidentialité doit être activé et publié
              dans l’espace « Confidentialité et messages » d’AdSense. Cette
              page d’information ne remplace pas ce mécanisme. Les annonces
              restent actives sur le site ; le propriétaire doit vérifier dans
              AdSense que la CMP est publiée, qu’elle recueille les choix
              requis et qu’elle permet de les modifier.
            </p>
            {consentControlsReady && (
              <button
                type="button"
                onClick={reopenConsentMessage}
                className="mt-4 text-accent font-medium underline underline-offset-4"
              >
                Paramètres de confidentialité et de cookies
              </button>
            )}
          </section>

          <section>
            <h2 className="text-xl font-bold text-text-main mb-3">
              Destinataires et prestataires
            </h2>
            <p>
              Les informations nécessaires sont accessibles à l’éditeur du
              site et aux prestataires techniques concernés :{' '}
              <a
                className="text-accent hover:underline"
                href="https://vercel.com/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Vercel
              </a>{' '}
              pour l’hébergement,{' '}
              <a
                className="text-accent hover:underline"
                href="https://resend.com/legal/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
              >
                Resend
              </a>{' '}
              pour l’envoi des notifications de rendez-vous et Google pour les
              services publicitaires. Ces prestataires traitent les données
              selon leurs propres conditions et politiques de confidentialité.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-text-main mb-3">
              Durée de conservation
            </h2>
            <p>
              Le formulaire ne définit pas de durée automatique de conservation
              des e-mails reçus. Les demandes doivent être supprimées lorsqu’elles
              ne sont plus nécessaires au suivi, sous réserve des obligations
              légales applicables. Les données de rendez-vous présentes en
              mémoire serveur ne constituent pas une archive durable.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-text-main mb-3">Vos droits</h2>
            <p>
              Dans les conditions prévues par la réglementation, vous pouvez
              demander l’accès, la rectification, l’effacement ou la limitation
              de vos données, vous opposer à certains traitements et retirer
              votre consentement lorsqu’un traitement repose sur celui-ci.
              Vous pouvez aussi déposer une réclamation auprès de la{' '}
              <a
                className="text-accent hover:underline"
                href="https://www.cnil.fr/fr/plaintes"
                target="_blank"
                rel="noopener noreferrer"
              >
                CNIL
              </a>
              . Pour exercer vos droits, écrivez à{' '}
              <a className="text-accent hover:underline" href={`mailto:${SOCIAL_LINKS.EMAIL}`}>
                {SOCIAL_LINKS.EMAIL}
              </a>
              .
            </p>
          </section>

          <p className="border-t border-black/10 pt-4 text-sm dark:border-white/10">
            Dernière mise à jour : 5 octobre 2026
          </p>
        </article>
      </Container>
    </section>
  );
}
