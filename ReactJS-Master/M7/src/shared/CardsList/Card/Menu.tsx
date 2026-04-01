import React from 'react';
import { MenuIcon } from '../../icons';
import styles from './card.css';

interface MenuProps {
  onClick: () => void;
}

const Menu: React.FC<MenuProps> = ({ onClick }) => {
  return (
    <button className={styles.menuButton} onClick={onClick}>
      <MenuIcon />
    </button>
  );
};

export default Menu;
