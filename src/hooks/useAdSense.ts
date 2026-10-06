import { useEffect } from 'react';

const ADSENSE_CLIENT = 'ca-pub-5921232882242644';

/**
 * Hook pour charger le script AdSense une seule fois et le rendre disponible globalement
 */
export function useAdSense() {
  useEffect(() => {
    // Le script doit être chargé une seule fois pour tout le site
    const scriptId = 'adsense-script';
    
    // Vérifier si le script est déjà chargé
    if (document.getElementById(scriptId)) {
      return;
    }

    // Créer et charger le script AdSense
    const script = document.createElement('script');
    script.id = scriptId;
    script.async = true;
    script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}`;
    script.crossOrigin = 'anonymous';
    
    script.onload = () => {
      console.log('[AdSense] Script chargé avec succès');
    };
    
    script.onerror = () => {
      console.error('[AdSense] Erreur lors du chargement du script');
    };

    document.head.appendChild(script);

    return () => {
      // Ne pas supprimer le script, car il peut être réutilisé sur d'autres pages
    };
  }, []);
}

/**
 * Pousser une nouvelle annonce à AdSense après que le script soit chargé
 */
export function pushAdSense() {
  try {
    const win = window as typeof window & { adsbygoogle?: unknown[] };
    if (win.adsbygoogle) {
      win.adsbygoogle.push({});
    } else {
      console.warn('[AdSense] adsbygoogle non disponible');
    }
  } catch (error) {
    console.error('[AdSense] Erreur lors du push:', error);
  }
}
