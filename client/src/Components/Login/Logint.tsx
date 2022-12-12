import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "@route/store/hooks";
import { useAuth } from "@route/hooks/isAuth";
import { setUser } from "@route/store/user/actions";
import { PATHES } from "@route/common/enum";
import { LoginInputStyled, LoginTitle, LoginWrapper } from "../Styled/Login";
import { Button } from "../Styled/Common/Button";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useAppDispatch();
  const isAuth = useAuth();
  const navigate = useNavigate();

  const loginHandler = () => {
    dispatch(setUser({ email, password }))
      .unwrap()
      .then(() => {
        toast.success("Succes access");
        navigate(PATHES.MAIN_PAGE);
      })
      .catch((err) => toast.error(err.message));
  };

  useEffect(() => {
    if (isAuth) {
      navigate(PATHES.MAIN_PAGE);
    }
  }, []);

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
