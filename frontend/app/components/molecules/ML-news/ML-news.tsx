import styles from "./ML-newsText.module.css";
import { TrashFill } from "react-bootstrap-icons";

export default function News({ name, author, date, link }) {
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
          <p>{date}</p>
        </div>
        <div className={styles.trashCan}>
          <TrashFill color="RGB(229 21 74)" size={"2rem"} />
        </div>
      </div>
    </>
  );
}
