import Axios from 'axios';
import { setLoading } from 'app/modules/general/store/loading-slice';
import { store } from 'pages/_app';

const api = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  withCredentials: true,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(
  function (config) {
    store.dispatch(setLoading(true));
    return config;
  },
  function (error) {
    store.dispatch(setLoading(false));
    return Promise.reject(error);
  },
);
api.interceptors.response.use(
  function (response) {
    store.dispatch(setLoading(false));
    return response;
  },
  function (error) {
    store.dispatch(setLoading(false));
    store.dispatch(setError({ type: error.response.data.apiResultCode, message: error.response.data.message }));
    return Promise.reject(error);
  },
);

export default api;
