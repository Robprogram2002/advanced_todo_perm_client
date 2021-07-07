import { createSlice } from '@reduxjs/toolkit';
import { getTask, createSubTask, updateTask } from './tasks_actions';

const initialState = {
  task: null,
  subTasks: [],
};

const taskSlice = createSlice({
  name: 'taskSlice',
  initialState,
  reducers: {
    UpdateSubTasksOrder(state, action) {
      const { newSubTasks } = action.payload;
      state.subTasks = newSubTasks;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getTask.fulfilled, (state, action) => {
      const { task } = action.payload;
      state.task = task;
      state.subTasks = task.Tasks;
    });
    builder.addCase(createSubTask.fulfilled, (state, action) => {
      state.subTasks.push(action.payload.task);
    });
    builder.addCase(updateTask.fulfilled, (state, action) => {
      state.task.name = action.payload.taskName;
    });
  },
});

export const taskActions = taskSlice.actions;

export default taskSlice;
