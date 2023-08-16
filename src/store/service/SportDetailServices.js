import { createApi } from "@reduxjs/toolkit/dist/query/react";
import { dynamicBaseQuery } from "./dynamicBaseQuery";

export const sportDetailsApi = createApi({
  reducerPath: "sportDetailsApi",
  baseQuery: dynamicBaseQuery,
  endpoints: (build) => ({
    sportDetail: build.query({
      query: (body) => ({
        url: "/bmx/report/sport-details",
        method: "POST",
        body,
      }),
    }),
    rejectedBetDetail: build.query({
      query: (body) => ({
        url: "/bmx/rejected-and-cancle-bets",
        method: "POST",
        body,
      }),
    }),
    sessionFancyBetDetail: build.query({
      query: (body) => ({
        url: "/bmx/fancy-fetch-by-match-id",
        method: "POST",
        body,
      }),
    }),
    sportPlusMinus: build.query({
      query: (body) => ({
        url: "/bmx/report/match-and-fancy-plus-minus",
        method: "POST",
        body,
      }),
    }),
    searchUserDownline: build.query({
      query: (args) => {
        const { term } = args;
        return {
          url: `/user/search-user-downline?term=${term}&_type=${term}&q=${term}`,
          method: "POST",
        }
      },
    }),
  }),
});

export const {
  useSportDetailQuery,
  useRejectedBetDetailQuery,
  useLazySessionFancyBetDetailQuery,
  useSportPlusMinusQuery,
  useLazySearchUserDownlineQuery
} = sportDetailsApi;
