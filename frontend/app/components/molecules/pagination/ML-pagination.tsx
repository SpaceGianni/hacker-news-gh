import styles from "./ML-pagination.module.css";
import React from "react";

export default function Pagination({
  array_of_pages,
  setActualPagination,
  bringFirstPage,
  offset,
  setOffSet,
  limit,
  setLimit,
  bringSecondPage,
  bringThirdPage,
  bringNextPage,
  bringPreviousPage,
}) {
  return (
    <>
      <div className={styles.navigation}>
        <ul className={styles.pagination}>
          {offset === 0 ? (
            <>
              <li className={styles.pageItem} onClick={() => bringFirstPage()}>
                <a className={styles.pageLink} href="#">
                  1
                </a>
              </li>
            </>
          ) : (
            <li className={styles.pageItem} onClick={() => bringPreviousPage()}>
              <a className={styles.pageLink} href="#">
                Previous
              </a>
            </li>
          )}
          <li className={styles.pageItem} onClick={() => bringSecondPage()}>
            <a className={styles.pageLink} href="#">
              2
            </a>
          </li>
          <li className={styles.pageItem} onClick={() => bringThirdPage()}>
            <a className={styles.pageLink} href="#">
              3
            </a>
          </li>
          {offset !== 64 && (
            <li className={styles.pageItem} onClick={() => bringNextPage()}>
              <a className={styles.pageLink} href="#">
                Next
              </a>
            </li>
          )}
        </ul>
      </div>
    </>
  );
}
