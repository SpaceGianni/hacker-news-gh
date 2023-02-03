import React from "react";
import styles from "./news.module.css";

export default function News({ children }: { children: React.ReactNode }) {
  return <div className={styles.newsModule}>{children}</div>;
}
