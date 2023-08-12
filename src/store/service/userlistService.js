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
    deposit: build.mutation({
      query: (body) => ({
        url: "/dwc/dcr",
        method: "POST",
        body
      }),
    }),
    withdraw: build.mutation({
      query: (body) => ({
        url: "/dwc/wcr",
        method: "POST",
        body
      }),
    }),
    depositAndWithdraw: build.query({
      query: (body) => ({
        url: "dwc/depositwithdrawdata",
        method: "POST",
        body
      }),
    }),
  }),
});

export const {useUserListQuery, useOdsPnlQuery,useDepositMutation, useWithdrawMutation, useDepositAndWithdrawQuery} = userlistApi;
