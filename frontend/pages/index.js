import Header from "../app/components/organisms/OR-Header/OR-header.tsx";
import React, { useState, useEffect } from "react";
import NewsList from "./../app/components/organisms/OR-newsList/OR-newsList.tsx";
import Footer from "../app/components/organisms/OR-Footer/OR-footer.tsx";

export default function Home() {
  const [siteTitle, setSiteTitle] = useState("HN feed");
  const [subtitleSite_part1, setSubtitleSite_part1] = useState("We");
  const [subtitleSite_part2, setSubtitleSite_part2] = useState("hacker news!");
  const [heart, setHeart] = useState("❤️");
  const [news, setNews] = useState([
    {
      name: "1- Rhaenyra",
      author: "1cuevas",
      date: "23 - 22 - 23",
      link: "www.evamago.com",
    },
    {
      name: "2- Danearys",
      author: "2cuerpo",
      date: "11 - 11 - 11",
      link: "www.evamago.com",
    },
    {
      name: "3- Eva",
      author: "3montañas",
      date: "08 - 08 - 08",
      link: "www.evamago.com",
    },
    {
      name: "4- Giannina",
      author: "4proceso",
      date: "11 - 13 - 7",
      link: "www.evamago.com",
    },
    {
      name: "5- Rhaenyra",
      author: "5cuevas",
      date: "23 - 22 - 23",
      link: "www.evamago.com",
    },
    {
      name: "6- Danearys",
      author: "6cuerpo",
      date: "11 - 11 - 11",
      link: "www.evamago.com",
    },
    {
      name: "7- Eva",
      author: "7montañas",
      date: "08 - 08 - 08",
      link: "www.evamago.com",
    },
    {
      name: "Giannina",
      author: "8proceso",
      date: "11 - 13 - 7",
      link: "www.evamago.com",
    },
    {
      name: "8-Rhaenyra",
      author: "9cuevas",
      date: "23 - 22 - 23",
      link: "www.evamago.com",
    },
    {
      name: "9- Danearys",
      author: "10cuerpo",
      date: "11 - 11 - 11",
      link: "www.evamago.com",
    },
    {
      name: "10- Eva",
      author: "11montañas",
      date: "08 - 08 - 08",
      link: "www.evamago.com",
    },
  ]);

  const news_per_page = 8;
  const newsPerPage = Math.ceil(news.length / news_per_page);
  const limit = newsPerPage;
  const [array_of_pages, setArray_of_pages] = useState([]);

  let element = 0;
  const createPages = () => {
    for (let i = 1; i <= limit; i++) {
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

  const [finalArraywithNews, setFinalArraywithNews] = useState([]);

  let initialPosition = array_positions[0];
  let finalPosition = array_positions[array_positions.length - 1] + 1;

  function createArrayOfNews() {
    setFinalArraywithNews(news.slice(initialPosition, finalPosition));
    return
  }


  useEffect(() => {
    createPages();
    findNewsPositionPerPage();
    createArrayOfNews()

  });

  useEffect(() => {

  }, finalArraywithNews)

  return (
    <>
      <Header siteTitle={siteTitle} subtitleSite_part1={subtitleSite_part1} subtitleSite_part2={subtitleSite_part2} heart={heart}></Header>
      <NewsList finalArraywithNews={finalArraywithNews}></NewsList>
      <Footer array_of_pages={array_of_pages}></Footer>
    </>
  );
}
