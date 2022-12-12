import React, { useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "@route/store/hooks";
import { useAuth } from "@route/hooks/isAuth";
import { setUser } from "@route/store/user/actions";
import { PATHES } from "@route/common/enum";
import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import { loginSchema } from "@route/common/schemas";
import { ILoginFields } from "@route/common/interfaces";
import { LoginInput, LoginTitle, LoginWrapper } from "../Styled/Login";
import { Button } from "../Styled/Common/Button";

const Login = () => {
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
      <LoginTitle>Login</LoginTitle>
      <LoginInput
        control={control}
        name="email"
        placeholder="email:"
        type="text"
      />
      <LoginInput
        control={control}
        name="password"
        placeholder="password:"
        type="text"
      />
      <Button onClick={handleSubmit(loginHandler)}>Enter</Button>
    </LoginWrapper>
  );
};

export default Login;
