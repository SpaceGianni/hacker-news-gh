import { TrashFill } from "react-bootstrap-icons";
import styles from "./at-button.module.css";

export default function Button(props: any) {
  return (
    <>
      <div className={styles.trashCan}>
        <TrashFill color="RGB(229 21 74)" size={"2rem"} />
      </div>
    </>
  );
}
