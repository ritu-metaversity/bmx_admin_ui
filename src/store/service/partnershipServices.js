import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const partnershipApi = createApi({
  reducerPath: "partnershipApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");
      headers.set("Authorization", `Bearer ${token}`);
      return headers;
    },
  }),
  endpoints: (build) => ({
    partnership: build.mutation({
      query: (body) => ({
        url: "/bmx/report/partnership-by-userid",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const {usePartnershipMutation} = partnershipApi;
