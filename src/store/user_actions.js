import { createAsyncThunk } from '@reduxjs/toolkit';
import API from '../axios';

export const signUp = createAsyncThunk(
  'user/signUp',
  async ({ email, username, password }) => {
    const response = await API.post('/signup', { email, username, password });

    if (!response.ok) throw new Error('Somehting went worng, please try again');

    return {
      message: 'sign up successfully',
    };
  },
);

export const singIn = createAsyncThunk(
  'user/signIn',
  async ({ email, password }) => {
    const response = await API.post('/signin', { email, password });

    if (response.status !== 200) throw new Error('Somehting went worng, please try again');

    return {
      user: response.data.user,
      token: response.data.token,
    };
  },
);
