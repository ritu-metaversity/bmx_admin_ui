import { createApi } from "@reduxjs/toolkit/dist/query/react";
import { dynamicBaseQuery } from "./dynamicBaseQuery";

export const oddsPnlApi = createApi({
  reducerPath: "oddsPnlApi",
  baseQuery: dynamicBaseQuery,
  endpoints: (build) => ({
    oddsPnl: build.mutation({
      query: (body) => ({
        url: "/bets/odds-pnl",
        method: "POST",
        body
      }),
    }),
    oddsQuPnl: build.query({
      query: (body) => ({
        url: "/bets/odds-pnl",
        method: "POST",
        body
      }),
    }),
  }),
});

export const {useOddsPnlMutation, useOddsQuPnlQuery} = oddsPnlApi;
