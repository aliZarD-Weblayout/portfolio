import React from 'react';
import styles from './card.css';

const PostContent = () => {
  return (
    <div className={styles.textContent}>
      <h2 className={styles.title}>
        <a href="#post-url" className={styles.postLink}>
          Следует отметить, что новая модель организационной деятельности Следует
          отметить, что новая модель организационной деятельности
        </a>
      </h2>
    </div>
  );
};

export default PostContent;
