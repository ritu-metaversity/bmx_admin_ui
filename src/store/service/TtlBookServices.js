import { createApi } from "@reduxjs/toolkit/dist/query/react";
import { dynamicBaseQuery } from "./dynamicBaseQuery";

export const ttlBookApi = createApi({
  reducerPath: "ttlBookApi",
  baseQuery: dynamicBaseQuery,
  endpoints: (build) => ({
    ttlBook: build.query({
      query: (body) => ({
        url: `/bmx/ttl-book`,
        method: "POST",
        body
      }),
    }),
    // ttlMuBook: build.mutation({
    //   query: (body) => ({
    //     url: `/bmx/ttl-book`,
    //     method: "POST",
    //     body
    //   }),
    // }),
  }),
});

export const {useLazyTtlBookQuery} = ttlBookApi;
