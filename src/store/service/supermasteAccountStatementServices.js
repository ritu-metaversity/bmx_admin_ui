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
    SuperuserList: build.query({
      query: (body) => ({
        url: "/bmx/user/get-user-list",
        method: "POST",
        body
      }),
    }),
    super_User_List: build.mutation({
      query: (body) => ({
        url: "/bmx/user/get-user-list",
        method: "POST",
        body
      }),
    }),
    profitLoss: build.query({
      query: (body) => ({
        url: `/bmx/profit-loss`,
        method: "POST",
        body
      }),
    })
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
  useLazySuperuserListQuery,
  useProfitLossQuery,
  useSuper_User_ListMutation
} = supermasteAccountStatementApi;
