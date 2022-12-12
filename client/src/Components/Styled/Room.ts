import styled from "styled-components";
import { flexMixin } from "./Common/mixins";

export const RoomWrapper = styled.div`
  ${flexMixin({
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  })}
  border-radius:${(props) => props.theme.borderRadius};
  background-color: #f4f3f3;
  padding: 30px 15px;
  flex: 0 0 250px;
`;
export const RoomTitle = styled.p`
  font-size: 1.2rem;
  font-family: ${(props) => props.theme.fonts.medium};
  color: ${(props) => props.theme.colors.black};
  margin-bottom: 15px;
`;

export const RoomStatus = styled.p`
  color: ${(props) => props.theme.colors.grayText};
  font-family: ${(props) => props.theme.fonts.regular};
  font-size: 1rem;
  margin-bottom: 15px;
`;
