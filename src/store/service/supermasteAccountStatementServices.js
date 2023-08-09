import { createApi } from "@reduxjs/toolkit/dist/query/react";
import { dynamicBaseQuery } from "./dynamicBaseQuery";

export const supermasteAccountStatementApi = createApi({
  reducerPath: "supermasteAccountStatementApi",
  baseQuery: dynamicBaseQuery,
  endpoints: (build) => ({
    accountstatement: build.query({
      query: (body) => ({
        url: "/report/account-statement",
        method: "POST",
        body,
      }),
    }),
    ProfitLoss: build.query({
      query: (body) => ({
        url: "/report/profit-loss-match-wise",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const {useAccountstatementQuery, useLazyProfitLossQuery } = supermasteAccountStatementApi;
