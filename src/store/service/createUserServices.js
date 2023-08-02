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
    createUserData: build.query({
      query: (body) => ({
        url: "/bmx/user/get-user-data-for-create-user",
        method: "POST",
        body
      }),
    }),
    createUser: build.mutation({
      query: (body) => ({
        url: "/bmx/user/create",
        method: "POST",
        body
      }),
    }),
    updateUser: build.mutation({
      query: (body) => ({
        url: "/bmx/user/update",
        method: "POST",
        body
      }),
    }),
  }),
});

export const {useCreateUserDataQuery, useCreateUserMutation,useUpdateUserMutation} = createUserApi;
