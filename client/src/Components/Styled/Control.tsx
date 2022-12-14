import styled from "styled-components";
import React from "react";
import { Controller } from "react-hook-form";
import { ICRAInput } from "@route/common/interfaces";
import { flexMixin } from "./Common/mixins";
import { LoginInputStyled } from "./Login";

export const ControlWrapper = styled.div`
  ${flexMixin({ flexDirection: "row", alignItems: "center" })}
`;

export const CRAInputStyled = styled(LoginInputStyled)``;

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
