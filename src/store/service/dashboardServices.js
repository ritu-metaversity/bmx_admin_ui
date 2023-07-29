import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { Header } from "antd/es/layout/layout";

export const dashboardApi = createApi({
  reducerPath: "dashboardApi",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL_SID, 
    prepareHeaders:(headers)=>{
    const token = localStorage.getItem("token");
    headers.set('Authorization', `Bearer ${token}`);
    return headers
  } }),
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
