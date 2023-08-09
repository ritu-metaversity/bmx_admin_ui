import { createApi } from "@reduxjs/toolkit/dist/query/react";
import { dynamicBaseQuery } from "./dynamicBaseQuery";

export const completeFancyApi = createApi({
  reducerPath: "completeFancyApi",
  baseQuery: dynamicBaseQuery,
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
