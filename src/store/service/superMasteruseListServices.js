import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const superUserListApi = createApi({
  reducerPath: "superUserListApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL_SID,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");
      headers.set("Authorization", `Bearer ${token}`);
      return headers;
    },
  }),
  endpoints: (build) => ({
    SuperuserList: build.query({
      query: (body) => ({
        url: "/bmx/user/get-user-list",
        method: "POST",
        body
      }),
    })
  }),
});

export const {useSuperuserListQuery} = superUserListApi;
