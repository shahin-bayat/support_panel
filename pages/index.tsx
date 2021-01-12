import Head from 'next/head';
import { ReactElement } from 'react';
import { Button } from '@chakra-ui/react';
export default function Home(): ReactElement {
  return (
    <div>
      <Head>
        <title>Support Panel</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Support Panel</h1>
      </main>
    </div>
  );
}
