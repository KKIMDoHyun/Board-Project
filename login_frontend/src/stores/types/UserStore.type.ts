export type UserStoreType = {
  autoLoginToggle: boolean;
  setAutoLoginToggle: (toggle: boolean) => void;
  signInUserId: string;
  setSignInUserId: (userId: string) => void;
  signInPassword: string;
  setSignInPassword: (password: string) => void;
  clearSignInInput: () => void;

  accessToken: string;
  setAccessToken: (token: string) => void;

  refreshToken: string;
  setRefreshToken: (token: string) => void;

  id: number;
  setId: (id: number) => void;
  userId: string;
  setUserId: (userId: string) => void;
  email: string;
  setEmail: (emailFront: string, emailBack: string) => void;
  emailFront: string;
  setEmailFront: (email: string) => void;
  emailBack: string;
  setEmailBack: (email: string) => void;
  username: string;
  setUsername: (username: string) => void;
  gender: string;
  setGender: (gender: GenderType) => void;
  phoneNumber: string;
  setPhoneNumber: (phoneNumber: string) => void;
  password: string;
  setPassword: (password: string) => void;
  rePassword: string;
  setRePassword: (password: string) => void;

  userIdCheck: boolean;
  setUserIdCheck: (flag: boolean) => void;
  emailFrontCheck: boolean;
  setEmailFrontCheck: (flag: boolean) => void;
  emailBackCheck: boolean;
  setEmailBackCheck: (flag: boolean) => void;
  passwordCheck: boolean;
  setPasswordCheck: (flag: boolean) => void;
  rePasswordCheck: boolean;
  setRePasswordCheck: (flag: boolean) => void;
  usernameCheck: boolean;
  setUsernameCheck: (flag: boolean) => void;
  phoneNumberCheck: boolean;
  setPhoneNumberCheck: (flag: boolean) => void;

  userInfo: UserInfoType;
  setUserInfo: (userInfo: UserInfoType) => void;
};

export type GenderType = 'MALE' | 'FEMALE';
export type UserInfoType = {
  id: number;
  userId: string;
  username: string;
  email: string;
  created_at: string;
  gender: GenderType;
};
