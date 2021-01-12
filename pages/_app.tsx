import { Provider } from 'react-redux';
import { IntlProvider } from 'react-intl';
import Head from 'next/head';
import configureApp from 'app/core/configs/configure-app';
import { ChakraProvider } from '@chakra-ui/react';
import messages from 'app/translations/fa.json';
export const { store, theme } = configureApp();

import 'app/assets/fonts/fontiran.css';
import 'styles/main.scss';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="viewport-fit=cover" />
      </Head>
      <Provider store={store}>
        <ChakraProvider theme={theme} resetCSS={true}>
          <IntlProvider locale="en" messages={messages} defaultLocale="fa">
            <Component {...pageProps} />
          </IntlProvider>
        </ChakraProvider>
      </Provider>
    </>
  );
}

export default MyApp;
