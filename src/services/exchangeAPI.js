
import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react"

const exchangeApiHeaders = {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_KEY,
    'X-RapidAPI-Host': process.env.EACT_APP_EXCHANGE_HOST
}

const createRequest = (url) =>({url, headers: exchangeApiHeaders})

const baseUrl = process.env.REACT_APP_EXCHANGE_API_URL ;

export const exchangeApi = createApi({
    reducerPath: 'exchangeApi',
    baseQuery: fetchBaseQuery({baseUrl}),
    endpoints: (builder) => ({
        getExchanges: builder.query({
            query: () => createRequest('/exchanges'),
        }),
        
    })
})

export const {
    useGetExchangesQuery
} = exchangeApi;