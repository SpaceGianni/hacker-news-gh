import styles from "./newsText.module.css";

export default function News(props: any) {
  return (
    <>
      <div className={styles.newsModule}>{props.news}</div>
    </>
  );
}
