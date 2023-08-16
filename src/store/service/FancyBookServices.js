import { createApi } from "@reduxjs/toolkit/dist/query/react";
import { dynamicBaseQuery } from "./dynamicBaseQuery";

export const fancyBookApi = createApi({
  reducerPath: "fancyBookApi",
  baseQuery: dynamicBaseQuery,
  endpoints: (build) => ({
    fancyBook: build.query({
      query: (body) => ({
        url: `/bets/fancy-book`,
        method: "POST",
        body
      }),
    })
  }),
});

export const {useFancyBookQuery } = fancyBookApi;