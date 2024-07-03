import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ISearchResult } from "./search.types";

export const searchApiSlice = createApi({
  reducerPath: "searchApiSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.NEXT_PUBLIC_TMDB_API_BASE_URL,
    prepareHeaders: (headers) => {
      headers.set(
        "Authorization",
        `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_KEY}`
      );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    // Define endpoints here
    getMoviesFromSearch: builder.query<ISearchResult, Record<string, string>>({
      query: (params) => ({
        url: `search/movie`,
        params,
      }),
    }),
  }),
});

export const { useLazyGetMoviesFromSearchQuery } = searchApiSlice;
