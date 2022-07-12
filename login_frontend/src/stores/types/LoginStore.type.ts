export type LoginStoreType = {
  autoLoginToggle: boolean;
  setAutoLoginToggle: (toggle: boolean) => void;

  cookie: string;
  setCookie: (cookie: string) => void;
};
