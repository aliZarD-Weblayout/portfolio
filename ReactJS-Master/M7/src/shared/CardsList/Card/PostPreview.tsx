import React from 'react';
import styles from './card.css';

const PostPreview = () => {
  return (
    <div className={styles.preview}>
      <img
        className={styles.previewImg}
        src="https://cdn.dribbble.com/userupload/8121726/file/original-022583ba47860384b5e7f7dbde13a566.png?compress=1&resize=752x"
      />
    </div>
  );
};

export default PostPreview;
