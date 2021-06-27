import { createSlice } from '@reduxjs/toolkit';
import { singIn, meRequest } from './user_actions';

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
  extraReducers: (builder) => {
    builder.addCase(singIn.fulfilled, (state, action) => {
      const { user, token } = action.payload;
      state.uuid = user.uuid;
      state.email = user.email;
      state.username = user.username;
      state.authToken = token;
      state.authenticated = true;
    });
    builder.addCase(meRequest.fulfilled, (state, action) => {
      console.log(action);
      const { user, token } = action.payload;
      state.uuid = user.uuid;
      state.email = user.email;
      state.username = user.username;
      state.authToken = token;
      state.authenticated = true;
    });
  },
});

export const userActions = userSlice.actions;

export default userSlice;
