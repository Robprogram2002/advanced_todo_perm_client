import { createSlice } from '@reduxjs/toolkit';
import { signUp, singIn, meRequest } from '../user_actions';

const initialState = {
  loading: true,
  error: false,
  success: false,
  errorMessage: '',
  successMessage: '',
};

const uiSlice = createSlice({
  name: 'uiState',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(signUp.pending, (state) => {
      state.loading = true;
      state.error = false;
      state.errorMessage = '';
      state.success = false;
      state.successMessage = '';
    });
    builder.addCase(signUp.rejected, (state, action) => {
      state.loading = false;
      state.errorMessage = action.error.message;
      state.error = true;
    });
    builder.addCase(signUp.fulfilled, (state, action) => {
      state.loading = false;
      state.successMessage = action.payload.message;
      state.success = true;
    });

    builder.addCase(singIn.pending, (state) => {
      state.loading = true;
      state.error = false;
      state.errorMessage = '';
      state.success = false;
      state.successMessage = '';
    });
    builder.addCase(singIn.rejected, (state, action) => {
      state.loading = false;
      state.errorMessage = action.error.message;
      state.error = true;
    });
    builder.addCase(meRequest.fulfilled, (state) => {
      state.loading = false;
    });
    builder.addCase(meRequest.rejected, (state) => {
      state.loading = false;
    });
  },
});

export default uiSlice;
