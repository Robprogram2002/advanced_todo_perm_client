import { createAsyncThunk } from '@reduxjs/toolkit';
import API from '../../axios';

// 6e552a07-2565-419b-b09c-82ac8b8e0ee4

export const createProjectTask = createAsyncThunk(
  'taskProjject/create',
  async ({ name, entityId }) => {
    console.log('hereeee');

    try {
      const response = await API.post(
        '/tasks/create',
        {
          name,
          entityId,
          entityType: 'Proyect',
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        },
      );
      if (response.status !== 200) {
        throw new Error('Somehting went worng, please try again');
      }
      return {
        task: response.data.result,
      };
    } catch (error) {
      if (error.response) {
        throw new Error(error.response.data.message);
      } else {
        throw new Error('Something went wrong , please try again');
      }
    }
  },
);

export const createSectionTask = createAsyncThunk(
  'taskSection/create',
  async ({ name, entityId }) => {
    try {
      const response = await API.post(
        '/tasks/create',
        {
          name,
          entityId,
          entityType: 'Section',
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        },
      );
      if (response.status !== 200) {
        throw new Error('Somehting went worng, please try again');
      }
      return {
        task: response.data.result,
        sectionId: entityId,
      };
    } catch (error) {
      if (error.response) {
        throw new Error(error.response.data.message);
      } else {
        throw new Error('Something went wrong , please try again');
      }
    }
  },
);

export const changeTasksOrder = createAsyncThunk(
  'tasks/change-order',
  async ({
    entityId, entityType, taskId, actualPosition, newPosition,
  }) => {
    try {
      const response = await API.patch(
        '/tasks/re-order',
        {
          entityId,
          entityType,
          taskId,
          actualPosition,
          newPosition,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        },
      );

      if (response.status !== 200) {
        throw new Error('Somehting went worng, please try again');
      }

      return {
        message: response.data.message,
      };
    } catch (error) {
      if (error.response) {
        throw new Error(error.response.data.message);
      } else {
        throw new Error('Something went wrong , please try again');
      }
    }
  },
);

export const getTask = createAsyncThunk('task/getOne', async (taskId) => {
  try {
    const response = await API.get(`/tasks/${taskId}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    });

    if (response.status !== 200) {
      throw new Error('Somehting went worng, please try again');
    }

    console.log(response.data);

    return {
      task: response.data.task,
    };
  } catch (error) {
    if (error.response) {
      throw new Error(error.response.data.message);
    } else {
      throw new Error('Something went wrong , please try again');
    }
  }
});
