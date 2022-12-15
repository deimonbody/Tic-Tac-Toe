import React, { useState } from "react";

import { joiResolver } from "@hookform/resolvers/joi";
import { createNewRoomSchema, socket } from "@route/common";
import { ICRANewRoom } from "@route/common/interfaces";
import { useAppSelector } from "@route/store/hooks";
import { createPortal } from "react-dom";
import { useForm } from "react-hook-form";

import CreateNewRoomBtn from "../MainPage/Control/Components/CreateNewRoomBtn";
import Modal from "../Modal/Modal";
import { CRAInput } from "../Styled";

interface IProps {
  containerTarget: HTMLElement;
}
export const CreateNewRoom: React.FC<IProps> = ({ containerTarget }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => setIsOpen(false);
  const handleOpen = () => setIsOpen(true);
  const { strings } = useAppSelector((store) => store.userReducer);
  const { user } = useAppSelector((store) => store.userReducer);
  const { control, handleSubmit, reset } = useForm<ICRANewRoom>({
    mode: "onChange",
    defaultValues: {
      name: "",
    },
    resolver: joiResolver(createNewRoomSchema),
  });

  const createNewRoomHandler = (data: ICRANewRoom) => {
    socket.emit(
      "create-new-room",
      JSON.stringify({
        roomName: data.name,
        user,
      }),
    );
    reset();
    handleClose();
  };
  return (
    <>
      <Modal
        onClose={handleClose}
        isOpen={isOpen}
        text={strings.createNewRoom}
        buttonAction={{
          btnText: `${strings.create}`,
          action: handleSubmit(createNewRoomHandler),
        }}
        body={
          <CRAInput
            control={control}
            name="name"
            placeholder="Room name:"
            type="text"
          />
        }
      />
      {createPortal(
        <CreateNewRoomBtn clickHandler={handleOpen} />,
        containerTarget,
      )}
    </>
  );
};
