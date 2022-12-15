import { ILoginInput } from "@src/common/interfaces";
import React from "react";
import { Controller } from "react-hook-form";
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
  position: relative;
  input {
    font-family: ${(proprs) => proprs.theme.fonts.medium};
    font-size: 0.8rem;
    padding: 10px 10px 10px 15px;
    width: 100%;
    border-radius: ${(props) => props.theme.borderRadius};
    outline: none;
  }
  .error {
    font-family: ${(props) => props.theme.fonts.bold};
    font-size: 0.8rem;
    position: absolute;
    color: #e73b3b;
    left: 0;
    bottom: -25px;
  }
  margin-bottom: 40px;
  align-self: stretch;
`;

export const LoginInput: React.FC<ILoginInput> = ({
  control,
  name,
  type,
  placeholder,
}) => (
  <Controller
    control={control}
    name={name}
    render={({ field: { onChange, value, ref }, fieldState: { error } }) => (
      <LoginInputStyled>
        <input
          name={name}
          onChange={onChange}
          value={value}
          ref={ref}
          type={type}
          placeholder={placeholder}
        />
        {error && <p className="error">{error.message}</p>}
      </LoginInputStyled>
    )}
  />
);
