import React from "react";

import { IButtonAction } from "@route/common/interfaces";

import { useLanguage } from "@route/hooks/useLanguageChange";
import {
  Button,
  ModalContainer,
  ModalControl,
  ModalTitle,
  ModalWrapper,
} from "../Styled";

interface IProps {
  text: string;
  isOpen: boolean;
  onClose: () => void;
  buttonAction: IButtonAction;
  body?: JSX.Element | JSX.Element[];
}
const Modal: React.FC<IProps> = ({
  text,
  isOpen,
  onClose,
  buttonAction,
  body,
}) => {
  const strings = useLanguage();
  if (!isOpen) return null;
  return (
    <ModalWrapper>
      <ModalContainer>
        <ModalTitle>{text}</ModalTitle>
        {body}
        <ModalControl>
          {buttonAction.btnText ? (
            <Button onClick={buttonAction.action}>
              {buttonAction.btnText}
            </Button>
          ) : null}
          <Button onClick={onClose} style={{ marginLeft: "20px" }}>
            {strings.close}
          </Button>
        </ModalControl>
      </ModalContainer>
    </ModalWrapper>
  );
};

export default Modal;
