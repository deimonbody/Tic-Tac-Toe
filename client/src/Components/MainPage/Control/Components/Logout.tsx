import { Button } from "@src/Components/Styled/Common/Button";
import { useLanguage } from "@src/hooks/useLanguageChange";
import React from "react";

const Logout = () => {
  const strings = useLanguage();
  return <Button>{strings.logout}</Button>;
};

export default Logout;
