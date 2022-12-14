import { IRoom } from "@route/common/interfaces";

export interface IInitialState {
  rooms: IRoom[];
  isLoading: boolean;
}

export enum RoomActions {
  LOAD_ROOMS = "LOAD_ROOMS",
  SET_ROOMS_LOADING = "SET_ROOMS_LOADING",
  ADD_NEW_ROOM = "ADD_NEW_ROOM",
  UPDATE_ROOMS_LIST = "UPDATE_ROOMS_LIST",
}
