import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

export const userlistApi = createApi({
  reducerPath: "userlistApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");
      headers.set("Authorization", `Bearer ${token}`);
      return headers;
    },
  }),
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
        url: "/dwc/depositwithdrawdata",
        method: "POST",
        body
      }),
    }),
    addLimit: build.mutation({
      query: (body) => ({
        url: "/dwc/deposit-chips-pnl",
        method: "POST",
        body
      }),
    }),
    minusLimit: build.mutation({
      query: (body) => ({
        url: "/dwc/withdraw-chips-pnl",
        method: "POST",
        body
      }),
    }),
  }),
});

export const {useUserListQuery, useOdsPnlQuery,useDepositMutation, useWithdrawMutation, useDepositAndWithdrawQuery,useAddLimitMutation,useMinusLimitMutation} = userlistApi;
