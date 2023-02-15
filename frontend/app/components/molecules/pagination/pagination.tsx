import styles from "./pagination.module.css";
import title1Font from "../../atoms/title1-header-font/title1.font";
import React from "react";

export default function Pagination() {
  return (
    <>
      <div className={styles.navigation + " " + title1Font.className}>
        <ul className={styles.pagination}>
          <li className={styles.pageItem}>
            <a className={styles.pageLink} href="#">
              Previous
            </a>
          </li>
          <li className={styles.pageItem}>
            <a className={styles.pageLink} href="#">
              1
            </a>
          </li>
          <li className={styles.pageItem}>
            <a className={styles.pageLink} href="#">
              2
            </a>
          </li>
          <li className={styles.pageItem}>
            <a className={styles.pageLink} href="#">
              3
            </a>
          </li>
          <li className={styles.pageItem}>
            <a className={styles.pageLink} href="#">
              Next
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
