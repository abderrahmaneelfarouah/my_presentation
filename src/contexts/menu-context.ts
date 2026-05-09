import { createContext } from 'react';

export interface MenuContextType {
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

export const MenuContext = createContext<MenuContextType | undefined>(undefined);

