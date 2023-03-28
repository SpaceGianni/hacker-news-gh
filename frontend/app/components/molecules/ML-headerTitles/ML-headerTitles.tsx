import styles from "./ML-headerTitles.module.css";

export default function HeaderTitles({
  siteTitle,
  subtitleSite_part1,
  subtitleSite_part2,
  heart,
}) {
  return (
    <>
      <h2 className={styles.title1}>{siteTitle}</h2>
      <div className={styles.container}>
        <h3 className={styles.title2}>{subtitleSite_part1}</h3>
        <div className={styles.heart}>{heart}</div>
        <h3 className={styles.title2}>{subtitleSite_part2}</h3>
      </div>
    </>
  );
}
