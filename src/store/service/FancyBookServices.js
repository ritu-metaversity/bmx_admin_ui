import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const fancyBookApi = createApi({
  reducerPath: "fancyBookApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");
      headers.set("Authorization", `Bearer ${token}`);
      return headers;
    },
  }),
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