import { createSlice } from '@reduxjs/toolkit';
import { createProject, getProject, createSection } from './project_actions';
import { singIn, meRequest } from '../user_actions';
import { createProjectTask, createSectionTask } from '../tasks/tasks_actions';

const initialState = {
  projects: [],
  project: null,
};

const projectSlice = createSlice({
  name: 'projectSlice',
  initialState,
  reducers: {
    updateTasksOrder(state, action) {
      const newTasks = action.payload;
      state.project.Tasks = newTasks;
    },
    UpdateSubTasksOrder(state, action) {
      const { newSubTasks, taskId, sectionId } = action.payload;
      const { Sections } = state.project;

      if (sectionId) {
        const index = Sections.findIndex(
          (section) => section.uuid === sectionId,
        );
        const targetSection = Sections[index];

        const taskIndex = targetSection.Tasks.findIndex(
          (task) => task.uuid === taskId,
        );
        const targetTask = targetSection.Tasks[taskIndex];
        targetTask.Tasks = newSubTasks;
      } else {
        const taskIndex = state.project.Tasks.findIndex(
          (task) => task.uuid === taskId,
        );
        const targetTask = state.project.Tasks[taskIndex];
        targetTask.Tasks = newSubTasks;
      }
    },
    updateSectionTasksOrder(state, action) {
      const { newTasks, sectionId } = action.payload;
      const { Sections } = state.project;
      const index = Sections.findIndex((section) => section.uuid === sectionId);
      const targetSection = Sections[index];
      targetSection.Tasks = newTasks;
    },
    updateSectionsOrder(state, action) {
      const { project } = state;
      project.Sections = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createProject.fulfilled, (state, action) => {
      const { project } = action.payload;
      state.projects.push(project);
      state.project = project;
    });
    builder.addCase(singIn.fulfilled, (state, action) => {
      const { proyects } = action.payload;
      state.projects = proyects;
    });
    builder.addCase(meRequest.fulfilled, (state, action) => {
      const { proyects } = action.payload;
      state.projects = proyects;
    });
    builder.addCase(createProjectTask.fulfilled, (state, action) => {
      const { task } = action.payload;
      state.project.Tasks.push(task);
    });
    builder.addCase(getProject.fulfilled, (state, action) => {
      state.project = action.payload.project;
    });
    builder.addCase(createSection.fulfilled, (state, action) => {
      const { position, section } = action.payload;
      const { Sections } = state.project;
      Sections.splice(position, 0, section);
    });
    builder.addCase(createSectionTask.fulfilled, (state, action) => {
      const { Sections } = state.project;
      const { sectionId, task } = action.payload;
      const index = Sections.findIndex((section) => section.uuid === sectionId);
      const targetSection = Sections[index];
      targetSection.Tasks.push(task);
    });
  },
});

export const projectActions = projectSlice.actions;

export default projectSlice;
