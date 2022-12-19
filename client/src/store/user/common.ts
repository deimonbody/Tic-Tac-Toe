import { LocalizationLanguagesEnum } from "@src/common/enum";
import { IUser } from "@src/common/interfaces";

export interface IInitialState {
  user: IUser;
  isLoading: boolean;
  currentLanguage: LocalizationLanguagesEnum;
}

export enum UserActions {
  SET_USER = "SET_USER",
  SET_USER_LOADING = "SET_USER_LOADING",
  SET_USER_SOCKET_ID = "SET_USER_SOCKET_ID",
  CHANGE_LANGUAGE = "CHANGE_LANGUAGE",
  LOGOUT_USER = "LOGOUT_USER",
}

export interface ISetUserProps {
  email: string;
  password: string;
}
