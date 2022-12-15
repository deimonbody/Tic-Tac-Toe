import { CRAButton } from "@route/Components/Styled";
import { useAppSelector } from "@route/store/hooks";
import React from "react";

interface IProps {
  clickHandler: () => void;
}
const CreateNewRoomBtn: React.FC<IProps> = ({ clickHandler }) => {
  const { strings } = useAppSelector((store) => store.userReducer);
  return <CRAButton onClick={clickHandler}>{strings.createNewRoom}</CRAButton>;
};

export default CreateNewRoomBtn;
