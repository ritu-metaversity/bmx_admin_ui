import { createApi } from "@reduxjs/toolkit/dist/query/react";
import { dynamicBaseQuery } from "./dynamicBaseQuery";

export const transectionApi = createApi({
  reducerPath: "transectionApi",
  baseQuery: dynamicBaseQuery,
  endpoints: (build) => ({
    filterbyClient: build.query({
      query: (body) => ({
        url: `/bmx/filter-by-client-cash-transection`,
        method: "POST",
        body
      }),
    }),
  }),
});

export const {useFilterbyClientQuery} = transectionApi;