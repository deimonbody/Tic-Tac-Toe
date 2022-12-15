import { CRAButton } from "@route/Components/Styled";
import { useLanguage } from "@route/hooks/useLanguageChange";
import React from "react";

interface IProps {
  clickHandler: () => void;
}
const CreateNewRoomBtn: React.FC<IProps> = ({ clickHandler }) => {
  const strings = useLanguage();
  return <CRAButton onClick={clickHandler}>{strings.createNewRoom}</CRAButton>;
};

export default CreateNewRoomBtn;
