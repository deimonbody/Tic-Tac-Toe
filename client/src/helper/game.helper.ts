import {
  ILastActionFromCurrentUser,
  IGetAction,
  IIsGameEndResult,
  IGame,
  IGetUserNameStatus,
  ICell,
} from "@route/common/interfaces";
import { v4 as uuidv4 } from "uuid";

export const isLastActionFromCurrentUser = ({
  game,
  currentUserId,
}: ILastActionFromCurrentUser) => {
  if (!game.length) return false;
  return game[game.length - 1].action.userID === currentUserId;
};

export const getAction = ({
  game,
  currentUser,
  cell,
  users,
  roomId,
}: IGetAction) => {
  const isPossibleToMakeAction = isLastActionFromCurrentUser({
    game,
    currentUserId: currentUser.id as string,
  });
  if (!game.length && currentUser.role === 1) return; // if the game start and user chrestik try to do action
  if (!cell.isBusy && !isPossibleToMakeAction) {
    let action = {};
    if (!game.length) {
      action = {
        id: uuidv4(),
        cellNum: cell.cellNum,
        roomID: roomId as string,
        userRole: 0,
        userID: users.find((gameUser) => gameUser.role === 0)?.id as string,
      };
    } else {
      const userRole = game[game.length - 1].action.userRole === 0 ? 1 : 0;
      action = {
        id: uuidv4(),
        cellNum: cell.cellNum,
        roomID: roomId as string,
        userRole,
        userID: users.find((gameUser) => gameUser.role === userRole)
          ?.id as string,
      };
    }
    return action;
  }
};

export const isGameEnd = (game: IGame[], gameField: ICell[]) => {
  const result: IIsGameEndResult = {
    isEnd: false,
    winner: null,
  };
  const combinations = [
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  const actions = game.map((el) => el.action);
  const chrestikActions = actions
    .filter((action) => action.userRole === 1)
    .map((action) => action.cellNum);

  const nulickActions = actions
    .filter((action) => action.userRole === 0)
    .map((action) => action.cellNum);
  combinations.forEach((el) => {
    if (el.every((combination) => chrestikActions.includes(combination))) {
      result.isEnd = true;
      result.winner = 1;
      return;
    }
    if (el.every((combination) => nulickActions.includes(combination))) {
      result.isEnd = true;
      result.winner = 0;
      return;
    }
  });
  // if no one winned and all cells are busied - it`s draw
  if (!result.isEnd && gameField.every((cell) => cell.isBusy)) {
    result.isEnd = true;
  }
  return result;
};

export const userNameStatus = ({
  isGameEnded,
  users,
  userIndex,
}: IGetUserNameStatus) => {
  if (isGameEnded && users[userIndex] === undefined) {
    return "User Leaved The room";
  }
  if (users[userIndex] === undefined) return "Waiting for user...";
  return users[userIndex].name;
};

export const getEndStatus = (result: IIsGameEndResult) => {
  if (result.isEnd && !result.winner) {
    return "It`s a draw";
  }
  if (result.winner === 0) {
    return "Winner is:Noughts";
  }
  return "Winner is:Crosses";
};
