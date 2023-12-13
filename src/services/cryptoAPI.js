import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react"

const cryptoApiHeaders = {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_KEY,
    'X-RapidAPI-Host': process.env.REACT_APP_CRYPTO_RAPIDAPI_HOST,
}

const createRequest = (url) =>({url, headers: cryptoApiHeaders})

const baseUrl = process.env.REACT_APP_CRYPTO_API_URL ;

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`),
        }),
        getCryptoDetails: builder.query({
            query: (coinId) => createRequest(`/v2/coin/${coinId}`),
          }),
      
          getCryptoHistory: builder.query({
            query: ({ coinId, timeperiod }) => createRequest(`/v2/coin/${coinId}/history?timeperiod=${timeperiod}`),
          }),
    })
})

export const {
    useGetCryptosQuery,
    useGetCryptoDetailsQuery,
  useGetCryptoHistoryQuery,
} = cryptoApi;