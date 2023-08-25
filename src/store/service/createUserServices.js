// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

// export const createUserApi = createApi({
//   reducerPath: "createUserApi",
//   baseQuery: fetchBaseQuery({
//     baseUrl: import.meta.env.VITE_BASE_URL,
//     prepareHeaders: (headers) => {
//       const token = localStorage.getItem("token");
//       headers.set("Authorization", `Bearer ${token}`);
//       return headers;
//     },
//   }),
//   endpoints: (build) => ({
//     createUserData: build.query({
//       query: (body) => ({
//         url: "/bmx/user/get-user-data-for-create-user",
//         method: "POST",
//         body,
//       }),
//     }),
//     createUser: build.mutation({
//       query: (body) => ({
//         url: "/bmx/user/create",
//         method: "POST",
//         body,
//       }),
//     }),
//     updateUser: build.mutation({
//       query: (body) => ({
//         url: "/bmx/user/update",
//         method: "POST",
//         body,
//       }),
//     }),
//     getUser: build.query({
//       query: (body) => ({
//         url: "/bmx/user/get-user-for-update",
//         method: "POST",
//         body,
//       }),
//     }),
//     accountOpration: build.query({
//       query: (body) => ({
//         url: "/bmx/report/action-logs",
//         method: "POST",
//         body,
//       }),
//     }),
//     upDateStatus: build.mutation({
//       query: (body) => ({
//         url: "/bmx/user/update-status",
//         method: "POST",
//         body,
//       }),
//     }),
//     isUserId: build.query({
//       query: (body) => ({
//         url: "/user/is-userid-available",
//         method: "POST",
//         body,
//       }),
//     }),
//     blockBetting: build.mutation({
//       query: (body) => ({
//         url: "/user/update-bet-account-status",
//         method: "POST",
//         body,
//       }),
//     }),
//   }),
// });

// export const {
//   useLazyCreateUserDataQuery,
//   useCreateUserMutation,
//   useUpdateUserMutation,
//   useLazyGetUserQuery,
//   useAccountOprationQuery,
//   useUpDateStatusMutation,
//   useLazyIsUserIdQuery,
//   useBlockBettingMutation
  
// } = createUserApi;
