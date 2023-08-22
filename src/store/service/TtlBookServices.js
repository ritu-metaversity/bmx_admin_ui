import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const ttlBookApi = createApi({
  reducerPath: "ttlBookApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");
      headers.set("Authorization", `Bearer ${token}`);
      return headers;
    },
  }),
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
