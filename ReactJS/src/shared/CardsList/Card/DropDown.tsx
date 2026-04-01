import React, { useState, useRef, useEffect } from 'react';
import styles from './card.css';
import ReactDOM from 'react-dom';
import { ForwardedMenu } from './Menu'; // Предполагается, что у вас есть экспорт ForwardedMenu из Menu
import DropDownContent from './DropDownContent';

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [buttonCoordinates, setButtonCoordinates] = useState({ top: 0, left: 0 });
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const droproot = document.querySelector('#dropdown_root');
  if (!droproot) return null;

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    if (buttonRef.current) {
      const { top, left } = buttonRef.current.getBoundingClientRect();
      setButtonCoordinates({ top, left });
    }
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  const handleOptionClick = (option: string) => {
    closeDropdown();
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        closeDropdown();
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  return (
    <div ref={dropdownRef} className={styles.dropdown}>
      <ForwardedMenu ref={buttonRef} onClick={toggleDropdown} />

      {isOpen && ReactDOM.createPortal(
        <DropDownContent
          isOpen={isOpen}
          onClose={closeDropdown}
          onOptionClick={handleOptionClick}
          buttonCoordinates={buttonCoordinates}
        />,
        droproot
      )}
    </div>
  );
};

export default DropdownMenu;
