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
        body,
      }),
    }),
    deposit: build.mutation({
      query: (body) => ({
        url: "/dwc/dcr",
        method: "POST",
        body,
      }),
    }),
    withdraw: build.mutation({
      query: (body) => ({
        url: "/dwc/wcr",
        method: "POST",
        body,
      }),
    }),
    depositAndWithdraw: build.query({
      query: (body) => ({
        url: "/dwc/depositwithdrawdata",
        method: "POST",
        body,
      }),
    }),
    addLimit: build.mutation({
      query: (body) => ({
        url: "/dwc/deposit-chips-pnl",
        method: "POST",
        body,
      }),
    }),
    minusLimit: build.mutation({
      query: (body) => ({
        url: "/dwc/withdraw-chips-pnl",
        method: "POST",
        body,
      }),
    }),
    partnership: build.mutation({
      query: (body) => ({
        url: "/bmx/report/partnership-by-userid",
        method: "POST",
        body,
      }),
    }),
    createUserData: build.query({
      query: (body) => ({
        url: "/bmx/user/get-user-data-for-create-user",
        method: "POST",
        body,
      }),
    }),
    createUser: build.mutation({
      query: (body) => ({
        url: "/bmx/user/create",
        method: "POST",
        body,
      }),
    }),
    updateUser: build.mutation({
      query: (body) => ({
        url: "/bmx/user/update",
        method: "POST",
        body,
      }),
    }),
    getUser: build.query({
      query: (body) => ({
        url: "/bmx/user/get-user-for-update",
        method: "POST",
        body,
      }),
    }),
    accountOpration: build.query({
      query: (body) => ({
        url: "/bmx/report/action-logs",
        method: "POST",
        body,
      }),
    }),
    upDateStatus: build.mutation({
      query: (body) => ({
        url: "/bmx/user/update-status",
        method: "POST",
        body,
      }),
    }),
    isUserId: build.query({
      query: (body) => ({
        url: "/user/is-userid-available",
        method: "POST",
        body,
      }),
    }),
    blockBetting: build.mutation({
      query: (body) => ({
        url: "/user/update-bet-account-status",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const {
  useUserListQuery,
  useOdsPnlQuery,
  useDepositMutation,
  useWithdrawMutation,
  useDepositAndWithdrawQuery,
  useAddLimitMutation,
  useMinusLimitMutation,
  usePartnershipMutation,
  useLazyCreateUserDataQuery,
  useCreateUserMutation,
  useUpdateUserMutation,
  useLazyGetUserQuery,
  useAccountOprationQuery,
  useUpDateStatusMutation,
  useLazyIsUserIdQuery,
  useBlockBettingMutation
} = userlistApi;
