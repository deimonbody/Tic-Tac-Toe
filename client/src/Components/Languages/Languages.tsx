import { LocalizationLanguagesEnum } from "@route/common/enum";
import { languages } from "@route/common/variables";
import { useAppDispatch } from "@route/store/hooks";
import { changeLanguage } from "@route/store/user/actions";
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
