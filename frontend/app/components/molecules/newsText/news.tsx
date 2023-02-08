import styles from "./newsText.module.css";
import title2Font from "../../atoms/newsTitle-body-font/newsTitle.font";

export default function News({ children }: any) {
  return (
    <>
      <div className={title2Font.className + " " + styles.newsTexts}>
        {children}
      </div>
    </>
  );
}
