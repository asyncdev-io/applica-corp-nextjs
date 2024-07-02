import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ISearchResult } from "./search.types";

export const searchApiSlice = createApi({
  reducerPath: "searchApiSlice",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_API_URL }),
  endpoints: (builder) => ({
    // Define endpoints here
    getMoviesFromSearch: builder.query<ISearchResult, void>({
      query: () => `/search`,
    }),
  }),
});

export const { useGetMoviesFromSearchQuery } = searchApiSlice;
