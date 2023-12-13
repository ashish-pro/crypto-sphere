import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {getCurrentDate,getDateTwoDaysAgo} from './dateConstants'

const apiKey = process.env.REACT_APP_NEWS_KEY;
const createRequest = (url) => ({ url});
const curDate = getCurrentDate();
const pastDate = getDateTwoDaysAgo();
const baseUrl = process.env.REACT_APP_NEWS_API_URL;

export const cryptoNewsApi = createApi({
  reducerPath: 'cryptoNewsApi',
  baseQuery: fetchBaseQuery({ baseUrl}),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({ count}) => createRequest(`/everything?q=Crypto&from=${curDate}&to=${pastDate}&sortBy=popularity&apiKey=${apiKey}&pageSize=${count}`),
    }),
  }),
});



// Exporting the query function to be used elsewhere
export const { useGetCryptoNewsQuery } = cryptoNewsApi;
