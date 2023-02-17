import styles from "./pagination.module.css";
import title1Font from "../../atoms/title1-header-font/title1.font";
import React, { useState } from "react";
import { getNews } from "../../../utils/news.services";

export default function Pagination({
  offset,
  setOffSet,
  limit,
  setLimit,
}: {
  offset: number;
  setOffSet: Function;
  limit: number;
  setLimit: Function;
}) {
  const [actualPagination, setActualPagination] = useState({
    offset: offset,
    limit: limit,
  });

  async function bringPreviousPage() {
    try {
      if (actualPagination.offset < 16) {
        setOffSet(0);
        setLimit(16);
        setActualPagination({
          offset: 0,
          limit: 16,
        });
        alert("No more news available");
      } else {
        setOffSet(actualPagination.offset - 16);
        setLimit(actualPagination.limit);
        setActualPagination({
          offset: actualPagination.offset - 16,
          limit: actualPagination.limit,
        });
      }
      await getNews(offset, limit);
    } catch (error) {
      console.log(error);
      throw new Error("Function bringPreviousPage is not implemented.");
    }
  }

  async function bringFirstPage() {
    try {
      setOffSet(0);
      setLimit(16);
      setActualPagination({
        offset: 0,
        limit: 16,
      });
      await getNews(offset, limit);
    } catch (error) {
      console.log(error);
      console.log("Function bringFirstPage is not implemented.");
    }
  }

  async function bringSecondPage() {
    try {
      setOffSet(limit);
      setLimit(16);
      setActualPagination({
        offset: limit,
        limit: 16,
      });
      await getNews(offset, limit);
    } catch (error) {
      console.log(error);
      throw new Error("Function bringSecondPage is not implemented.");
    }
  }

  async function bringThirdPage() {
    try {
      setOffSet(limit * 2);
      setLimit(16);
      setActualPagination({
        offset: limit * 2,
        limit: 16,
      });
      await getNews(offset, limit);
    } catch (error) {
      console.log(error);
      throw new Error("Function bringThirdPage is not implemented.");
    }
  }

  async function bringNextPage() {
    try {
      if (offset > 64) {
        setOffSet(0);
        setLimit(16);
        setActualPagination({
          offset: 0,
          limit: 16,
        });
        alert("No more news available");
      } else {
        setOffSet(actualPagination.offset + 16);
        setLimit(actualPagination.limit);
        setActualPagination({
          offset: actualPagination.offset + 16,
          limit: actualPagination.limit,
        });
      }
      await getNews(offset, limit);
    } catch (error) {
      console.log(error);
      throw new Error("Function bringNextPage is not implemented.");
    }
  }

  return (
    <>
      <div className={styles.navigation + " " + title1Font.className}>
        <ul className={styles.pagination}>
          <li className={styles.pageItem} onClick={() => bringPreviousPage()}>
            <a className={styles.pageLink} href="/">
              Previous
            </a>
          </li>
          <li className={styles.pageItem} onClick={() => bringFirstPage()}>
            <a className={styles.pageLink} href="/">
              1
            </a>
          </li>
          <li className={styles.pageItem} onClick={() => bringSecondPage()}>
            <a className={styles.pageLink} href="/">
              2
            </a>
          </li>
          <li className={styles.pageItem} onClick={() => bringThirdPage()}>
            <a className={styles.pageLink} href="/">
              3
            </a>
          </li>
          <li className={styles.pageItem} onClick={() => bringNextPage()}>
            <a className={styles.pageLink} href="/">
              Next
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
