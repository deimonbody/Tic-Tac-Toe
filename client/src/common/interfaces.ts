import { Control } from "react-hook-form";
import { LocalizedStrings } from "react-localization";
import { RoomStatusEnum } from "./enum";

export interface IFlexMixin {
  flexDirection?: "row" | "column";
  justifyContent?: "center" | "flex-start" | "flex-end" | "space-between";
  alignItems?: "center" | "flex-start" | "flex-end";
}
export interface IUser {
  name: string | null;
  email: string | null;
  password: string | null;
  id: string | null;
  isOnline: boolean;
  socketID: null | string;
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
  isGameEnded: boolean;
}

export interface IGame {
  action: IAction;
}

export interface ICell {
  cellNum: number;
  isBusy: boolean;
  userRole: null | 0 | 1;
}

export interface ILastActionFromCurrentUser {
  game: IGame[];
  currentUserId: string;
}

export interface IGetAction {
  game: IGame[];
  currentUser: IUserGame;
  cell: ICell;
  users: IUserGame[];
  roomId: string;
}
export interface IGameUserRole {
  userRole: 0 | 1;
}
export interface IIsGameEndResult {
  isEnd: boolean;
  winner: null | 0 | 1;
}

export interface IGetUserNameStatus {
  isGameEnded: boolean;
  users: IUserGame[];
  userIndex: number;
  strings: LocalizedStrings<ILanguagesString>;
}

export interface ILanguagesString {
  login: string;
  user: string;
  createNewRoom: string;
  logout: string;
  enter: string;
  noRooms: string;
  close: string;
  create: string;
  roomName: string;
  leaveRoom: string;
  waitingForUser: string;
  userLeavedRoom: string;
  draw: string;
  winnerIsNoughts: string;
  winnerIsCross: string;
  noughtsTurn: string;
  crossTurn: string;
  endGame: string;
  join: string;
  gameFinished: string;
  waitingUsers: string;
  gameStarted: string;
  inpEmail: string;
  inpPassword: string;
  inpRoomName: string;
}
