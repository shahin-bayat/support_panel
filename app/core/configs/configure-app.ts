import configureStore from './configure-store';

export default function configureApp() {
  const store = configureStore();

  return {
    store,
  };
}
