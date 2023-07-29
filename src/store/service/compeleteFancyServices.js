import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const completeFancyApi = createApi({
  reducerPath: "completeFancyApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL_SHA,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");
      headers.set("Authorization", `Bearer ${token}`);
      return headers;
    },
  }),
  endpoints: (build) => ({
    completeFancy: build.query({
      query: (body) => ({
        url: "/bmx/completed-fancy",
        method: "POST",
        body,
      }),
    })
    })
});

export const {useCompleteFancyQuery} = completeFancyApi;
