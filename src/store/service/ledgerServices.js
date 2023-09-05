import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const ledgerApi = createApi({
  reducerPath: "ledgerApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");
      headers.set("Authorization", `Bearer ${token}`);
      return headers;
    },
  }),
  endpoints: (build) => ({
    myLedger: build.query({
      query: (body) => ({
        url: "/bmx/report/get-my-ledger",
        method: "POST",
        body
      }),
    }),
    downlineLedger: build.query({
      query: (body) => ({
        url: "/bmx/report/get-ledger-by-user-type",
        method: "POST",
        body
      }),
    }),
    profitAndLossLedger: build.query({
      query: (body) => ({
        url: "/bmx/report/bmx-ledger-profit-loss",
        method: "POST",
        body
      }),
    }),
  }),
});

export const {useMyLedgerQuery,useDownlineLedgerQuery, useLazyProfitAndLossLedgerQuery} = ledgerApi;
