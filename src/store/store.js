import { configureStore } from '@reduxjs/toolkit';
import userSlice from './user_slice';
import uiSlice from './redux_ui/ui_slice';
import proyectSlice from './projects/project_slice';
import metaDataSlice from './meta_data/metaData_slice';
import taskSlice from './tasks/task_slice';

const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    uiState: uiSlice.reducer,
    proyects: proyectSlice.reducer,
    metaData: metaDataSlice.reducer,
    taskState: taskSlice.reducer,
  },
});

export default store;
