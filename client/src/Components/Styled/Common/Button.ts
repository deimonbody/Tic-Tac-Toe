import styled from "styled-components";

export const Button = styled.div`
  border-radius: ${(props) => props.theme.borderRadius};
  font-family: ${(props) => props.theme.fonts.bold};
  text-align: center;
  padding: 8px 30px;
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.purpleColor};
  display: flex;
  flex-direction: column;
  align-self: center;
  justify-content: center;
  cursor: pointer;
  font-size: 0.9rem;
`;
