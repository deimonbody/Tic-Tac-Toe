import styled from "styled-components";
import { flexMixin } from "./Common/mixins";

export const Header = styled.div`
  ${flexMixin({
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  })};
  @media screen and (max-width: 576px) {
    ${flexMixin({
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    })};
  }
  padding-top: 30px;
`;
