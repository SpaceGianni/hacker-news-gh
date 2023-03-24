"use client";

import React from "react";
import styles from "./OR-news-List.module.css";
import News from "../../molecules/ML-news/ML-news";

export default function NewsList({ finalArraywithNews }) {
  if (!finalArraywithNews.length) {
    return <h1>News are loading...</h1>;
  }

  return (
    <>
      <div className={styles.newsList}>
        {finalArraywithNews.map((item, index) => (
          <News
            key={index}
            name={item.name}
            author={item.author}
            date={item.date}
            link={item.link}
          ></News>
        ))}
      </div>
    </>
  );
}
