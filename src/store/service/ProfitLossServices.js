import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const profitLossApi = createApi({
  reducerPath: "profitLossApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL_SID,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");
      headers.set("Authorization", `Bearer ${token}`);
      return headers;
    },
  }),
  endpoints: (build) => ({
    profitLoss: build.query({
      query: (body) => ({
        url: `/bmx/profit-loss`,
        method: "POST",
        body
      }),
    })
  }),
});

export const {useProfitLossQuery} = profitLossApi;
