import { createAsyncThunk } from '@reduxjs/toolkit';
import API from '../../axios';

export const createProject = createAsyncThunk(
  'project/create',
  async ({ name, color, description }) => {
    try {
      const response = await API.post(
        '/proyect/create',
        {
          title: name,
          color,
          description,
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
      console.log(response);
      const { proyect } = response.data;

      return {
        project: proyect,
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

export const getProject = createAsyncThunk(
  'project/getOne',
  async (projectId) => {
    try {
      const response = await API.get(`/proyect/${projectId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });

      if (response.status !== 200) {
        throw new Error('Somehting went worng, please try again');
      }

      return {
        project: response.data.proyect,
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

export const createSection = createAsyncThunk(
  'project/section/create',
  async ({ projectId, name, position }) => {
    try {
      const response = await API.post(
        `/proyect/${projectId}/section/create`,
        { name, position },
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
        section: response.data.section,
        position,
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

export const deleteProject = createAsyncThunk();

export const changeSectionsOrder = createAsyncThunk(
  'project/sections-order',
  async ({
    projectId,
    sectionId,
    actualPosition,
    newPosition,
  }) => {
    try {
      const response = await API.patch(`/proyect/${projectId}/section/re-order`, {
        sectionId,
        actualPosition,
        newPosition,
      }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });

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
