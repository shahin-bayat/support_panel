import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import userReducer from 'app/modules/user/store/user-slice';
import loadingSlice from 'app/modules/general/store/loading-slice';

const rootReducer = combineReducers({
  user: userReducer,
  loading: loadingSlice,
});

export default function createStore() {
  const store = configureStore({ reducer: rootReducer });

  return store;
}

export type RootState = ReturnType<typeof rootReducer>;
