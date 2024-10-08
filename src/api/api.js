import axios from 'axios';

export const publicApi = axios.create({
  // baseURL: 'https://connections-api.goit.global',
  baseURL: 'http://localhost:3001/api',
});

export const privateApi = axios.create({
  // baseURL: 'https://connections-api.goit.global',
  baseURL: 'http://localhost:3001/api',
});

export const token = {
  set: token => {
    privateApi.defaults.headers.Authorization = `Bearer ${token}`;
  },

  remove: () => {
    privateApi.defaults.headers.Authorization = null;
  },
};
