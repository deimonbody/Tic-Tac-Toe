import LocalizedStrings from "react-localization";
import { io } from "socket.io-client";

import Britain from "../images/en.png";
import Spanish from "../images/spa.png";
import Ukraine from "../images/uk.png";
import { LocalizationLanguagesEnum } from "./enum";
import { ILanguagesString } from "./interfaces";

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
export const standartUser = {
  name: null,
  password: null,
  email: null,
  id: null,
  isOnline: false,
  socketID: null,
};
export const strings = new LocalizedStrings<ILanguagesString>({
  en: {
    login: "Login",
    user: "User",
    createNewRoom: "Create New Room",
    logout: "Logout",
    enter: "Enter",
    noRooms: "There are no rooms...",
    close: "Close",
    create: "Create",
    roomName: "Room Name",
    leaveRoom: "Leave Room",
    waitingForUser: "Waiting for user",
    userLeavedRoom: "User Leaved The Room",
    draw: "It`s a draw",
    winnerIsNoughts: "Winner is:Noughts",
    winnerIsCross: "Winner is:Crosses",
    noughtsTurn: "Noughts Turn",
    crossTurn: "Crosses Turn",
    endGame: "The game is ended",
    join: "Join",
    gameFinished: "Game Finished",
    waitingUsers: "Waiting users:",
    gameStarted: "Game has been started",
    inpEmail: "Email:",
    inpPassword: "Password:",
    inpRoomName: "Room:",
    noName: "No name",
    restartGame: "Restart Game",
  },
  uk: {
    login: "Логін",
    user: "Юзер",
    createNewRoom: "Створити нову кімнату",
    logout: "Вийти",
    enter: "Увійти",
    noRooms: "Тут немає жодних кімнат...",
    close: "Закрити",
    create: "Створити",
    roomName: "Назва кімнати",
    leaveRoom: "Покинути кімнату",
    waitingForUser: "Очікуємо гравця",
    userLeavedRoom: "Юзер покинув кімнату",
    draw: "Нічия",
    winnerIsNoughts: "Переможець:Нолик",
    winnerIsCross: "Переможець:Хрестик",
    noughtsTurn: "Черга нолика",
    crossTurn: "Черга хрестика",
    endGame: "Гру закінчено",
    join: "Приєднатися",
    gameFinished: "Гра завершилась",
    waitingUsers: "Очікування на під'єднання:",
    gameStarted: "Гра розпочалася",
    inpEmail: "Пошта:",
    inpPassword: "Пароль:",
    inpRoomName: "Кімната:",
    noName: "Невідомий",
    restartGame: "Почати заново",
  },
  spa: {
    login: "Acceso",
    user: "Usuario",
    createNewRoom: "Crear nueva habitación",
    logout: "Cerrar sesión",
    enter: "Ingresar",
    noRooms: "No hay habitaciones...",
    close: "Cerca",
    create: "Crear",
    roomName: "Nombre de la habitación",
    leaveRoom: "Dejar la habitación",
    waitingForUser: "Esperando al usuario",
    userLeavedRoom: "El usuario sale de la habitación",
    draw: "Su Sorteo",
    winnerIsNoughts: "La ganadora es: ceros",
    winnerIsCross: "La ganadora es: cruces",
    noughtsTurn: "Turno de ceros",
    crossTurn: "Turno de cruces",
    endGame: "El juego ha terminado",
    join: "Unirse",
    gameFinished: "Juego terminado",
    waitingUsers: "Usuarios en espera:",
    gameStarted: "El juego ha sido iniciado",
    inpEmail: "Email:",
    inpPassword: "Clave:",
    inpRoomName: "Habitación:",
    noName: "Sin nombre",
    restartGame: "Reinicia el juego",
  },
});

export const languages = [
  { code: LocalizationLanguagesEnum.UKRAINE, img: Ukraine },
  { code: LocalizationLanguagesEnum.ENGLISH, img: Britain },
  { code: LocalizationLanguagesEnum.SPANISH, img: Spanish },
];
