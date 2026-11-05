import { Menu, X } from 'lucide-react';
import { useMemo, useState, useEffect } from 'react';
import { Link, useRouterState } from '@tanstack/react-router';
import ThemeToggle from './ThemeToggle';
import { NAV_IMAGE } from '../utils/images';
import { useMenu } from '../hooks/useMenu';

type NavbarProps = {
  activeTab?: string;
};

const navItems = [
  { id: 'home', label: 'Accueil', path: '/' },
  { id: 'about', label: 'À propos', path: '/about' },
  { id: 'services', label: 'Services', path: '/services' },
  { id: 'realisations', label: 'Réalisations', path: '/projects' },
  { id: 'methode', label: 'Méthode', path: '/#methode' },
  { id: 'contact', label: 'Contact', path: '/contact' },
] as const;

export default function Navbar({ activeTab: activeTabProp }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { location } = useRouterState();
  const { setIsMenuOpen } = useMenu();

  useEffect(() => {
    setIsMenuOpen(isOpen);
  }, [isOpen, setIsMenuOpen]);

  const activeTab = useMemo(() => {
    if (activeTabProp) return activeTabProp;
    const first = location.pathname.split('/').filter(Boolean)[0] || 'home';
    const pathToNavId: Record<string, string> = {
      home: 'home', services: 'services', projects: 'realisations', about: 'about', contact: 'contact',
    };
    return pathToNavId[first] ?? '';
  }, [activeTabProp, location.pathname]);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <nav role="navigation" aria-label="Navigation principale" className={`glass-strong sticky top-0 z-50 border-b border-border-color ${isOpen ? 'z-[1000]' : ''}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between min-h-16 py-2">
            <Link to="/" onClick={closeMenu} className="flex items-center gap-3 rounded-lg focus-ring" aria-label="Accueil — Abderrahmane El Farouah, ABDEDEVLAB">
              <img src={NAV_IMAGE} alt="Portrait d'Abderrahmane El Farouah" width="48" height="48" className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg object-cover border border-border-color" />
              <span className="flex flex-col leading-tight">
                <span className="text-sm sm:text-base font-semibold text-text-main">Abderrahmane <span className="text-text-secondary">El Farouah</span></span>
                <span className="text-xs sm:text-sm font-bold tracking-[0.12em] text-sky-500">ABDEDEVLAB</span>
              </span>
            </Link>

            <div className="hidden lg:flex items-center justify-center flex-1 px-5">
              <div className="flex items-center gap-1">
                {navItems.map((item) => (
                  <Link key={item.id} to={item.path} className={`touch-area focus-ring inline-flex items-center justify-center px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-200 ${activeTab === item.id ? 'text-accent bg-accent/10' : 'text-text-secondary hover:text-text-main hover:bg-bg-secondary/50'}`} aria-current={activeTab === item.id ? 'page' : undefined}>
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-3">
              <ThemeToggle />
              <button aria-label={isOpen ? 'Fermer le menu' : 'Ouvrir le menu'} aria-expanded={isOpen} onClick={() => setIsOpen(!isOpen)} className="lg:hidden touch-area focus-ring inline-flex items-center justify-center p-2 rounded-lg text-text-secondary hover:text-text-main hover:bg-bg-secondary/50 transition-colors">
                {isOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {isOpen && (
        <>
          <button className="fixed inset-0 z-[999] bg-black/40 backdrop-blur-sm cursor-default" onClick={closeMenu} aria-label="Fermer le menu" />
          <div className="fixed top-0 right-0 h-screen w-72 glass z-[1000] border-l border-border-color/50">
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between p-4 border-b border-border-color/50">
                <span className="text-lg font-semibold text-text-main">Menu</span>
                <button onClick={closeMenu} className="touch-area rounded-lg text-text-secondary" aria-label="Fermer le menu"><X size={20} /></button>
              </div>
              <nav className="flex-1 flex flex-col p-4 space-y-1" aria-label="Menu mobile">
                {navItems.map((item) => (
                  <Link key={item.id} to={item.path} onClick={closeMenu} className={`touch-area focus-ring block w-full px-4 py-3 rounded-lg text-base font-medium transition-colors ${activeTab === item.id ? 'text-accent bg-accent/10' : 'text-text-secondary hover:text-text-main hover:bg-bg-secondary/50'}`} aria-current={activeTab === item.id ? 'page' : undefined}>
                    {item.label}
                  </Link>
                ))}
                <div className="mt-4 border-t border-border-color/50 pt-4 px-4 text-xs font-bold tracking-[0.12em] text-sky-500">ABDEDEVLAB</div>
              </nav>
            </div>
          </div>
        </>
      )}
    </>
  );
}
