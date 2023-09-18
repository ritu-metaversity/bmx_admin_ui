import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const casinoDetailsApi = createApi({
  reducerPath: "casinoDetailsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");
      headers.set("Authorization", `Bearer ${token}`);
      return headers;
    },
  }),
  endpoints: (build) => ({
    rouletteDetails: build.query({
      query: (body) => ({
        url: `/bmx/report/casino-plus-minus`,
        method: "POST",
        body
      }),
    }),
    roulettePlusMinus: build.query({
      query: (body) => ({
        url: `/bmx/report/casino-plus-minus-real`,
        method: "POST",
        body
      }),
    }),
    allGame: build.query({
      query: (body) => ({
        url: `/bmx/report/casino-round-wise-pnl`,
        method: "POST",
        body
      }),
    }),
    casinoBetList: build.query({
      query: (body) => ({
        url: `/bmx/report/casino-round-wise-bet-list`,
        method: "POST",
        body
      }),
    }),
  }),
});

export const {useRouletteDetailsQuery, useRoulettePlusMinusQuery, useAllGameQuery, useCasinoBetListQuery } = casinoDetailsApi;