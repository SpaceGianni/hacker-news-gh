"use client";

import React from "react";
import { useState, useEffect } from "react";
import { NewsInterface } from "../../../news.interface";
import News from "../../molecules/newsText/news";
import { getNews, deleteNews } from "../../../utils/news.services";
import styles from "./newsList.module.css";
import { TrashFill } from "react-bootstrap-icons";
import { FormatDate } from "../../../utils/daysJsFormat";

export default function NewsList() {
  const [news, setNews] = useState<NewsInterface[]>([]);

  const removeNews = (news: NewsInterface[], id: number) => {
    deleteNews(+id);
    setNews(
      news.filter((selectedNews: any) => {
        return selectedNews.id !== id;
      })
    );
  };

  useEffect(() => {
    getNews().then((news) => setNews(news));
  }, []);

  if (!news.length) {
    return <h1>News are loading...</h1>;
  }

  return (
    <>
      <div className={styles.newsList}>
        {news.map((oneNew, index) => (
          <News key={index + 1}>
            <h2>
              <a className={styles.newsTitle} href={oneNew.url} target="_blank">
                {oneNew.title}
              </a>
            </h2>
            <p className={styles.newsAuthor}>- {oneNew.author} -</p>
            <div className={styles.date}>
              <p>{FormatDate(oneNew.date)}</p>
            </div>

            <div
              className={styles.trashCan}
              onClick={() => removeNews(news, oneNew.id)}
            >
              <TrashFill color="RGB(229 21 74)" size={"2rem"} />
            </div>
          </News>
        ))}
      </div>
    </>
  );
}
