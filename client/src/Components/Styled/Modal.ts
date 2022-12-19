import styled from "styled-components";

import { flexMixin } from "./Common/mixins";

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(144, 143, 143, 0.6);
  z-index: 1000;
`;

export const ModalContainer = styled.div`
  background-color: ${(props) => props.theme.colors.white};
  border-radius: ${(props) => props.theme.borderRadius};
  ${flexMixin({
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  })};
  padding: 20px 30px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 480px;
`;

export const ModalTitle = styled.p`
  color: ${(props) => props.theme.colors.black};
  font-family: ${(props) => props.theme.fonts.bold};
  font-size: 1.1rem;
  margin-bottom: 20px;
`;

export const ModalControl = styled.div`
  ${flexMixin({
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  })};
  align-self: flex-end;
`;
