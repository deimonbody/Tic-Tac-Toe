import { PATHES } from "@src/common/enum";
import React from "react";
import { Navigate } from "react-router-dom";

interface IProps {
  children: JSX.Element;
  isAuth: boolean;
}
const PrivateRouteHOC: React.FC<IProps> = ({ children, isAuth }) => {
  return isAuth ? children : <Navigate to={PATHES.LOGIN} />;
};

export default PrivateRouteHOC;
