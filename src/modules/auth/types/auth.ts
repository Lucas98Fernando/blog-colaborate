export type ILoginRequest = {
  email: string;
  password: string;
};

export type ILoginResponse = {
  user: {
    id_user_type: number;
    name: string;
    email: string;
  };
  token: string;
};

export type IRegisterRequest = {
  name: string;
  email: string;
  password: string;
};

export enum UserType {
  admin = 1,
  author = 2,
}
