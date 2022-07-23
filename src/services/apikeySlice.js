import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  key: sessionStorage.getItem('apikey') ?? null,
};

export const apikeySlice = createSlice({
  name: 'api',
  initialState,
  reducers: {
    setKey: (state, action) => {
      sessionStorage.setItem('apikey', action.payload);
      state.key = action.payload;
    },
    removeKey: (state, action) => {
      sessionStorage.removeItem('apikey');
      state.key = undefined;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setKey, removeKey } = apikeySlice.actions;

export default apikeySlice.reducer;
