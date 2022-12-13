import { GameBlock, GameFieldStyled } from "@route/Components/Styled";
import React from "react";

const GameField = () => {
  return (
    <GameFieldStyled>
      <GameBlock />
      <GameBlock />
      <GameBlock />
      <GameBlock />
      <GameBlock />
      <GameBlock />
      <GameBlock />
      <GameBlock />
      <GameBlock />
    </GameFieldStyled>
  );
};

export default GameField;
