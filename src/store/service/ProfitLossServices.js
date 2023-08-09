import { createApi } from "@reduxjs/toolkit/dist/query/react";
import { dynamicBaseQuery } from "./dynamicBaseQuery";

export const profitLossApi = createApi({
  reducerPath: "profitLossApi",
  baseQuery: dynamicBaseQuery,
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
