import { TCar } from "@customTypes/car";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const carsApi = createApi({
  reducerPath: "carsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3004/",
  }),
  endpoints: (builder) => ({
    getCars: builder.query<TCar[], { make?: string; isRecommended?: boolean }>({
      query: (args) => {
        const { make, isRecommended } = args;
        return {
          url: "cars",
          params: { make, isRecommended },
        };
      },
    }),
  }),
});

export const { useGetCarsQuery } = carsApi;
