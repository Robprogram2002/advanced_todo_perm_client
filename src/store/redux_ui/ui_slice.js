import { createSlice } from '@reduxjs/toolkit';
import { signUp, singIn, meRequest } from '../user_actions';
import { changeTasksOrder } from '../tasks/tasks_actions';
import { changeSectionsOrder } from '../projects/project_actions';

const initialState = {
  homeLoading: true,
  loading: false,
  error: false,
  success: false,
  errorMessage: '',
  successMessage: '',
  showModal: false,
  showSideMenu: true,
};

const uiSlice = createSlice({
  name: 'uiState',
  initialState,
  reducers: {
    stopHomeLoading(state) {
      state.homeLoading = false;
    },
    openModal(state) {
      state.showModal = true;
    },
    closeModal(state) {
      state.showModal = false;
    },
    openSideMenu(state) {
      state.showSideMenu = true;
    },
    closeSideMenu(state) {
      state.showSideMenu = false;
    },
  },
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
      state.homeLoading = false;
    });
    builder.addCase(meRequest.rejected, (state) => {
      state.homeLoading = false;
    });
    builder.addCase(changeTasksOrder.pending, (state) => {
      state.error = false;
      state.errorMessage = '';
      state.success = false;
      state.successMessage = '';
    });
    builder.addCase(changeTasksOrder.fulfilled, (state, action) => {
      state.success = true;
      state.successMessage = action.payload.message;
    });
    builder.addCase(changeSectionsOrder.fulfilled, (state, action) => {
      state.success = true;
      state.successMessage = action.payload.message;
    });
    builder.addCase(changeSectionsOrder.pending, (state) => {
      state.error = false;
      state.errorMessage = '';
      state.success = false;
      state.successMessage = '';
    });
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
