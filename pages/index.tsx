import Head from "next/head";
import Navbar from "../components/navbar";
import styles from "../styles/Home.module.css";

import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <Head>
        <title>Learn Anything</title>
        <meta name="description" content="Save your links/notes." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar route={router.route} />

      <main className={styles.main}>
        <h1 className={styles.title}>Learn Anything</h1>
        <h2 className="text-xl">Save your links/notes.</h2>

        {/* <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Save Links &rarr;</h2>
            <p>
              Pinboard / Raindrop but better. Save and retrieve links
              (bookmarks). Organize with tags (topics).
            </p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Track Your Knowledge &rarr;</h2>
            <p>
              Each tag of a link you add can be a topic. Each topic is knowledge
              that can be tracked like Goodreads tracks books.
            </p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/master/examples"
            className={styles.card}
          >
            <h2>Explore Topics &rarr;</h2>
            <p>See existing topics and users.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Login / Create User &rarr;</h2>
            <p>Get started by creating account or logging in.</p>
          </a>
        </div> */}
      </main>

      {/* <footer className={styles.footer}></footer> */}
    </div>
  );
}
