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

export default function Home() {
  return (<>
    <Layout>
      <Head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
      </Head>
      <Header>
        <HeaderTitles
          title1={siteTitle}
          title2={subtitleSite_part1 + " " + heart + " " + subtitleSite_part2}>
        </HeaderTitles>
      </Header>
      <div>
        <NewsList></NewsList>
      </div>



    </Layout>
  </>);
}
