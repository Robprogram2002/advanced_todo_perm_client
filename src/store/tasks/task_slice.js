import { createSlice } from '@reduxjs/toolkit';
import { getTask } from './tasks_actions';

const initialState = {
  task: null,
  subTasks: [],
};

const taskSlice = createSlice({
  name: 'taskSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTask.fulfilled, (state, action) => {
      const { task } = action.payload;
      state.task = task;
      state.subTasks = task.Tasks;
    });
  },
});

export const taskActions = taskSlice.actions;

export default taskSlice;
