import { configureStore } from '@reduxjs/toolkit';
import { apikeySlice } from './services/apikeySlice';
import { postsApi } from './services/posts-api';
import { weatherCityApi } from './services/weather-api';

export const store = configureStore({
  reducer: {
    [apikeySlice.name]: apikeySlice.reducer,
    [weatherCityApi.reducerPath]: weatherCityApi.reducer,
    [postsApi.reducerPath]: postsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    weatherCityApi.middleware,
    postsApi.middleware,
  ],
});
