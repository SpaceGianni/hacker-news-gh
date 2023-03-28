import styles from "./ML-pagination.module.css";
import React from "react";

export default function Pagination({
  array_of_pages,
  offset,
  setOffSet,
  limit,
  setLimit,
}) {
  return (
    <>
      <div className={styles.navigation}>
        <ul className={styles.pagination}>
          {array_of_pages.map((item, index) => (
            <li className={styles.pageItem} key={index}>
              <a className={styles.pageLink} href="#">
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
