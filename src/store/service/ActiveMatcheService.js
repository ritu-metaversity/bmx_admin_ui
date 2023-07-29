import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const activeMatchesApi = createApi({
  reducerPath: "activeMatchesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://oddsapi.247idhub.com",
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");
      headers.set("Authorization", `Bearer ${token}`);
      return headers;
    },
  }),
  endpoints: (build) => ({
    activeMatch: build.query({
      query: () => ({
        url: "/betfair_api/active_match/4",
        method: "GET",
      }),
    })
  }),
});

export const {useActiveMatchQuery} = activeMatchesApi;
