import { createSlice } from '@reduxjs/toolkit';
import { fetchUsers } from './operation';

const handlePending = state => {
  state.isLoading = true;
};

const handleFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.users = payload;
  state.error = null;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    isLoading: false,
    error: null,
  },
  //   reducers: {
  //     addBaseCurrency(state, { payload }) {
  //       state.baseCurrency = payload;
  //     },
  //   },
  extraReducers: builder => {
    builder
      .addCase(fetchUsers.pending, handlePending)
      .addCase(fetchUsers.fulfilled, handleFulfilled)
      .addCase(fetchUsers.rejected, handleRejected);
  },
});

// export const { addBaseCurrency } = currencySlice.actions;
export const usersReducer = usersSlice.reducer;
