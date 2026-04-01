import React from 'react';
import styles from './card.css';

const PostPreview = (props: any) => {
  return (
    <div className={styles.preview}>
      <img
        className={styles.previewImg}
        src={props.previewImg}
      />
    </div>
  );
};

export default PostPreview;
