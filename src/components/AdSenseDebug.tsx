import { useEffect, useState } from 'react';

interface AdSenseStatus {
  scriptLoaded: boolean;
  adsbygoogleReady: boolean;
  clientId: string;
  pageHost: string;
  isProduction: boolean;
  adblockDetected: boolean;
}

export function AdSenseDebug() {
  const [status, setStatus] = useState<AdSenseStatus | null>(null);
  const [showDebug, setShowDebug] = useState(false);

  useEffect(() => {
    // Ne montrer le debug que en développement ou si on force avec ?debug=adsense
    const urlParams = new URLSearchParams(window.location.search);
    const forceDebug = urlParams.get('debug') === 'adsense';
    const isDev = !window.location.hostname.includes('abderrahmane-elfarouahfreelance.com');

    if (!forceDebug && !isDev) {
      return; // Ne pas montrer en prod sauf si forcé
    }

    const checkStatus = () => {
      const win = window as typeof window & { adsbygoogle?: unknown[] };
      const scriptSelector = 'script[src*="pagead2.googlesyndication.com"]';
      const script = document.querySelector(scriptSelector);

      // Détection basique d'adblock
      const adblockTest = document.createElement('div');
      adblockTest.className = 'adsbygoogle';
      adblockTest.style.display = 'none';
      document.body.appendChild(adblockTest);
      const isBlocked = adblockTest.offsetHeight === 0;
      adblockTest.remove();

      setStatus({
        scriptLoaded: !!script,
        adsbygoogleReady: !!win.adsbygoogle,
        clientId: 'ca-pub-5921232882242644',
        pageHost: window.location.hostname,
        isProduction: window.location.hostname.includes('abderrahmane-elfarouahfreelance.com'),
        adblockDetected: isBlocked,
      });
    };

    // Vérifier immédiatement et à intervalles
    checkStatus();
    const interval = setInterval(checkStatus, 2000);

    return () => clearInterval(interval);
  }, []);

  if (!status || !showDebug) {
    return null;
  }

  const statusColor = (value: boolean) => value ? 'text-green-600' : 'text-red-600';

  return (
    <div className="fixed bottom-4 right-4 z-50 max-w-sm bg-gray-900 text-white p-4 rounded-lg text-xs font-mono border border-gray-700 shadow-lg">
      <div className="flex justify-between items-center mb-3 pb-2 border-b border-gray-700">
        <span className="font-bold text-sm">🔍 AdSense Debug</span>
        <button
          onClick={() => setShowDebug(false)}
          className="text-gray-400 hover:text-gray-200"
        >
          ✕
        </button>
      </div>

      <div className="space-y-2">
        <div>
          Script chargé:{' '}
          <span className={statusColor(status.scriptLoaded)}>
            {status.scriptLoaded ? '✓ OUI' : '✗ NON'}
          </span>
        </div>

        <div>
          adsbygoogle prêt:{' '}
          <span className={statusColor(status.adsbygoogleReady)}>
            {status.adsbygoogleReady ? '✓ OUI' : '✗ NON'}
          </span>
        </div>

        <div>
          Publisher ID:{' '}
          <span className="text-blue-400">{status.clientId}</span>
        </div>

        <div>
          Domaine:{' '}
          <span className="text-blue-400">{status.pageHost}</span>
        </div>

        <div>
          Production:{' '}
          <span className={statusColor(status.isProduction)}>
            {status.isProduction ? '✓ OUI' : '✗ NON (DEV)'}
          </span>
        </div>

        <div>
          Adblock détecté:{' '}
          <span className={statusColor(!status.adblockDetected)}>
            {status.adblockDetected ? '⚠ OUI' : '✓ NON'}
          </span>
        </div>

        <div className="pt-2 mt-2 border-t border-gray-700 text-gray-400 text-xs">
          <div>Si tout est ✓ mais pas de pub:</div>
          <div>→ AdSense n'a pas approuvé le domaine</div>
          <div>→ Vérifiez l'approbation dans le compte</div>
        </div>
      </div>
    </div>
  );
}
