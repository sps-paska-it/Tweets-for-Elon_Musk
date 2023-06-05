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
  const userId = action.meta.arg.id;
  const user = state.users.find(user => user.id === userId);
  if (user) {
    user.followers -= 1;
    state.followers = state.followers.filter(id => id !== Number(userId));
  }
};

const handleFulfilledFollowTweet = (state, action) => {
  state.isLoading = false;
  state.error = null;
  const userId = action.meta.arg.id;
  const user = state.users.find(user => user.id === userId);
  if (user) {
    user.followers -= 1;
    state.followers = state.followers.filter(id => id !== Number(userId));
  }
};

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    followers: [],
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
      .addCase(followTweet.fulfilled, handleFulfilledFollowTweet)
      .addCase(unFollowTweet.fulfilled, handleFulfilledUnFollowTweet);
  },
});

export const usersReducer = usersSlice.reducer;
