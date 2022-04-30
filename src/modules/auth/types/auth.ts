export enum UserType {
  admin = 1,
  author = 2,
}

export type LoginRequest = {
  email: string;
  password: string;
};

export type LoginResponse = {
  user: {
    id_user_type: number;
    name: string;
    email: string;
  };
  token: string;
};

export type RegisterRequest = {
  name: string;
  email: string;
  password: string;
};

export type ForgotPasswordRequest = {
  email: string;
};

export type RecoverAccountRequest = {
  token: string;
  email: string;
  password: string;
};

export type RecoverAccountTokenResponse = {
  email: string;
};
