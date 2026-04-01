import React from "react";
import { IconAnon } from "../../../icons";
// import { Break } from '../../../Break'
// import { Text } from '../../../Text'
import styles from './userblock.css';

interface IUserBlockProps {
  avatarSrc ?: string
  username ?: string
}

export function UserBlock({ avatarSrc, username }: IUserBlockProps) {
  return (
    <a 
      href="https://www.reddit.com/api/v1/authorize?client_id=22Ys4wzDt1ytZaTbe6OH1Q&response_type=code&state=random_string&redirect_uri=http://localhost:3000/auth&duration=permanent&scope=read submit identity"
      className={styles.userBox}>
      <div className={styles.avatarBox}>
        {avatarSrc
          ? <img src={avatarSrc} alt='user avatar' className={styles.avatarImg} />
          : <IconAnon />
        }
      </div>

      <div className={styles.userName}>
        {/* <Break size={12} />
        <Text size={20} color={username ? EColors.black : EColors.grey99}>{username || 'Аноним'}</Text> */}
        <span className={styles.userNameText}>Аноним</span>
      </div>
    </a>
  )
}