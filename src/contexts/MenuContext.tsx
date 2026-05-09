import { useState, ReactNode } from 'react';
import { MenuContext } from './menu-context';

export function MenuProvider({ children }: { children: ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <MenuContext.Provider value={{ isMenuOpen, setIsMenuOpen }}>
      {children}
    </MenuContext.Provider>
  );
}
