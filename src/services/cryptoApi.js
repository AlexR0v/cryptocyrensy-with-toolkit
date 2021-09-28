import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders = {
  'x-rapidapi-host': process.env.REACT_APP_CRYPTO_RAPIDAPI_HOST,
  'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY
}

const createReq = (url) => ({ url, headers: cryptoApiHeaders })

export const cryptoApi = createApi({
    reducerPath: 'crypto',
    baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_CRYPTO_API_URL }),
    endpoints: (builder) => ({
      getCryptos: builder.query({
        query: (count) => createReq(`/coins?limit=${count}`),
      }),
      getExchanges: builder.query({
        query: () => createReq('/exchanges'),
      }),
      getCryptoDetails: builder.query({
        query: (coinId) => createReq(`/coin/${coinId}`),
      }),
      getCryptoHistory: builder.query({
        query: ({ coinId, timeperiod }) => createReq(`coin/${coinId}/history/${timeperiod}`),
      }),
    })
  }
)

export const {
  useGetCryptosQuery,
  useGetCryptoDetailsQuery,
  useGetExchangesQuery,
  useGetCryptoHistoryQuery
} = cryptoApi
