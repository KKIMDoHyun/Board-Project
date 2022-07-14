import UserStore from '@/stores/UserStore';
import axios, {AxiosInstance} from 'axios';

export function setInterceptors(instance: AxiosInstance) {
  instance.interceptors.request.use(
    function (config) {
      config.headers!.Authorization = `Bearer ${UserStore.accessToken}`;
      return config;
    },
    function (error) {
      return Promise.reject(error.response.data);
    },
  );

  instance.interceptors.response.use(
    function (response) {
      return response;
    },
    async error => {
      const {
        config,
        response: {status},
      } = error;
      console.log(status);
      const originRequest = config;
      if (status === 401) {
        console.log('AccessToken 유효기간 만료');
        try {
          const res = await axios.post('http://10.0.2.2:3000/auth/refresh', {
            refreshToken: UserStore.refreshToken,
          });
          UserStore.setAccessToken(res.data.accessToken);
        } catch (err) {
          console.log('AccessToken 재발급 에러');
        }
        originRequest.headers.Authorization = `Bearer ${UserStore.accessToken}`;
        console.log('AccessToken 재발급 후 요청');
        return instance(originRequest);
      } else {
        console.log('DSFD');
        return Promise.reject(error);
      }
    },
  );
  return instance;
}
