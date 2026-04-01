import React from 'react';
import styles from "./card.css";
import { CommentIcon, BlockIcon, ShareIcon, SaveIcon, ReportIcon } from '../../icons';

type DropdownContentProps = {
  isOpen: boolean;
  onClose: () => void;
  onOptionClick: (option: string) => void;
  buttonCoordinates: { top: number; left: number };
};

const DropDownContent: React.FC<DropdownContentProps> = ({ 
  isOpen,
  onClose,
  onOptionClick,
  buttonCoordinates,
}) => {
  if (!isOpen) return null;

  return (
    <div className={styles.dropdownMenu}
      style={{
        top: `${buttonCoordinates.top + 40}px`,
        left: `${buttonCoordinates.left - 50}px`,
      }}
    >
      <ul className={styles.dropdownList}>
        <li onClick={() => onOptionClick('Коментарии')} className={styles.dropdownOption}>
          <button className={styles.dropDownOptionBtn}>
            <CommentIcon />
            Комментарии
          </button>
        </li>
        <li onClick={() => onOptionClick('Поделиться')} className={styles.dropdownOption}>
          <button className={styles.dropDownOptionBtn}>
            <ShareIcon />
            Поделиться
          </button>
        </li>
        <li onClick={() => onOptionClick('Скрыть')} className={styles.dropdownOption}>
          <button className={styles.dropDownOptionBtn}>
            <BlockIcon />
            Скрыть
          </button>
        </li>
        <li onClick={() => onOptionClick('Сохранить')} className={styles.dropdownOption}>
          <button className={styles.dropDownOptionBtn}>
            <SaveIcon />
            Сохранить
          </button>
        </li>
        <li onClick={() => onOptionClick('Пожаловаться')} className={styles.dropdownOption}>
          <button className={styles.dropDownOptionBtn}>
            <ReportIcon />
            Пожаловаться
          </button>
        </li>
      </ul>
      <button onClick={() => onOptionClick('Закрыть')} className={styles.dropDownOptionLast}>
        Закрыть
      </button>
      <div className="dropdown-overlay" />
    </div>
  );
};

export default DropDownContent;
