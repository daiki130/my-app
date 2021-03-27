import Head from "next/head";
import { Main } from "../components/main";
import { Footer } from "../components/Foooter";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>About Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Main page={"about"} />
      <Footer />
    </div>
  );
}
