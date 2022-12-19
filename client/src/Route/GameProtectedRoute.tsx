import { PATHES } from "@src/common/enum";
import { useRightRoomID } from "@src/hooks/isRightRoomID";
import React from "react";
import { Navigate, useParams } from "react-router-dom";

interface IProps {
  children: JSX.Element;
  isRoom: boolean;
}
const GameProtecteHOC: React.FC<IProps> = ({ children, isRoom }) => {
  const { id } = useParams();
  const isRightRoom = useRightRoomID(id as string);
  if (isRoom && !isRightRoom) {
    return <Navigate to={PATHES.MAIN_PAGE} />;
  }
  return isRoom ? children : <Navigate to={PATHES.MAIN_PAGE} />;
};

export default GameProtecteHOC;
