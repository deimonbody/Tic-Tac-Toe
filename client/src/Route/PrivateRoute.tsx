import React from "react";

import { PATHES } from "@route/common/enum";
import { Navigate } from "react-router-dom";

interface IProps {
  children: JSX.Element;
  isAuth: boolean;
}
const PrivateRouteHOC: React.FC<IProps> = ({ children, isAuth }) => {
  return isAuth ? children : <Navigate to={PATHES.LOGIN} />;
};

export default PrivateRouteHOC;
