import React from "react";
import styles from "./header.module.css";

export default function Header({ children }: { children: React.ReactNode }) {
  return <div className={styles.header}>{children}</div>;
}
