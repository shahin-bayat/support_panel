import { Provider } from 'react-redux';
import Head from 'next/head';
import configureApp from 'app/core/configs/configure-app';
import { ChakraProvider } from '@chakra-ui/react';

export const { store, theme } = configureApp();

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="viewport-fit=cover" />
      </Head>
      <Provider store={store}>
        <ChakraProvider theme={theme} resetCSS={true}>
          <Component {...pageProps} />
        </ChakraProvider>
      </Provider>
    </>
  );
}

export default MyApp;
