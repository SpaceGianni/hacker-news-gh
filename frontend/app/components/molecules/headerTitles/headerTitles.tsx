import { inspect } from "util";
import title1Font from "../../atoms/title1-header-font/title1.font";
import title2Font from "../../atoms/title2-header-font/title2-font";
import styles from "./headerTitles.module.css";

export default function HeaderTitles(props: any) {
  console.log(props);

  return (
    <>
      <h2 className={title1Font.className + " " + styles.title1}>
        {props.title1}
      </h2>
      <h3 className={title2Font.className + " " + styles.title2}>
        {props.title2}
      </h3>
    </>
  );
}
