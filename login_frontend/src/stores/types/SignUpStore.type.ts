export type SignUpStoreType = {
  userId: string;
  setUserId: (id: string) => void;

  email: string;
  setEmail: (email: string) => void;

  username: string;
  setUsername: (username: string) => void;

  gender: GenderType;
  setGender: (gender: GenderType) => void;

  phoneNumber: string;
  setPhoneNumber: (phoneNumber: string) => void;

  password: string;
  setPassword: (password: string) => void;

  checkPassword: string;
  setCheckPassword: (password: string) => void;
};

export type GenderType = 'MALE' | 'FEMALE';
