import axios from 'axios';

export const publicApi = axios.create({
  baseURL: 'https://phonebook-backend-k1p3.onrender.com/api',
});

export const privateApi = axios.create({
  baseURL: 'https://phonebook-backend-k1p3.onrender.com/api',
});

export const token = {
  set: token => {
    privateApi.defaults.headers.Authorization = `Bearer ${token}`;
  },

  remove: () => {
    privateApi.defaults.headers.Authorization = null;
  },
};
