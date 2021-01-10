import configureStore from './configure-store';
import configureTheme from './configure-theme';

export default function configureApp() {
  const store = configureStore();
  const theme = configureTheme();

  return {
    store,
    theme,
  };
}
