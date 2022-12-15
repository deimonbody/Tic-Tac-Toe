import { joiResolver } from "@hookform/resolvers/joi";
import { loginSchema, PATHES } from "@src/common";
import { ILoginFields } from "@src/common/interfaces";
import { useAuth } from "@src/hooks/isAuth";
import { useLanguage } from "@src/hooks/useLanguageChange";
import { useAppDispatch } from "@src/store/hooks";
import { setUser } from "@src/store/user/actions";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { Button, LoginInput, LoginTitle, LoginWrapper } from "../Styled";

const Login = () => {
  const strings = useLanguage();
  const dispatch = useAppDispatch();
  const isAuth = useAuth();
  const navigate = useNavigate();
  const { control, handleSubmit, reset } = useForm<ILoginFields>({
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: joiResolver(loginSchema),
  });
  const loginHandler = (data: ILoginFields) => {
    const { email, password } = data;
    dispatch(setUser({ email, password }))
      .unwrap()
      .then(() => {
        toast.success("Succes access");
        navigate(PATHES.MAIN_PAGE);
        reset();
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
      <LoginTitle>{strings.login}</LoginTitle>
      <LoginInput
        control={control}
        name="email"
        placeholder={strings.inpEmail}
        type="text"
      />
      <LoginInput
        control={control}
        name="password"
        placeholder={strings.inpPassword}
        type="text"
      />
      <Button onClick={handleSubmit(loginHandler)}>{strings.enter}</Button>
    </LoginWrapper>
  );
};

export default Login;
