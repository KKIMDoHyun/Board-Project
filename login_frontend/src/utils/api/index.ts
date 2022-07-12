import LoginStore from '@/stores/LoginStore';
import AsyncStorage from '@react-native-community/async-storage';
import axios, {AxiosInstance} from 'axios';
import {setInterceptors} from './common/interceptors';

function createInstance() {
  const instance: AxiosInstance = axios.create({
    baseURL: 'http://10.0.2.2:3000',
    withCredentials: true,
  });
  return setInterceptors(instance);
}
export const instance = createInstance();
