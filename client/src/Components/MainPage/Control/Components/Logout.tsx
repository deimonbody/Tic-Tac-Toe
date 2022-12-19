import { socket } from "@src/common";
import { Button } from "@src/Components/Styled/Common/Button";
import { useLanguage } from "@src/hooks/useLanguageChange";
import { useAppDispatch, useAppSelector } from "@src/store/hooks";
import { logoutUser } from "@src/store/user/actions";
import React from "react";

const Logout = () => {
  const strings = useLanguage();
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((store) => store.userReducer);
  const logoutHandler = () => {
    dispatch(logoutUser());
    socket.emit(JSON.stringify({ currentUser: user }));
  };
  return <Button onClick={logoutHandler}>{strings.logout}</Button>;
};

export default Logout;
