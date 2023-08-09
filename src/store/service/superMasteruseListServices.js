import { createApi } from "@reduxjs/toolkit/dist/query/react";
import { dynamicBaseQuery } from "./dynamicBaseQuery";

export const superUserListApi = createApi({
  reducerPath: "superUserListApi",
  baseQuery: dynamicBaseQuery,
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

export const {useLazySuperuserListQuery} = superUserListApi;
