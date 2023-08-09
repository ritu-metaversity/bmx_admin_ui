import { createApi } from "@reduxjs/toolkit/dist/query/react";
import { dynamicBaseQuery } from "./dynamicBaseQuery";

export const userlistApi = createApi({
  reducerPath: "userlistApi",
  baseQuery: dynamicBaseQuery,
  endpoints: (build) => ({
    userList: build.mutation({
      query: (body) => ({
        url: "/user/child-list-active-user",
        method: "POST",
        body,
      }),
    }),
    odsPnl: build.query({
      query: (body) => ({
        url: "/bets/odds-pnl",
        method: "POST",
        body
      }),
    }),
  }),
});

export const {useUserListQuery} = userlistApi;
