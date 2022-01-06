import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { CurrencyState } from 'types';

const $axios = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}`,
  withCredentials: false,
  timeout: 30000,
});

// First approach: define the initial state using that type
const initialState: CurrencyState = {
  loading: true,
  error: null,
  currency: {},
};
const prefix = 'currency/getCurrency';
export const getCurrency = createAsyncThunk(prefix, async (query: string) => {
  const response = await $axios.get(
    process.env.REACT_APP_DUMMY === 'true'
      ? `/domains/price.json?q=${query}`
      : `/live?access_key=${process.env.REACT_APP_API_KEY}`,
  );
  return response.data;
});
const slice = createSlice({
  name: `currency`,
  initialState,
  reducers: {
    resetError: state => {
      return {
        ...state,
        error: null,
      };
    },
  },
  extraReducers: builder => {
    builder.addCase(getCurrency.pending, (state, action) => {
      // both `state` and `action` are now correctly typed
      // based on the slice state and the `pending` action creator
      state.loading = true;
    });
    builder.addCase(getCurrency.fulfilled, (state, { payload }) => {
      state.loading = false;
      state.currency = payload;
    });
    builder.addCase(getCurrency.rejected, (state, { payload }) => {
      state.loading = false;
    });
    // builder.addCase(getCurrency.fulfilled, (state, action) => {
    //   // Add user to the state array
    //   state.currency = action.payload.data;
    // });
  },
});

const { reducer } = slice;
export default reducer;

export const { resetError } = slice.actions;
