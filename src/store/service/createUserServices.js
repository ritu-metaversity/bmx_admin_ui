import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const createUserApi = createApi({
  reducerPath: "createUserApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL_SID,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");
      headers.set("Authorization", `Bearer ${token}`);
      return headers;
    },
  }),
  endpoints: (build) => ({
    // createUser: build.mutation({
    //   query: (body) => ({
    //     url: "/bets/odds-pnl",
    //     method: "POST",
    //     body
    //   }),
    // }),
    createUserData: build.query({
      query: (body) => ({
        url: "/bmx/user/get-user-data-for-create-user",
        method: "POST",
        body
      }),
    }),
  }),
});

export const {useCreateUserDataQuery} = createUserApi;
