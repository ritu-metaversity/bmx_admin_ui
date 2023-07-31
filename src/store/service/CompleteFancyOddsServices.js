import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const complteFancyOddsClientsApi = createApi({
  reducerPath: "complteFancyOddsClientsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL_SID,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");
      headers.set("Authorization", `Bearer ${token}`);
      return headers;
    },
  }),
  endpoints: (build) => ({
    complteFancyOddsClients: build.query({
      query: (body) => ({
        url: "/bmx/report/completed-fancy-odds-clients",
        method: "POST",
        body,
      }),
    })
    })
});

export const {useComplteFancyOddsClientsQuery} = complteFancyOddsClientsApi;
