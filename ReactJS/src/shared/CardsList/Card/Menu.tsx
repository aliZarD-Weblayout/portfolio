import React, { forwardRef, ButtonHTMLAttributes } from 'react';
import { MenuIcon } from '../../icons';
import styles from './card.css';

interface MenuProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick: () => void;
}

// Use React.forwardRef to forward the ref to the button element
const Menu: React.ForwardRefRenderFunction<HTMLButtonElement, MenuProps> = ({ onClick }, ref) => {
  return (
    <button ref={ref} className={styles.menuButton} onClick={onClick}>
      <MenuIcon />
    </button>
  );
};

// ForwardedMenu is now a reference to the button element
const ForwardedMenu = forwardRef(Menu);

export { ForwardedMenu };
