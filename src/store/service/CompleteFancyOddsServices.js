import { createApi } from "@reduxjs/toolkit/dist/query/react";
import { dynamicBaseQuery } from "./dynamicBaseQuery";

export const complteFancyOddsClientsApi = createApi({
  reducerPath: "complteFancyOddsClientsApi",
  baseQuery: dynamicBaseQuery,
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
