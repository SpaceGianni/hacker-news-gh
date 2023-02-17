import Head from "next/head";
import Layout, {
  siteTitle,
  subtitleSite_part1,
  subtitleSite_part2,
  heart,

} from "../app/components/templates/layout";
import Header from "../app/components/organisms/header/header.tsx";
import HeaderTitles from "../app/components/molecules/headerTitles/headerTitles.tsx";
import NewsList from "../app/components/organisms/newsList/newsList.tsx";
import Pagination from "../../frontend/app/components/molecules/pagination/pagination.tsx";
import React, { useState, useEffect } from "react";
import { deleteNews, getNews } from "../app/utils/news.services.tsx";

export default function Home() {
  const [limit, setLimit] = useState(16);
  const [offset, setOffSet] = useState(0);
  const [news, setNews] = useState([]);

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


  return (<>
    <Layout>
      <Head>
      </Head>
      <Header>
        <HeaderTitles
          title1={siteTitle}
          title2={subtitleSite_part1 + " " + heart + " " + subtitleSite_part2}>
        </HeaderTitles>
      </Header>
      <div>
        <NewsList limit={limit} offset={offset} news={news} setNews={setNews} removeNews={removeNews}></NewsList>
        <Pagination limit={limit} setLimit={setLimit} offset={offset} setOffSet={setOffSet}></Pagination>
      </div>
    </Layout>
  </>);
}
