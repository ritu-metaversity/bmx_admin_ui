import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const userlistApi = createApi({
  reducerPath: "userlistApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");
      headers.set("Authorization", `Bearer ${token}`);
      return headers;
    },
  }),
  endpoints: (build) => ({
    userList: build.query({
      query: (body) => ({
        url: "/user/child-list-active-user",
        method: "POST",
        body,
      }),
    }),
    odsPnl: build.query({
      query: (body) => ({
        url: "/enduser/user-odds-pnl",
        method: "POST",
        body
      }),
    }),
    fancyPnl: build.query({
      query: (body) => ({
        url: "/enduser/user-fancy-pnl",
        method: "POST",
        body
      }),
    }),
  }),
});

export const { useUserListQuery, useOdsPnlQuery, useFancyPnlQuery} = userlistApi;
