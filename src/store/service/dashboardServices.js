import { createApi } from "@reduxjs/toolkit/dist/query/react";
import { dynamicBaseQuery } from "./dynamicBaseQuery";

export const dashboardApi = createApi({
  reducerPath: "dashboardApi",
  baseQuery: dynamicBaseQuery,
  endpoints: (build) => ({
    dashboard: build.query({
      query: () => ({
        url: "/bmx/user/bmx-dashboard",
        method: "POST",
      }),
    }),
  }),
});

export const {useDashboardQuery } = dashboardApi;
