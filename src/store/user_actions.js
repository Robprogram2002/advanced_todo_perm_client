import { createAsyncThunk } from '@reduxjs/toolkit';
import API from '../axios';

export const signUp = createAsyncThunk(
  'user/signUp',
  async ({ email, username, password }) => {
    try {
      const response = await API.post('/signup', { email, username, password });

      if (response.status !== 200) {
        throw new Error('Somehting went worng, please try again');
      }

      return {
        message: 'sign up successfully',
      };
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  },
);

export const singIn = createAsyncThunk(
  'user/signIn',
  async ({ email, password }) => {
    try {
      const response = await API.post('/signin', { email, password });

      if (response.status !== 200) {
        throw new Error('Somehting went worng, please try again');
      }

      const { token, expirationTime, user } = response.data;

      localStorage.setItem('token', token);
      localStorage.setItem('tokenExpiration', expirationTime);

      return {
        user,
        token,
      };
    } catch (error) {
      throw new Error(error.response.data.message);
    }
  },
);

export const meRequest = createAsyncThunk(
  'user/meRequest',
  async (token) => {
    try {
      const response = await API.get('/me', {
        headers: {
          Authorization: `Beaer ${token}`,
        },
      });
      console.log(response);

      if (response.status !== 200) throw new Error('something went wrong');

      return {
        user: response.data.user,
        token: localStorage.getItem('token'),
      };
    } catch (error) {
      console.log(error.response);
      throw new Error(error.message);
    }
  },
);
