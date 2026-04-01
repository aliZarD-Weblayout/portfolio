import * as React from "react";
import styles from "./header.css";
import { ThreadTitle } from "./ThreadTitle/ThreadTitle";
import { SearchBlock } from "./SearchBlock/SearchBlock";
import { SortBlock } from "./SortBlock/SortBlock";


export function Header() {
  return (
    <header className={styles.header}>
      <SearchBlock />
      <ThreadTitle />
      <SortBlock />
    </header>
  );
}