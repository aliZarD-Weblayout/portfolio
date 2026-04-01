import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import styles from "./card.css";
import { CommentForm } from "./CommentForm";

interface IPost {
  onClose?: () => void;
  title: string;
  author: string;
  avatar: string;
  datePostUtc: number;
  previewImg: string;
}

export const PostModal = (props: IPost) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (event.target instanceof Node && !ref.current?.contains(event.target)) {
        props.onClose?.();
      }
    }
  
    document.addEventListener('click', handleClick);
  
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);
  

  const node = document.querySelector('#modal_root');
  if (!node) return null;

  return ReactDOM.createPortal(
    <div className={styles.modal} ref={ref}>
      <div className={styles.modal_content}>
        <h2 className={styles.title}>
          {props.title}
        </h2>
        <div className={styles.preview}>
          <img
            className={styles.previewImg}
            src={props.previewImg}
          />
        </div>
        <div className={styles.user}>
        <span className={styles.createdAt}>{props.datePostUtc}</span>
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
        <div className={styles.commentContainer}>
          <CommentForm />
        </div>
      </div>
    </div>,
    node
  );
}
