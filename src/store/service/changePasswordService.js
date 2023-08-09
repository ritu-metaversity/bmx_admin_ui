import { createApi } from "@reduxjs/toolkit/dist/query/react";
import { dynamicBaseQuery } from "./dynamicBaseQuery";

export const changePasswordApi = createApi({
  reducerPath: "changePasswordApi",
  baseQuery: dynamicBaseQuery,
  endpoints: (build) => ({
    changePassword: build.mutation({
      query: (body) => ({
        url: "/bmx/user/change-password-self",
        method: "POST",
        body,
      }),
    })
  }),
});

export const { useChangePasswordMutation } = changePasswordApi;
