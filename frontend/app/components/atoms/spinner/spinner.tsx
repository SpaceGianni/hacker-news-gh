import styles from "./spinner.module.css";

export default function Spinner({ message }: { message: string }) {
  return <h1 className={styles.spinner}>{message}</h1>;
}
