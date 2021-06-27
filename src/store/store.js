import { configureStore } from '@reduxjs/toolkit';
import userSlice from './user_slice';
import uiSlice from './redux_ui/ui_slice';

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    uiState: uiSlice.reducer,
  },
});

export default store;
