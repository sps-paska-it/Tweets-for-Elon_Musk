import { createSelector } from '@reduxjs/toolkit';

export const selectUsers = state => state.users.users;
export const selectIsLoading = state => state.users.isLoading;
export const selectError = state => state.users.error;
export const selectFollowers = state => state.users.followers;

export const selectUsersAllInfo = createSelector(
  [selectUsers, selectIsLoading, selectError],
  (users, isLoading, error) => {
    return { users, isLoading, error };
  }
);
