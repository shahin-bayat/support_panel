import { Provider } from 'react-redux';
import configureApp from 'app/core/configs/configure-app';

export const { store } = configureApp();

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
