import axios from 'axios';

const $axios = axios.create({
  headers: {
    Pragma: 'no-cache',
  },
  baseURL: process.env.REACT_APP_DUMMY === 'true' ? process.env.REACT_APP_API_URL : process.env.REACT_APP_API_URL1,
  withCredentials: true,
});

export default $axios;
