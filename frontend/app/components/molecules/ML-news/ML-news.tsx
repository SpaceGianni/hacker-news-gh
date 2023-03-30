import styles from "./ML-newsText.module.css";
import { TrashFill } from "react-bootstrap-icons";
import { newConvertDate } from "../../../utils/daysJsFormat";

export default function News({ title, author, date, url, removeNews, _id }) {
  return (
    <>
      <div className={styles.newsTexts}>
        <a className={styles.url} href={url} target="_blank">
          <h2>
            <p className={styles.newsTitle}>{title}</p>
          </h2>
          <p className={styles.newsAuthor}>- {author} -</p>
          <div className={styles.date}>
            <p>{newConvertDate(date)}</p>
          </div>
        </a>
        <div className={styles.trashCan} onClick={() => removeNews(_id)}>
          <TrashFill size={"2rem"} />
        </div>
      </div>
    </>
  );
}
