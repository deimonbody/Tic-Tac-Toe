import styled from "styled-components";

export const UserName = styled.p`
  color: ${(props) => props.theme.colors.black};
  font-family: ${(props) => props.theme.fonts.bold};
  font-size: 1.2rem;
  @media screen and (max-width: 576px) {
    padding-bottom: 20px;
  }
`;
