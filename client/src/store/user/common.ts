import { LocalizationLanguagesEnum } from "@route/common/enum";
import { ILanguagesString, IUser } from "@route/common/interfaces";
import { LocalizedStrings } from "react-localization";

export interface IInitialState {
  user: IUser;
  isLoading: boolean;
  strings: LocalizedStrings<ILanguagesString>;
  currentLanguage: LocalizationLanguagesEnum;
}

export enum UserActions {
  SET_USER = "SET_USER",
  SET_USER_LOADING = "SET_USER_LOADING",
  SET_USER_SOCKET_ID = "SET_USER_SOCKET_ID",
  CHANGE_LANGUAGE = "CHANGE_LANGUAGE",
}

export interface ISetUserProps {
  email: string;
  password: string;
}
