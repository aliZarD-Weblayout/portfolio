import React, { ChangeEvent, FormEvent, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // Импортируем useParams
import styles from "./card.css";
import commentContext from "../../context/commentContext";
import RedditComments from "./RedditComments";

export function CommentForm() {
  const { value, onChange } = useContext(commentContext);
  const [postId, setPostId] = useState("");
  const { postIdFromUrl } = useParams(); // Получаем параметр postId из URL

  useEffect(() => {
    // Используем postId из URL или любую другую логику, чтобы установить postId
    setPostId(postIdFromUrl || "");
  }, [postIdFromUrl]);

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    onChange(event.target.value);
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    console.log(value);
    return value;
  }

  return (
    <div>
      <form className={styles.commentForm} onSubmit={handleSubmit}>
        <textarea className={styles.commentTextarea} value={value} placeholder="Комментарий" onChange={handleChange} />
        <button type="submit" className={styles.commentBtn}>
          Комментировать
        </button>
      </form>
      {/* Передаем динамический postId в компонент RedditComments */}
      <RedditComments postId={postId} />
    </div>
  );
}
