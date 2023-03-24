import Pagination from "../../molecules/pagination/ML-pagination";
import styles from "./OR-footer.module.css";

export default function Footer({ array_of_pages }) {
  return (
    <>
      <div className={styles.footer}>
        <Pagination array_of_pages={array_of_pages}></Pagination>
      </div>
    </>
  );
}
