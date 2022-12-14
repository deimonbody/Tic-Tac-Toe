import React from "react";
import { Navigate } from "react-router-dom";

import { PATHES } from "@route/common/enum";

interface IProps {
  children: JSX.Element;
  isRoom: boolean;
}
const GameProtecteHOC: React.FC<IProps> = ({ children, isRoom }) => {
  return isRoom ? children : <Navigate to={PATHES.MAIN_PAGE} />;
};

export default GameProtecteHOC;
