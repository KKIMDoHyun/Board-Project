export type LoginStoreType = {
  autoLoginToggle: boolean;
  setAutoLoginToggle: (toggle: boolean) => void;

  accessToken: string;
  setAccessToken: (token: string) => void;

  refreshToken: string;
  setRefreshToken: (token: string) => void;
};
