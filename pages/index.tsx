import Head from 'next/head';
import { ReactElement } from 'react';
import styles from '../styles/Home.module.css';

export default function Home(): ReactElement {
  return (
    <div className={styles.container}>
      <Head>
        <title>Support Panel</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Support Panel</h1>
      </main>
    </div>
  );
}
