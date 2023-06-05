import { createSlice } from '@reduxjs/toolkit';
import { fetchUsers, followTweet, unFollowTweet } from './operation';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const handleFulfilled = (state, { payload }) => {
  state.isLoading = false;
  state.users = payload;
  state.error = null;
};

const handleFulfilledUnFollowTweet = (state, action) => {
  state.isLoading = false;
  state.error = null;
  const tweetId = action.meta.arg.id;
  const tweet = state.items.find(tweet => tweet.id === tweetId);
  if (tweet) {
    tweet.followers -= 1;
    state.followers = state.followers.filter(id => id !== Number(tweetId));
  }
};

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchUsers.pending, handlePending)
      .addCase(followTweet.pending, handlePending)
      .addCase(unFollowTweet.pending, handlePending)
      .addCase(fetchUsers.rejected, handleRejected)
      .addCase(followTweet.rejected, handleRejected)
      .addCase(unFollowTweet.rejected, handleRejected)
      .addCase(fetchUsers.fulfilled, handleFulfilled)
      .addCase(unFollowTweet.fulfilled, handleFulfilledUnFollowTweet)
      .addCase(unFollowTweet.fulfilled, handleFulfilledUnFollowTweet);
  },
});

// export const { addBaseCurrency } = currencySlice.actions;
export const usersReducer = usersSlice.reducer;
