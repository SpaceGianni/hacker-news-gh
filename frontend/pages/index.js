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
  const [limit, setLimit] = useState(15);
  const [offset, setOffSet] = useState(0);
  const [news, setNews] = useState([]);
  const [array_of_pages, setArray_of_pages] = useState([1, 2, 3]);
  const [actualPagination, setActualPagination] = useState({
    offset: offset,
    limit: limit,
  });

  useEffect(() => {
    getNews(offset, limit).then((news) => setNews(news));
  }, []);

  useEffect(() => {
    getNews(offset, limit).then((news) => setNews(news));
  }, [limit, offset]);

  const removeNews = async (_id) => {
    await deleteNews(_id);
    getNews(offset, limit).then((news) => setNews(news));
  };

  const pages = Math.ceil(news.length / limit);

  async function bringFirstPage() {
    try {
      setOffSet(0);
      setLimit(15);
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
      setLimit(15);
      setActualPagination({
        offset: limit,
        limit: 15,
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
      setLimit(15);
      setActualPagination({
        offset: limit * 2,
        limit: 15,
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
        setLimit(15);
        setActualPagination({
          offset: 0,
          limit: 15,
        });
        alert("No more news available");
      } else {
        setOffSet(actualPagination.offset + 15);
        setLimit(actualPagination.limit);
        setActualPagination({
          offset: actualPagination.offset + 15,
          limit: actualPagination.limit,
        });

      }
      await getNews(offset, limit);
    } catch (error) {
      console.log(error);
      throw new Error("Function bringNextPage is not implemented.");
    }
  }

  async function bringPreviousPage() {
    try {
      if (actualPagination.offset < 15) {
        setOffSet(0);
        setLimit(15);
        setActualPagination({
          offset: 0,
          limit: 15,
        });
        alert("No more news available");
      } else {
        setOffSet(actualPagination.offset - 15);
        setLimit(actualPagination.limit);
        setActualPagination({
          offset: actualPagination.offset - 15,
          limit: actualPagination.limit,
        });
      }
      await getNews(offset, limit);
    } catch (error) {
      console.log(error);
      throw new Error("Function bringPreviousPage is not implemented.");
    }
  }

  return (
    <>
      <Header siteTitle={siteTitle} subtitleSite_part1={subtitleSite_part1} subtitleSite_part2={subtitleSite_part2} heart={heart} removeNews={removeNews}></Header>
      <NewsList news={news} setNews={setNews} limit={limit} offset={offset} removeNews={removeNews}></NewsList>
      <Footer array_of_pages={array_of_pages} limit={limit} setLimit={setLimit} offset={offset} setOffSet={setOffSet} bringFirstPage={bringFirstPage} setActualPagination={setActualPagination} bringSecondPage={bringSecondPage} bringThirdPage={bringThirdPage} bringNextPage={bringNextPage} bringPreviousPage={bringPreviousPage}></Footer>
    </>
  );
}
