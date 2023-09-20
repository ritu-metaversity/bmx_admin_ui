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
  tagTypes:["deleteByUser", 'superUserList'],
  endpoints: (build) => ({
    accountstatement: build.query({
      query: (body) => ({
        url: "/bmx/report/account-statement",
        method: "POST",
        body,
      }),
    }),
    ProfitLoss: build.query({
      query: (body) => ({
        url: "/report/profit-loss-match-wise",
        method: "POST",
        body,
      }),
    }),
    SearchBetMarketId: build.query({
      query: (body) => ({
        url: "/bets/search-bet-market-and-user",
        method: "POST",
        body,
      }),
    }),
    changePassword: build.mutation({
      query: (body) => ({
        url: "/bmx/user/change-password-self",
        method: "POST",
        body,
      }),
    }),
    changePasswordSelf: build.mutation({
      query: (body) => ({
        url: "/user/first-login-cp",
        method: "POST",
        body,
      }),
    }),
    dashboard: build.query({
      query: () => ({
        url: "/bmx/user/bmx-dashboard",
        method: "POST",
      }),
    }),
    completeFancy: build.query({
      query: (body) => ({
        url: "/bmx/completed-fancy",
        method: "POST",
        body,
      }),
    }),
    complteFancyOddsClients: build.query({
      query: (body) => ({
        url: "/bmx/report/completed-fancy-odds-clients",
        method: "POST",
        body,
      }),
    }),
    filterbyClient: build.query({
      query: (body) => ({
        url: `/bmx/filter-by-client-cash-transection`,
        method: "POST",
        body,
      }),
      providesTags: ["deleteByUser"],
    }),
    createTransaction: build.mutation({
      query: (body) => ({
        url: `/bmx/create-cash-transection`,
        method: "POST",
        body,
      }),
    }),
    userList: build.query({
      query: (body) => ({
        url: `/bmx/bmx-user-details`,
        method: "POST",
        body,
      }),
    }),
    DeleteByUserID: build.mutation({
      query: (body) => ({
        url: `/bmx/delete-cash-transection`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["deleteByUser"],
    }),
    fetchDeleteTransection: build.query({
      query: (body) => ({
        url: `/bmx/fetch-deleted-transection`,
        method: "POST",
        body,
      }),
    }),
    ttlBook: build.query({
      query: (body) => ({
        url: `/bmx/ttl-book`,
        method: "POST",
        body
      }),
    }),
    superuserList: build.mutation({
      query: (body) => ({
        url: "/bmx/user/get-user-list",
        method: "POST",
        body
      }),
      providesTags: ['superUserList']

    }),
    profitLoss: build.query({
      query: (body) => ({
        url: `/bmx/profit-loss`,
        method: "POST",
        body
      }),
    }),
    blockBetting: build.mutation({
      query: (body) => ({
        url: "/user/update-bet-account-status",
        method: "POST",
        body,
      }),
      invalidatesTags: ['superUserList']

    }),
    sportListbyID: build.query({
      query: (body) => ({
        url: "/sport/active-sport-list",
        method: "POST",
        body,
      }),

    }),
    userMessage: build.query({
      query: (body) => ({
        url: "/enduser/get-user-message",
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
      invalidatesTags: ['superUserList']
    }),
  }),
});

export const {
  useAccountstatementQuery,
  useLazyProfitLossQuery,
  useLazyAccountstatementQuery,
  useLazySearchBetMarketIdQuery,
  useChangePasswordMutation,
  useDashboardQuery,
  useLazyCompleteFancyQuery,
  useComplteFancyOddsClientsQuery,
  useLazyFilterbyClientQuery,
  useCreateTransactionMutation,
  useLazyUserListQuery,
  useDeleteByUserIDMutation,
  useFetchDeleteTransectionQuery,
  useLazyTtlBookQuery,
  // useSuperuserListQuery,
  useSuperuserListMutation,
  useProfitLossQuery,
  useBlockBettingMutation,
  useSportListbyIDQuery,
  useChangePasswordSelfMutation, 
  useUserMessageQuery,
  useUpDateStatusMutation
} = supermasteAccountStatementApi;
