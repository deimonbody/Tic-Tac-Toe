import React from "react";
import { IWrapper } from "@route/common/interfaces";
import styled from "styled-components";

const StyledWrapper = styled.div`
  box-sizing: border-box;
  max-width: 1200px;
  padding: 0 20px;
  margin: 0 auto;
  @media screen and (max-width: 1200px) {
    max-width: 992px;
  }
  @media screen and (max-width: 992px) {
    max-width: 768px;
  }
  @media screen and (max-width: 768px) {
    max-width: 576px;
  }
  @media screen and (max-width: 576px) {
    max-width: 100%;
    padding: 0 10px;
  }
`;

export const Wrapper: React.FC<IWrapper> = ({ children }) => (
  <StyledWrapper>{children}</StyledWrapper>
);
