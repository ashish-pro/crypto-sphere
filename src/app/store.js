import { configureStore } from "@reduxjs/toolkit";
import { cryptoApi } from "../services/cryptoAPI";
import { cryptoNewsApi } from "../services/cryptoNewsAPI";
import {exchangeApi} from '../services/exchangeAPI'

export default configureStore({
  reducer: {
    [cryptoApi.reducerPath]: cryptoApi.reducer,
    [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
    [exchangeApi.reducerPath]: exchangeApi.reducer,
  },
  middleware: (getdefaultMiddleware) =>
    getdefaultMiddleware().concat([cryptoApi.middleware, cryptoNewsApi.middleware, exchangeApi.middleware ]),
});
