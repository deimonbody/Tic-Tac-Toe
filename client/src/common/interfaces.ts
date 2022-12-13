import { RoomStatusEnum } from "./enum";
import { Control } from "react-hook-form";

export interface IFlexMixin {
  flexDirection?: "row" | "column";
  justifyContent?: "center" | "flex-start" | "flex-end" | "space-between";
  alignItems?: "center" | "flex-start" | "flex-end";
}
export interface IUser {
  name: string | null;
  emai: string | null;
  password: string | null;
  id: string | null;
}
export interface IUserGame extends IUser {
  role: 0 | 1; // 0-нолик 1-хрестик
}

export interface IWrapper {
  children: JSX.Element | JSX.Element[];
}

export interface ILoginFields {
  email: string;
  password: string;
}
export interface IInput {
  type: string;
  placeholder: string;
}
export interface ILoginInput extends IInput {
  control: Control<ILoginFields>;
  name: "email" | "password";
}
export interface ICRANewRoom {
  name: string;
}
export interface ICRAInput extends IInput {
  control: Control<ICRANewRoom>;
  name: "name";
}
export interface ILoginUser {
  email: string;
  password: string;
}

export interface IButtonAction {
  btnText: string;
  action: () => void;
}
export interface IAction {
  id: string;
  roomID: string;
  userID: string;
  userRole: 0 | 1;
  cellNum: number;
}
export interface IRoom {
  id: string;
  title: string;
  status: RoomStatusEnum;
  users: IUserGame[];
  game: IGame[];
}

export interface IGame {
  action: IAction;
}
