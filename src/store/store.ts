import {configureStore} from '@reduxjs/toolkit';
import productsApi from './api/productsSlice';
import userSlice from './user/userSlice';
import reactotonConfiq from '../../ReactotronConfig';
import log from './middleware/log/logger';
// import loadInitialState from './middleware/initilaState/loadInitilaState';
import httpStatusCodeApi from './api/httpStatusCodeSlice';
import usersApi from './api/usersApiSlice';

const store = configureStore({
  reducer: {
    user: userSlice,
    [productsApi.reducerPath]: productsApi.reducer,
    [httpStatusCodeApi.reducerPath]: httpStatusCodeApi.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
  },
  middleware: getDefaultMiddleware => {
    return getDefaultMiddleware()
      .concat(productsApi.middleware)
      .concat(httpStatusCodeApi.middleware);
    // .concat(log);
  },
  devTools: true,
  enhancers: getDefaultEnhancers => {
    return getDefaultEnhancers().concat(reactotonConfiq().createEnhancer());
  },
});

export default store;

export type AppStore = typeof store;
export type AppDispatch = typeof store.dispatch;
export type AppRootState = ReturnType<typeof store.getState>;
