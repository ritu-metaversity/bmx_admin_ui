import { createApi } from "@reduxjs/toolkit/dist/query/react";
import { dynamicBaseQuery } from "./dynamicBaseQuery";

export const ledgerApi = createApi({
  reducerPath: "ledgerApi",
  baseQuery: dynamicBaseQuery,
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
