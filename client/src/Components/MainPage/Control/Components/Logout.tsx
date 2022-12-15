import { Button } from "@route/Components/Styled/Common/Button";
import { useAppSelector } from "@route/store/hooks";
import React from "react";

const Logout = () => {
  const { strings } = useAppSelector((store) => store.userReducer);
  return <Button>{strings.logout}</Button>;
};

export default Logout;
