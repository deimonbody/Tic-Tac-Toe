import { strings } from "@route/common/variables";
import { useAppSelector } from "@route/store/hooks";

export const useLanguage = () => {
  const { currentLanguage } = useAppSelector((store) => store.userReducer);
  strings.setLanguage(currentLanguage);
  return strings;
};
