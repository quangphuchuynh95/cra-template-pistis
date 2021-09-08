import axios from 'axios';

export const HEADER_NAME_KEY = 'header_name_key'

export const client = axios.create({
  baseURL: '/api',
  headers: {
    'X-Header-Name': {
      toString() {
        return localStorage.getItem(HEADER_NAME_KEY);
      },
    },
  },
});

export function getCancelToken() {
  return axios.CancelToken;
}
