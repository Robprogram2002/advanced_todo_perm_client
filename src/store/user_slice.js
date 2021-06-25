import { createSlice } from '@reduxjs/toolkit';
import { singIn } from './user_actions';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    username: null,
    email: null,
    userId: null,
    imageUrl: null,
    authToken: null,
    authenticated: false,
  },
  reducers: {},
  extraReducers: {
    [singIn.fulfilled]: (state, action) => {
      const { user, token } = action.payload;
      state.uuid = user.uuid;
      state.email = user.email;
      state.username = user.username;
      state.imageUrl = user.imageUrl;
      state.authToken = token;
      state.authenticated = true;
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice;
