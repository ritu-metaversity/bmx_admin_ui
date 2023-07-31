import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const sportDetailsApi = createApi({
  reducerPath: "sportDetailsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL_IP,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");
      headers.set("Authorization", `Bearer ${token}`);
      return headers;
    },
  }),
  endpoints: (build) => ({
    sportDetail: build.query({
      query: (body) => ({
        url: "/bmx/report/sport-details",
        method: "POST",
        body,
      }),
    })
    })
});

export const {useSportDetailQuery} = sportDetailsApi;
