import { TCar } from "@customTypes/car";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const carsApi = createApi({
  reducerPath: "carsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3004/",
  }),
  endpoints: (builder) => ({
    getCars: builder.query<
      TCar[],
      {
        make?: string;
        isRecommended?: boolean;
        _page?: number;
        _limit?: number;
        transmission?: string;
      }
    >({
      query: (args) => {
        const { make, isRecommended, transmission, _page, _limit } = args;
        return {
          url: "cars",
          params: { make, isRecommended, _page, _limit, transmission },
        };
      },
    }),
  }),
});

export const { useGetCarsQuery } = carsApi;
