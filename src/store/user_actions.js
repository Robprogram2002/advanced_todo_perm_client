import { createAsyncThunk } from '@reduxjs/toolkit';
import API from '../axios';

export const signUp = createAsyncThunk(
  'user/signUp',
  async ({ email, username, password }) => {
    const response = await API.post('/signup', { email, username, password });

    console.log(response);

    if (!response.ok) throw new Error('Somehting went worng, please try again');

    return {
      message: 'sign up successfully',
    };
  },
);

export const singIn = createAsyncThunk(
  'user/signIn',
  async ({ email, password }) => {
    const response = await API.get('/signin', { data: { email, password } });

    console.log(response);

    if (!response.ok) throw new Error('Somehting went worng, please try again');

    return {
      user: response.user,
      token: response.token,
    };
  },
);
