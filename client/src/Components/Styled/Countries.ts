import styled from "styled-components";

import { flexMixin } from "./Common/mixins";

export const Countries = styled.div`
  ${flexMixin({ flexDirection: "row", alignItems: "center" })};
  @media screen and (max-width: 768px) {
    margin-top: 30px;
  }
`;
export const CountryLanguage = styled.div`
  width: 25px;
  height: 15px;
  margin-right: 15px;
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
