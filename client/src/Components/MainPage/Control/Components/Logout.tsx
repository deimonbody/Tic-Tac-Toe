import { Button } from "@route/Components/Styled/Common/Button";
import { useLanguage } from "@route/hooks/useLanguageChange";
import React from "react";

const Logout = () => {
  const strings = useLanguage();
  return <Button>{strings.logout}</Button>;
};

export default Logout;
