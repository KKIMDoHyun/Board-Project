import axios, {AxiosInstance} from 'axios';
import {setInterceptors} from './common/interceptors';

function createInstance() {
  const instance: AxiosInstance = axios.create({
    withCredentials: true,
    baseURL: 'http://10.0.2.2:3000',
  });
  return setInterceptors(instance);
}
export const instance = createInstance();
