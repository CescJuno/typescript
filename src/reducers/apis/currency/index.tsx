import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const $axios = axios.create({
  baseURL: `${process.env.REACT_APP_API_URL}`,
  withCredentials: false,
  timeout: 30000,
});

export const getCurrency = createAsyncThunk(
  `currency/getCurrency`,
  async query => {
    const response = await $axios.get(
      process.env.REACT_APP_DUMMY === 'true'
        ? `/domains/price.json?q=${query}`
        : `/live?access_key=${process.env.REACT_APP_API_KEY}`,
    );
    return response.data;
  },
);

const slice = createSlice({
  name: `currency`,
  initialState: {
    isLoading: true,
    error: null,
    currency: {},
  },
  reducers: {
    resetError: state => {
      return {
        ...state,
        error: null,
      };
    },
  },
  extraReducers: builder => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(getCurrency.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.currency = payload;
    });
    builder.addCase(getCurrency.rejected, (state, { payload }) => {
      state.isLoading = false;
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
