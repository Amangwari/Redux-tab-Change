import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchSuggestions = createAsyncThunk('api/fetchSuggestions', async (query) => {
  const response = await axios.get(`https://jsonplaceholder.typicode.com/users?q=${query}`);
  return response.data;
});

const apiSlice = createSlice({
  name: 'api',
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSuggestions.fulfilled, (state, action) => {
      return action.payload;
    });
    builder.addCase(fetchSuggestions.rejected, (state, action) => {
      console.error('Error fetching suggestions:', action.error);
    });
  },
});

export default apiSlice.reducer; // Export only the reducer, not the action creator
