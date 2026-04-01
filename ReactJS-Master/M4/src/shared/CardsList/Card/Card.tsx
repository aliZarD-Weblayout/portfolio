import React from 'react';
import UserInfo from './UserInfo';
import PostContent from './PostContent';
import PostPreview from './PostPreview';
import Menu from './Menu';
import Controls from './Controls';
import styles from './card.css';

const Card = () => {
  return (
    <li className={styles.card}>
      <UserInfo />
      <PostContent />
      <PostPreview />
      <Menu />
      <Controls />
    </li>
  );
};

export default Card;



// import styles from './card.css';

// export function Card() {
//   return (
//     <li className="{styles.card}">
//       <div className="{styles.textContent}">
//         <div className="{styles.metadata}">
//           <div className="{styles.userLink}">
//             <img 
//               className="{styles.avatar}"
//               src="https://cdn.dribbble.com/users/42578/avatars/"
//               alt="avatar" />
//             <a href="#user-url" className="{styles.username}">Дмитрий Гришин</a>
//           </div>
//           <span className="{styles.createdAt}">
//             <span className="{styles.publishedLabel}">опубликовано</span>
//              4 часа назад
//           </span>
//         </div>
//         <h2 className="{styles.title}">
//           <a href="#post-url" className="{styles.postLink}">
//             Следует отметить, что новая модель организационной деятельности Следует отметить, что новая модель организационной деятельности
//           </a>
//         </h2>
//       </div>

//       <div className="{styles.preview}">
//         <img className="{styles.previewImg}"
//           src="https://cdn.dribbble.com/users/42578/" />
//       </div>

//       <div className="{styles.menu}">
//         <button className="{styles.menuButton}">
//           <svg width="5" height="20" viewBox="0 0 5 20" fill="none" xmlns="https://">
//             <circle cx="2.5" cy="2.5" r="2.5" fill="#D9D9D9" />
//             <circle cx="2.5" cy="10" r="2.5" fill="#D9D9D9" />
//             <circle cx="2.5" cy="17.5" r="2.5" fill="#D9D9D9" />
//           </svg>
//         </button>
//       </div>
//       <div className="{styles.controls}">
//         <div className="{styles.karmaCounter}">
//           <button className="{styles.up}">
//             <svg>
//               <path />
//             </svg>
//           </button>
//           <span className="{styles.karmaValue}">123</span>
//           <button className="{styles.down}">
//             <svg className="{styles.down}">
//               <path />
//             </svg>
//           </button>
//         </div>

//         <button className="{styles.commentsButton}">
//           <svg>
//             <path />
//           </svg>
//           <span className="{commentsNumber}">13</span>
//         </button>

//         <div className="{styles.action}">
//           <button className="{styles.shareButton}">
//             <svg>
//               <path />
//             </svg>
//           </button>

//           <button className="{styles.saveButton}">
//             <svg>
//               <path />
//             </svg>
//           </button>
//         </div>
//       </div>
//     </li>
//   );
// } 