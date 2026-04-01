import React from 'react';
import PostContent from './PostContent';
import PostPreview from './PostPreview';
import DropdownMenu from './DropDown';
import Controls from './Controls';
import styles from './card.css';

interface CardProps {
  previewImg: string;
  datePostUtc: number;
  title: string;
  avatar: string;
  author: string;
}

const Card: React.FC<CardProps> = (props: any) => {
  console.log(props);
  return (
    <li className={styles.card}>
       {/* <UserInfo /> */}
       <PostPreview previewImg={props.previewImg} />
       <PostContent title={props.title} datePostUtc={props.datePostUtc} avatar={props.avatar} author={props.author} />
       <DropdownMenu />
       <Controls />
    </li>
  );
};

export default Card;
