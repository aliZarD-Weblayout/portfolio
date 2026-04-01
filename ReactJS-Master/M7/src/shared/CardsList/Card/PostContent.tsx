import React from 'react';
import styles from './card.css';

const PostContent = () => {
  return (
    <div className={styles.alltext}>
      <div className={styles.textContent}>
        <h2 className={styles.title}>
          <a href="#post-url" className={styles.postLink}>
            Реализация намеченных плановых заданий
          </a>
        </h2>
        <div className={styles.user}>
          <span className={styles.createdAt}>
            <span className={styles.publishedLabel}>
              опубликовано
            </span>
            &nbsp;
            4 часа назад
          </span>
          <div className={styles.user}>
            <img
              className={styles.avatar}
              src="https://cdn.dribbble.com/userupload/8121726/file/original-022583ba47860384b5e7f7dbde13a566.png?compress=1&resize=752x"
              alt="avatar"
            />
            <a href="#user-url" className={styles.username}>
              Дмитрий Гришин
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostContent;
