import { Button } from "@route/Components/Styled/Common/Button";
import React from "react";

interface IProps {
  clickHandler: () => void;
}
const CreateNewRoomBtn: React.FC<IProps> = ({ clickHandler }) => {
  return (
    <Button onClick={clickHandler} style={{ marginRight: "20px", order: -1 }}>
      Create New Room
    </Button>
  );
};

export default CreateNewRoomBtn;
