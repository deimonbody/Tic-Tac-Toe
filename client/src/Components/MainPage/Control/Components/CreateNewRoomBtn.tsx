import { CRAButton } from "@src/Components/Styled";
import { useLanguage } from "@src/hooks/useLanguageChange";
import React from "react";

interface IProps {
  clickHandler: () => void;
}
const CreateNewRoomBtn: React.FC<IProps> = ({ clickHandler }) => {
  const strings = useLanguage();
  return <CRAButton onClick={clickHandler}>{strings.createNewRoom}</CRAButton>;
};

export default CreateNewRoomBtn;
