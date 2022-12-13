import { RoomStatusEnum } from "@route/common/enum";
import { IGame, IUserGame } from "@route/common/interfaces";

export interface IInitialState {
  roomId: string | null;
  game: IGame[];
  isGameStarted: boolean;
  roomStatus: RoomStatusEnum;
  users: IUserGame[];
  title: string;
}

export enum GameActions {
  JOINED_TO_ROOM = "JOINED_TO_ROOM",
  JOINED_NEW_USER = "JOINED_NEW_USER",
  LEAVE_GAME = "LEAVE_GAME",
  USER_LEAVED_GAME = "USER_LEAVED_GAME",
}
