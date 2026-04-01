import React, { useState } from 'react';
import styles from './card.css';
import { PostModal } from './Post';

const PostContent = (props: any) => {
  const [isModalOpened, setIsModalOpened] = useState(false);

  return (
    <div className={styles.alltext}>
      <div className={styles.textContent}>
        <h2 className={styles.title}>
          <a
            href="#post-url"
            onClick={() => setIsModalOpened(true)}
            className={styles.postLink}
          >
            {props.title}
          </a>
        </h2>
        <div className={styles.user}>
          <span className={styles.createdAt}>{props.dataPostUtc}</span>
          <div className={styles.user}>
            <img
              className={styles.avatar}
              src={props.avatar}
              alt="avatar"
            />
            <a href="#user-url" className={styles.username}>
              {props.author}
            </a>
          </div>
        </div>
        {isModalOpened && <PostModal previewImg={props.previewImg} title={props.title} author={props.author} datePostUtc={props.datePostUtc} avatar={props.avatar} onClose={() => { setIsModalOpened(false); }} />}
      </div>
    </div>
  );
};

export default PostContent;
