"use client";

import React from "react";
import styles from "./OR-news-List.module.css";
import News from "../../molecules/ML-news/ML-news";
import { NewsInterface } from "../../../news.interface";

export default function NewsList({ removeNews, news }) {
  if (!news.length) {
    return <h1>News are loading...</h1>;
  }

  return (
    <>
      <div className={styles.newsList}>
        {news.map((item, index) => (
          <News
            key={index + 1}
            title={item.title}
            author={item.author}
            date={item.date}
            url={item.url}
            removeNews={removeNews}
            _id={item._id}
          ></News>
        ))}
      </div>
    </>
  );
}
