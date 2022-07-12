import {AxiosInstance} from 'axios';

export function setInterceptors(instance: AxiosInstance) {
  instance.interceptors.request.use(
    function (config) {
      return config;
    },
    function (error) {
      return Promise.reject(error.response.data);
    },
  );

  instance.interceptors.response.use(
    function (response) {
      console.log('RESPONSE', response.headers);
      return response;
    },
    function (error) {
      const {
        config,
        response: {status},
      } = error;
      if (status === 401) {
        console.log('ERROR');
      }
      return Promise.reject(error);
    },
  );
  return instance;
}
