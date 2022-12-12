import { io } from "socket.io-client";

export const BASE_URL = "http://localhost:9999";
export const socket = io(BASE_URL);
