import styles from "./ML-newsText.module.css";
import { TrashFill } from "react-bootstrap-icons";
import { newConvertDate } from "../../../utils/daysJsFormat";
import { NewsInterface } from "../../../news.interface";

export default function News({ name, author, date, link, removeNews, key }) {
  return (
    <>
      <div className={styles.newsTexts}>
        <h2>
          <a className={styles.newsTitle} href={link} target="_blank">
            {name}
          </a>
        </h2>
        <p className={styles.newsAuthor}>- {author} -</p>
        <div className={styles.date}>
          <p>{newConvertDate(date)}</p>
        </div>
        <div className={styles.trashCan} onClick={() => removeNews(key)}>
          <TrashFill size={"2rem"} />
        </div>
      </div>
    </>
  );
}
