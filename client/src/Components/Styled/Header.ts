import styled from "styled-components";
import { flexMixin } from "./Common/mixins";

export const Header = styled.div`
  ${flexMixin({
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  })};
  padding-top: 30px;
`;
