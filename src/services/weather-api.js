import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const weatherCityApi = createApi({
  reducerPath: 'weatherCityApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `https://api.openweathermap.org/data/2.5/`,
  }),
  endpoints: (builder) => {
    return {
      getCityWeather: builder.query({
        query: ({ lat, lon, apikey }) =>
          `weather?lat=${lat}&lon=${lon}&appid=${apikey}&units=metric`,
      }),
    };
  },
});

export const { useGetCityWeatherQuery } = weatherCityApi;
