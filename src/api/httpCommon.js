import axios from 'axios';
import axiosRetry from 'axios-retry';

import {Url} from './apiRoutes';
import {fortmatData, isEmptyObject} from '../utils';
import {RAsyncStorage} from '../utils/commonFunctions';
import {NODE_ENV} from '@env';

export const axiosInstance = axios.create({
  baseURL: `${Url.baseApiUrl}`,
  timeout: 30000,
});

axiosInstance.defaults.headers = {
  'Content-Type': 'application/json',
  Authorization: RAsyncStorage.getItem('token') || '',
};

const retryDelay = (retryNumber = 0) => {
  const seconds = Math.pow(2, retryNumber) * 1000;
  const randomMs = 1000 * Math.random();
  return seconds + randomMs;
};

axiosRetry(axiosInstance, {
  retries: 2,
  retryDelay,
  // retry on Network Error & 5xx responses
  retryCondition: axiosRetry.isRetryableError,
});

// const DEBUG = process.env.NODE_ENV === 'development';
const DEBUG = NODE_ENV === 'testing';

function errorResponseHandler(error) {
  if (DEBUG) {
    console.error(`Error: ${fortmatData(error)}`);
  }

  if (error.response && error.response.data) {
    if (error.response.data === 'jwt expired') {
      setTimeout(() => {
        localStorage.removeItem('token');
        localStorage.clear();
        window.location = '/login';
      }, 2000);
    }
    console.log({
      type: 'error',
      props: error.response.data
        ? error.response.data.Messages
        : 'Unknown Error',
    });
    return false;
  } else if (error.message) {
    if (error.message === 'Network Error') {
      console.log({type: 'error', props: 'Network Error'});
    } else {
      console.log({type: 'error', props: error.message});
    }
  }
}

// Add a request interceptor
axiosInstance.interceptors.request.use(async config => {
  if (isEmptyObject(config.data)) {
    config.data = {};
  }

  // if (DEBUG) { console.info(`Request: ${fortmatData(config)}`); }
  return config;
}, errorResponseHandler);

// apply interceptor on response
axiosInstance.interceptors.response.use(response => {
  if (DEBUG) {
    console.info(`Response: ${fortmatData(response)}`);
  }

  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data

  return response;
}, errorResponseHandler);

export const getAPICall = async (url, data) =>
  await axiosInstance.get(url, data);
export const postAPICall = async (url, data) =>
  await axiosInstance.post(url, data, {timeout: 10000});
export const putAPICall = async (url, data) =>
  await axiosInstance.put(url, data);
export const deleteAPICall = async (url, data) =>
  await axiosInstance.delete(url, data);
