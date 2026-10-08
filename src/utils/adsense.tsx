import { useEffect } from 'react';
import { motion } from 'framer-motion';

const ADSENSE_CLIENT = 'ca-pub-5921232882242644';
const ADSENSE_SLOT = '8561894521';
const ADSENSE_APPROVED = import.meta.env.ADSENSE_APPROVED === 'true';

/**
 * Hook pour charger le script AdSense une seule fois au niveau global.
 * Doit être appelé depuis le composant racine de l'application.
 */
export function useAdSenseScript() {
  useEffect(() => {
    if (!ADSENSE_APPROVED) {
      return;
    }

    const scriptId = 'adsense-script';

    if (document.getElementById(scriptId)) {
      return;
    }

    const script = document.createElement('script');

    script.id = scriptId;
    script.async = true;
    script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}`;
    script.crossOrigin = 'anonymous';

    script.onerror = () => {
      console.error('[AdSense] Erreur lors du chargement du script AdSense');
    };

    document.head.appendChild(script);
  }, []);
}

/**
 * Composant AdSenseBlock - Affiche une annonce Google AdSense.
 * Le script doit être chargé en amont via useAdSenseScript().
 */
interface AdSenseBlockProps {
  slot?: string;
}

export function AdSenseBlock({
  slot = ADSENSE_SLOT,
}: AdSenseBlockProps) {
  useEffect(() => {
    if (!ADSENSE_APPROVED) {
      return;
    }

    let timeoutId: number | undefined;

    const checkAndPush = () => {
      try {
        const win = window as typeof window & {
          adsbygoogle?: unknown[];
        };

        if (win.adsbygoogle && Array.isArray(win.adsbygoogle)) {
          win.adsbygoogle.push({});
          return;
        }

        timeoutId = window.setTimeout(checkAndPush, 500);
      } catch (error) {
        console.error(
          "[AdSense] Erreur lors du push de l'annonce:",
          error,
        );
      }
    };

    checkAndPush();

    return () => {
      if (timeoutId !== undefined) {
        window.clearTimeout(timeoutId);
      }
    };
  }, []);

  if (!ADSENSE_APPROVED) {
    return null;
  }

  return (
    <motion.aside
      className="my-12 overflow-hidden rounded-2xl border border-[#dfe3e8] bg-[#f7f9fa] p-3 shadow-sm dark:border-slate-700 dark:bg-slate-900"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      aria-label="Publicité Google AdSense"
    >
      <div className="mb-2 text-xs font-medium text-text-muted">
        Publicité
      </div>

      <ins
        className="adsbygoogle"
        style={{
          display: 'block',
          width: '100%',
          minHeight: 'auto',
        }}
        data-ad-client={ADSENSE_CLIENT}
        data-ad-slot={slot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    </motion.aside>
  );
}