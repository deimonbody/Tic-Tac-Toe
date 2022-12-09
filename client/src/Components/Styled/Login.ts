import styled from "styled-components";
import { flexMixin } from "./Common/mixins";

export const LoginWrapper = styled.div`
  ${flexMixin({
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  })}
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 320px;
`;
export const LoginTitle = styled.p`
  color: ${(props) => props.theme.colors.black};
  font-size: 1.6rem;
  font-family: ${(props) => props.theme.fonts.bold};
  margin-bottom: 15px;
`;

export const LoginInputStyled = styled.div`
  input {
    font-family: ${(proprs) => proprs.theme.fonts.medium};
    font-size: 0.8rem;
    padding: 10px 10px 10px 15px;
    width: 100%;
    border-radius: ${(props) => props.theme.borderRadius};
    outline: none;
  }
  margin-bottom: 20px;
  align-self: stretch;
`;
