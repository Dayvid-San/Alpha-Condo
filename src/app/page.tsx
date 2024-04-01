import Navbars from "./components/navbars";
import styles from "./page.module.scss";


export default function Home() {
  return (
    <main className={styles.main}>
      <Navbars />
    </main>
  );
}
