import styles from "./newsText.module.css";

export default function News({ children }: any) {
  return (
    <>
      <div className={styles.newsModule}>{children}</div>
    </>
  );
}
