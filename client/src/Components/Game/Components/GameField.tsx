import { socket } from "@src/common";
import { RoomStatusEnum } from "@src/common/enum";
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
import React, { useEffect } from "react";

interface IProps {
  changeTurnRole: (role: 0 | 1) => void;
  turnRole: 0 | 1;
  setIsGameEnd: (result: IIsGameEndResult) => void;
  gameEnd: IIsGameEndResult;
}
const GameField: React.FC<IProps> = ({
  changeTurnRole,
  turnRole,
  setIsGameEnd,
  gameEnd,
}) => {
  const { gameField, game, roomId, users, isGameEnded, roomStatus } =
    useAppSelector((store) => store.gameReducer);
  const { user } = useAppSelector((store) => store.userReducer);
  const strings = useLanguage();

  useEffect(() => {
    if (game.length) {
      changeTurnRole(game[game.length - 1].action.userRole === 0 ? 1 : 0);
      const resultOfAction = isGameEnd(game, gameField);
      if (resultOfAction.isEnd) {
        setIsGameEnd(resultOfAction);
        socket.emit("end-game", JSON.stringify({ roomId }));
      }
    }
  }, [game]);

  useEffect(() => {
    if (roomStatus === RoomStatusEnum.INPROCESS) {
      setIsGameEnd({ isEnd: false, winner: null });
      changeTurnRole(0);
    }
  }, [roomStatus]);

  const clickHanlder = (cell: ICell) => {
    if (isGameEnded) return;
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
      {isGameEnded ? (
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
