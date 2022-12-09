import React, { useState } from "react";
import { loginUser } from "../../helper/api.helper";
import { Button } from "../Styled/Common/Button";

import { LoginInputStyled, LoginTitle, LoginWrapper } from "../Styled/Login";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loginHandler = () => {
    loginUser({ email, password });
  };
  return (
    <LoginWrapper>
      <LoginTitle>Login</LoginTitle>
      <LoginInputStyled>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email:"
        />
      </LoginInputStyled>
      <LoginInputStyled>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password:"
        />
      </LoginInputStyled>
      <Button onClick={loginHandler}>Enter</Button>
    </LoginWrapper>
  );
};

export default Login;
