import { createAsyncThunk } from '@reduxjs/toolkit';
import API from '../../axios';

// 6e552a07-2565-419b-b09c-82ac8b8e0ee4

export const createProjectTask = createAsyncThunk(
  'taskProjject/create',
  async ({ name, entityId }) => {
    console.log('hereeee');

    try {
      const response = await API.post('/tasks/create', {
        name,
        entityId,
        entityType: 'Proyect',
      }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
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
      const response = await API.post('/tasks/create', {
        name,
        entityId,
        entityType: 'Section',
      }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
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

export const deleteTask = createAsyncThunk();
