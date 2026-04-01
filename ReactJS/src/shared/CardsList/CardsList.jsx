import React, { useContext } from "react";
import styles from './cardslist.css'
import Card from './Card/Card'
import { postsContext } from "../context/postContext";

export function CardsList() {
  const posts = useContext(postsContext);

  return (
    <ul className={styles.cardsList}>
      {posts.map((post) => (
        <li key={post.data.id}>
          <Card
            id={post.data.id}
            author={post.data.author}
            title={post.data.title}
            avatar={post.data.sr_detail.icon_img
              ? post.data.sr_detail.icon_img
              : 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1331&q=80'}
            previewImg={post.data.preview
              ? post.data.preview.images?.[0].source.url.replace(/(\&amp\;)/g, '&')
              : 'https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80'}
            datePostUtc={post.data.created_utc * 1000}
          />
        </li>
      ))}
    </ul>
  );
  
}
