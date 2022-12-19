import { ICRAInput } from "@src/common/interfaces";
import React from "react";
import { Controller } from "react-hook-form";
import styled from "styled-components";

import { Button } from "./Common/Button";
import { flexMixin } from "./Common/mixins";
import { LoginInputStyled } from "./Login";

export const ControlWrapper = styled.div`
  ${flexMixin({ flexDirection: "row", alignItems: "center" })};
  margin-right: 30px;
  @media screen and (max-width: 768px) {
    margin-right: 0;
    ${flexMixin({
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    })};
  }
`;

export const CRAInputStyled = styled(LoginInputStyled)``;
export const CRAButton = styled(Button)`
  margin-right: 20px;
  order: -1;
  @media screen and (max-width: 768px) {
    margin-right: 0px;
    margin-bottom: 10px;
  }
`;
export const CRAInput: React.FC<ICRAInput> = ({
  control,
  name,
  type,
  placeholder,
}) => (
  <Controller
    control={control}
    name={name}
    render={({ field: { value, onChange, ref }, fieldState: { error } }) => (
      <CRAInputStyled>
        <input
          value={value}
          onChange={onChange}
          ref={ref}
          placeholder={placeholder}
          type={type}
        />
        {error && <p className="error">{error.message}</p>}
      </CRAInputStyled>
    )}
  />
);
