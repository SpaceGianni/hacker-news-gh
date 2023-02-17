"use client";

import React from "react";
import News from "../../molecules/newsText/news";
import styles from "./newsList.module.css";
import { TrashFill } from "react-bootstrap-icons";
import { newConvertDate } from "../../../utils/daysJsFormat";
import { NewsInterface } from "../../../news.interface";

export default function NewsList({
  news,
  removeNews,
}: {
  limit: number;
  offset: number;
  news: NewsInterface[];
  setNews: Function;
  removeNews: Function;
}) {
  if (!news.length) {
    return <h1>News are loading...</h1>;
  }

  return (
    <>
      <div className={styles.newsList}>
        {news.map((oneNew, index) => (
          <News key={index + 1}>
            <h2 className={styles.newsTitle}>
              <a className={styles.newsTitle} href={oneNew.url} target="_blank">
                {oneNew.title}
              </a>
            </h2>
            <p className={styles.newsAuthor}>- {oneNew.author} -</p>
            <div className={styles.date}>
              <p>{newConvertDate(oneNew.date)}</p>
            </div>
            <div
              className={styles.trashCan}
              onClick={() => removeNews(oneNew._id)}
            >
              <TrashFill color="RGB(229 21 74)" size={"2rem"} />
            </div>
          </News>
        ))}
      </div>
    </>
  );
}
