import { LocalizationLanguagesEnum } from "@src/common/enum";
import { languages } from "@src/common/variables";
import { useAppDispatch } from "@src/store/hooks";
import { changeLanguage } from "@src/store/user/actions";
import React from "react";

import { Countries, CountryLanguage } from "../Styled";

export const Languages = () => {
  const dispatch = useAppDispatch();
  const setLanguageHanlder = (code: LocalizationLanguagesEnum) => {
    dispatch(changeLanguage(code));
  };
  return (
    <Countries>
      {languages.map((el) => {
        return (
          <CountryLanguage
            onClick={() => setLanguageHanlder(el.code)}
            key={el.code}
          >
            <img src={el.img} alt={`${el.code} flag`} />
          </CountryLanguage>
        );
      })}
    </Countries>
  );
};
