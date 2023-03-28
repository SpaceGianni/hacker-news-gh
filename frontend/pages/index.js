import Header from "../app/components/organisms/OR-Header/OR-header.tsx";
import React, { useState, useEffect } from "react";
import NewsList from "./../app/components/organisms/OR-newsList/OR-newsList.tsx";
import Footer from "../app/components/organisms/OR-Footer/OR-footer.tsx";
import { deleteNews, getNews } from "../app/utils/news.services";
export default function Home() {


  const [siteTitle, setSiteTitle] = useState("HN feed");
  const [subtitleSite_part1, setSubtitleSite_part1] = useState("We");
  const [subtitleSite_part2, setSubtitleSite_part2] = useState("hacker news!");
  const [heart, setHeart] = useState("❤️");
  const [limit, setLimit] = useState(16);
  const [offset, setOffSet] = useState(0);
  const [news, setNews] = useState([]);

  useEffect(() => {
    console.log("news in UseEffct", news)
    getNews(offset, limit).then((news) => setNews(news));
  }, []);

  useEffect(() => {
    getNews(offset, limit).then((news) => setNews(news));
  }, [limit, offset]);

  const removeNews = async (_id) => {
    await deleteNews(_id);
    getNews(offset, limit).then((news) => setNews(news));
  };


  const news_per_page = 8;
  const newsPerPage = Math.ceil(news.length / news_per_page);
  const limit2 = newsPerPage;
  const [array_of_pages, setArray_of_pages] = useState([]);

  let element = 0;
  const createPages = () => {
    for (let i = 1; i <= limit2; i++) {
      element = element + 1;
      array_of_pages.push(element);
    }
    return array_of_pages;
  };

  let actual_page = 1;
  let array_positions = [];
  let elem = 0;
  const findNewsPositionPerPage = () => {
    for (let i = 0; i < 5; i++) {
      elem = (actual_page - 1) * news_per_page + i;
      array_positions.push(elem);
    }
    return array_positions;
  };

  createPages();
  findNewsPositionPerPage();



  let initialPosition = array_positions[0];
  let finalPosition = array_positions[array_positions.length - 1] + 1;

  const [finalArraywithNews, setFinalArraywithNews] = useState(
    news.slice(initialPosition, finalPosition)
  );

  return (
    <>
      <Header siteTitle={siteTitle} subtitleSite_part1={subtitleSite_part1} subtitleSite_part2={subtitleSite_part2} heart={heart} removeNews={removeNews}></Header>
      <NewsList news={news} setNews={setNews} limit={limit} offset={offset}></NewsList>
      <Footer array_of_pages={array_of_pages} limit={limit} setLimit={setLimit} offset={offset} setOffSet={setOffSet}></Footer>
    </>
  );
}
