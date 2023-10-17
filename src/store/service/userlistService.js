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
  tagTypes:["dashboard"],
  endpoints: (build) => ({
    userList: build.mutation({
      query: (body) => ({
        url: "/user/child-list-active-user",
        method: "POST",
        body,
      }),
      invalidatesTags: ["dashboard"]
    }),
    odsPnl: build.query({
      query: (body) => ({
        url: "/bets/odds-pnl",
        method: "POST",
        body,
      }),
      invalidatesTags: ["dashboard"]
    }),
    deposit: build.mutation({
      query: (body) => ({
        url: "/dwc/dcr",
        method: "POST",
        body,
      }),
      invalidatesTags: ["dashboard"]
    }),
    withdraw: build.mutation({
      query: (body) => ({
        url: "/dwc/wcr",
        method: "POST",
        body,
      }),
      invalidatesTags: ["dashboard"]
    }),
    depositAndWithdraw: build.query({
      query: (body) => ({
        url: "/dwc/depositwithdrawdata",
        method: "POST",
        body,
      }),
      invalidatesTags: ["dashboard"]
    }),
    addLimit: build.mutation({
      query: (body) => ({
        url: "/dwc/deposit-chips-pnl",
        method: "POST",
        body,
      }),
      invalidatesTags: ["dashboard"]
    }),
    minusLimit: build.mutation({
      query: (body) => ({
        url: "/dwc/withdraw-chips-pnl",
        method: "POST",
        body,
      }),
      invalidatesTags: ["dashboard"]
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
        body:{},
      }),
      invalidatesTags: ["dashboard"]
    }),
    createUser: build.mutation({
      query: (body) => ({
        url: "/bmx/user/create",
        method: "POST",
        body,
      }),
      invalidatesTags: ["dashboard"]
    }),
    updateUser: build.mutation({
      query: (body) => ({
        url: "/bmx/user/update",
        method: "POST",
        body,
      }),
      invalidatesTags: ["dashboard"]
    }),
    getUser: build.query({
      query: (body) => ({
        url: "/bmx/user/get-user-for-update",
        method: "POST",
        body,
      }),
      invalidatesTags: ["dashboard"]
    }),
    accountOpration: build.query({
      query: (body) => ({
        url: "/bmx/report/action-logs",
        method: "POST",
        body,
      }),
    }),
    // upDateStatus: build.mutation({
    //   query: (body) => ({
    //     url: "/bmx/user/update-status",
    //     method: "POST",
    //     body,
    //   }),
    // }),
    isUserId: build.query({
      query: (body) => ({
        url: "/user/is-userid-available",
        method: "POST",
        body,
      }),
    }),
    upDateLimites: build.query({
      query: (body) => ({
        url: "/dwc/creditdata",
        method: "POST",
        body,
      }),
      invalidatesTags: ["dashboard"]
    }),
    dashboard: build.query({
      query: () => ({
        url: "/bmx/user/bmx-dashboard",
        method: "POST",
      }),
      providesTags: ["dashboard"],
    }),
  }),
});

export const {
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
  useDashboardQuery,
  useLazyIsUserIdQuery,
  useLazyUpDateLimitesQuery

} = userlistApi;
