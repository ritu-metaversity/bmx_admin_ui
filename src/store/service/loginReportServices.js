import { createApi } from "@reduxjs/toolkit/dist/query/react";
import { dynamicBaseQuery } from "./dynamicBaseQuery";

export const loginReportApi = createApi({
  reducerPath: "loginReportApi",
  baseQuery: dynamicBaseQuery,
  endpoints: (build) => ({
    loginReport: build.query({
      keepUnusedDataFor: 0,
      query: (body) => ({
        url: "/util/login-history-report",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useLoginReportQuery } = loginReportApi;
