import { useContext } from 'react';
import { MenuContext } from '../contexts/menu-context';

export function useMenu() {
  const context = useContext(MenuContext);
  if (context === undefined) {
    throw new Error('useMenu must be used within a MenuProvider');
  }
  return context;
}

