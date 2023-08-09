import { createApi } from "@reduxjs/toolkit/dist/query/react";
import { dynamicBaseQuery } from "./dynamicBaseQuery";

export const eventDerailApi = createApi({
  reducerPath: "eventDerailApi",
  baseQuery: dynamicBaseQuery,
  endpoints: (build) => ({
    eventDetail: build.query({
      query: (id) => ({
        url: `/betfair_api/fancy/${id}`,
        method: "GET",
      }),
    })
  }),
});

export const {useEventDetailQuery } = eventDerailApi;
