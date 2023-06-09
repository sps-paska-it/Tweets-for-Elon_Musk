import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://64632c7d7a9eead6fadf02c2.mockapi.io';

export const fetchUsers = createAsyncThunk('users/get', async (_, thunkAPI) => {
  try {
    const response = await axios.get('/users');
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e.message);
  }
});

export const followTweet = createAsyncThunk(
  'tweets/followTweet',
  async (tweet, thunkAPI) => {
    try {
      const response = await axios.put(`/users/${tweet.id}`, {
        followers: tweet.followers + 1,
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const unFollowTweet = createAsyncThunk(
  'tweets/unFollowTweet',
  async (tweet, thunkAPI) => {
    try {
      const response = await axios.put(`/users/${tweet.id}`, {
        followers: tweet.followers - 1,
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
