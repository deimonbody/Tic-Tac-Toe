import { IGameUserRole } from "@src/common/interfaces";
import styled from "styled-components";

import { Button } from "./Common/Button";
import { flexMixin } from "./Common/mixins";

export const MainGameHeader = styled.div`
  ${flexMixin({
    flexDirection: "row",
    alignItems: "center",
  })};
  @media screen and (max-width: 992px) {
    ${flexMixin({
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    })};
    padding-bottom: 50px;
  }
`;
export const GameHeader = styled.div`
  ${flexMixin({
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  })};
`;
export const GameUserBlock = styled.div`
  ${flexMixin({ alignItems: "center", justifyContent: "center" })}
`;
export const GameUser = styled.p`
  font-size: 1.4rem;
  font-family: ${(props) => props.theme.fonts.medium};
  color: ${(props) => props.theme.colors.black};
  @media screen and (max-width: 576px) {
    font-size: 1.1rem;
  }
`;

export const Versus = styled.p`
  font-size: 1.4rem;
  font-family: ${(props) => props.theme.fonts.bold};
  color: #f84242;
  @media screen and (max-width: 576px) {
    font-size: 1.1rem;
  }
`;

export const GameTitle = styled.p`
  padding: 50px 0;
  font-size: 1.4rem;
  font-family: ${(props) => props.theme.fonts.bold};
  color: ${(props) => props.theme.colors.black};
  flex-grow: 1;
  @media screen and (max-width: 576px) {
    font-size: 1.1rem;
  }
`;
export const GameFieldStyled = styled.div`
  padding: 50px 0;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 100px);
`;
export const GameBlock = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${(props) => props.theme.colors.white};
  border: 1px solid black;
  position: relative;
  cursor: pointer;
`;
export const GameFieldWrapper = styled.div`
  ${flexMixin({
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  })};
`;
export const GameCellValue = styled.p<IGameUserRole>`
  font-size: 2rem;
  font-family: ${(props) => props.theme.fonts.bold};
  color: ${(props) =>
    props.userRole === 0
      ? props.theme.colors.zeroColor
      : props.theme.colors.xColor};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
export const GameTurn = styled.p<IGameUserRole>`
  padding: 40px 0;
  font-size: 1.3rem;
  font-family: ${(props) => props.theme.fonts.bold};
  color: ${(props) =>
    props.userRole === 0
      ? props.theme.colors.zeroColor
      : props.theme.colors.xColor};
`;
export const GameEnded = styled.p`
  padding: 50px 0;
  font-size: 1.3rem;
  font-family: ${(props) => props.theme.fonts.bold};
  text-align: center;
`;
export const UserRole = styled.p<IGameUserRole>`
  padding-left: 15px;
  font-size: 1.3rem;
  font-family: ${(props) => props.theme.fonts.bold};
  color: ${(props) =>
    props.userRole === 0
      ? props.theme.colors.zeroColor
      : props.theme.colors.xColor};
  @media screen and (max-width: 576px) {
    font-size: 1rem;
  }
`;
export const LeaveRoomBtn = styled(Button)`
  margin-right: 20px;
  @media screen and (max-width: 992px) {
    margin-right: 0;
  }
`;
export const RestartGameBtn = styled(Button)`
  margin-right: 20px;
  @media screen and (max-width: 992px) {
    margin: 20px 0;
  }
`;
export const TimerStyled = styled.p`
  color: ${(props) => props.theme.colors.grayText};
  font-size: 0.9rem;
  margin-left: 15px;
  font-family: ${(props) => props.theme.fonts.medium};
`;
