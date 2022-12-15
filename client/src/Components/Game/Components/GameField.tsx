import { socket } from "@src/common";
import { ICell, IIsGameEndResult, IUserGame } from "@src/common/interfaces";
import {
  GameBlock,
  GameCellValue,
  GameFieldStyled,
  GameTurn,
} from "@src/Components/Styled";
import { GameEnded } from "@src/Components/Styled/Game";
import { getAction, getEndStatus, isGameEnd } from "@src/helper/game.helper";
import { useLanguage } from "@src/hooks/useLanguageChange";
import { useAppSelector } from "@src/store/hooks";
import React, { useEffect, useState } from "react";

const GameField = () => {
  const { gameField, game, roomId, users } = useAppSelector(
    (store) => store.gameReducer,
  );
  const { user } = useAppSelector((store) => store.userReducer);
  const strings = useLanguage();
  const [turnRole, setTurnRole] = useState<0 | 1>(0);
  const [gameEnd, setIsGameEnd] = useState<IIsGameEndResult>({
    isEnd: false,
    winner: null,
  });

  useEffect(() => {
    if (game.length) {
      setTurnRole(game[game.length - 1].action.userRole === 0 ? 1 : 0);
      const resultOfAction = isGameEnd(game, gameField);
      if (resultOfAction.isEnd) {
        setIsGameEnd(resultOfAction);
        socket.emit("end-game", JSON.stringify({ roomId }));
      }
    }
  }, [game]);

  const clickHanlder = (cell: ICell) => {
    if (gameEnd.isEnd) return;
    const currentUser = users.find((el) => el.id === user.id) as IUserGame;
    const action = getAction({
      game,
      currentUser,
      cell,
      users,
      roomId: roomId as string,
    });
    if (action) {
      socket.emit("make-action", JSON.stringify({ action, roomId }));
    }
  };

  return (
    <>
      {gameEnd.isEnd ? (
        <GameEnded>
          {strings.endGame}
          <br />
          {getEndStatus(gameEnd, strings)}
        </GameEnded>
      ) : (
        <>
          <GameTurn userRole={turnRole}>
            {turnRole === 0 ? strings.noughtsTurn : strings.crossTurn}
          </GameTurn>
          <GameFieldStyled>
            {gameField.map((cell) => {
              return (
                <GameBlock onClick={() => clickHanlder(cell)}>
                  {cell.isBusy ? (
                    <GameCellValue userRole={cell.userRole as 0 | 1}>
                      {cell.userRole === 0 ? "0" : "X"}
                    </GameCellValue>
                  ) : null}
                </GameBlock>
              );
            })}
          </GameFieldStyled>
        </>
      )}
    </>
  );
};

export default GameField;
