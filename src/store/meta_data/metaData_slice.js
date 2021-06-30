import { createSlice } from '@reduxjs/toolkit';
import { signUp } from '../user_actions';
import { createProject } from '../projects/project_actions';

const initialState = {
  redirectTo: null,
};

const metaDataSlice = createSlice({
  name: 'metadata',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(signUp.fulfilled, (state) => {
      state.redirectTo = '/auth/login';
    });
    builder.addCase(createProject.fulfilled, (state, action) => {
      const { uuid } = action.payload.project;
      state.redirectTo = `/app/project/${uuid}`;
    });
  },
});

export const metaDataActions = metaDataSlice.actions;

export default metaDataSlice;
