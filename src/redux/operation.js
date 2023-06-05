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

// export const fetchAddContact = async (contact, thunkAPI) => {
//   try {
//     const response = await axios.post('/users', contact);
//     return response.data;
//   } catch (e) {
//     return thunkAPI.rejectWithValue(e.message);
//   }
// };

// export const fetchDeleteContact = async (id, thunkAPI) => {
//   try {
//     const response = await axios.delete(`/users/${id}`);
//     return response.data;
//   } catch (e) {
//     return thunkAPI.rejectWithValue(e.message);
//   }
// };
