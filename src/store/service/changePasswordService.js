import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const changePasswordApi = createApi({
  reducerPath: "changePasswordApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");
      headers.set("Authorization", `Bearer ${token}`);
      return headers;
    },
  }),
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
