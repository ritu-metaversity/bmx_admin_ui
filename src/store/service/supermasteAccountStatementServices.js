import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const supermasteAccountStatementApi = createApi({
  reducerPath: "supermasteAccountStatementApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");
      headers.set("Authorization", `Bearer ${token}`);
      return headers;
    },
  }),
  endpoints: (build) => ({
    accountstatement: build.query({
      query: (body) => ({
        url: "/report/account-statement",
        method: "POST",
        body,
      }),
    })
  }),
});

export const {useAccountstatementQuery } = supermasteAccountStatementApi;
