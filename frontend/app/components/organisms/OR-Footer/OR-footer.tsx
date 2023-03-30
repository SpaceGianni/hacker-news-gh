import Pagination from "../../molecules/pagination/ML-pagination";
import styles from "./OR-footer.module.css";

export default function Footer({
  array_of_pages,
  bringFirstPage,
  offset,
  setActualPagination,
  bringSecondPage,
  bringThirdPage,
  bringNextPage,
  bringPreviousPage,
}) {
  return (
    <>
      <div className={styles.footer}>
        <Pagination
          offset={offset}
          array_of_pages={array_of_pages}
          bringFirstPage={bringFirstPage}
          setActualPagination={setActualPagination}
          bringSecondPage={bringSecondPage}
          bringThirdPage={bringThirdPage}
          bringNextPage={bringNextPage}
          bringPreviousPage={bringPreviousPage}
        ></Pagination>
      </div>
    </>
  );
}
