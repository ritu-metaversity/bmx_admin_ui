import { createApi } from "@reduxjs/toolkit/dist/query/react";
import { dynamicBaseQuery } from "./dynamicBaseQuery";

export const jwtApi = createApi({
  reducerPath: "jwtApi",
  baseQuery: dynamicBaseQuery,
  endpoints: (build) => ({
    jwtToken: build.query({
      query: () => ({
        url: `/util/validate-jwt-token`,
        method: "POST",
      }),
    }),
  }),
});

export const {useJwtTokenQuery} = jwtApi;