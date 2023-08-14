import { createApi } from "@reduxjs/toolkit/dist/query/react";
import { dynamicBaseQuery } from "./dynamicBaseQuery";

export const createUserApi = createApi({
  reducerPath: "createUserApi",
  baseQuery: dynamicBaseQuery,
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
    getUser: build.query({
      query: (body) => ({
        url: "/bmx/user/get-user-for-update",
        method: "POST",
        body
      }),
    }),
    accountOpration: build.query({
      query: (body) => ({
        url: "/bmx/report/action-logs",
        method: "POST",
        body
      }),
    }),
    upDateStatus: build.mutation({
      query: (body) => ({
        url: "/bmx/user/update-status",
        method: "POST",
        body
      }),
    }),
  }),
});

export const {useLazyCreateUserDataQuery, useCreateUserMutation,useUpdateUserMutation, useLazyGetUserQuery, useAccountOprationQuery, useUpDateStatusMutation} = createUserApi;
