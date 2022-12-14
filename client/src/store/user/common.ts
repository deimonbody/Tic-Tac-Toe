import { IUser } from "@route/common/interfaces";

export interface IInitialState {
  user: IUser;
  isLoading: boolean;
}

export enum UserActions {
  SET_USER = "SET_USER",
  SET_USER_LOADING = "SET_USER_LOADING",
  SET_USER_SOCKET_ID = "SET_USER_SOCKET_ID",
}

export interface ISetUserProps {
  email: string;
  password: string;
}
