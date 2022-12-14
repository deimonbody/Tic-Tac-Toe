import { io } from "socket.io-client";

export const BASE_URL = "http://localhost:9999";
export const socket = io(BASE_URL);
export const standartGameField = [
  {
    cellNum: 0,
    isBusy: false,
    userRole: null,
  },
  {
    cellNum: 1,
    isBusy: false,
    userRole: null,
  },
  {
    cellNum: 2,
    isBusy: false,
    userRole: null,
  },
  {
    cellNum: 3,
    isBusy: false,
    userRole: null,
  },
  {
    cellNum: 4,
    isBusy: false,
    userRole: null,
  },
  {
    cellNum: 5,
    isBusy: false,
    userRole: null,
  },
  {
    cellNum: 6,
    isBusy: false,
    userRole: null,
  },
  {
    cellNum: 7,
    isBusy: false,
    userRole: null,
  },
  {
    cellNum: 8,
    isBusy: false,
    userRole: null,
  },
];
