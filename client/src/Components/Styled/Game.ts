import styled from "styled-components";
import { flexMixin } from "./Common/mixins";

export const GameHeader = styled.div`
  ${flexMixin({
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  })};
`;

export const GameUser = styled.p`
  font-size: 1.4rem;
  font-family: ${(props) => props.theme.fonts.medium};
  color: ${(props) => props.theme.colors.black};
`;

export const Versus = styled.p`
  font-size: 1.4rem;
  font-family: ${(props) => props.theme.fonts.bold};
  color: #f84242;
`;

export const GameTitle = styled.p`
  padding: 50px 0;
  font-size: 1.4rem;
  font-family: ${(props) => props.theme.fonts.bold};
  color: ${(props) => props.theme.colors.black};
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
`;
export const GameFieldWrapper = styled.div`
  ${flexMixin({
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  })};
`;
