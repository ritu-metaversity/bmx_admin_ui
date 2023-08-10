import { createApi } from "@reduxjs/toolkit/dist/query/react";
import { dynamicBaseQuery } from "./dynamicBaseQuery";

export const partnershipApi = createApi({
  reducerPath: "partnershipApi",
  baseQuery: dynamicBaseQuery,
  endpoints: (build) => ({
    partnership: build.mutation({
      query: (body) => ({
        url: "/bmx/report/partnership-by-userid",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const {usePartnershipMutation} = partnershipApi;
