import { strings } from "@src/common/variables";
import { useAppSelector } from "@src/store/hooks";

export const useLanguage = () => {
  const { currentLanguage } = useAppSelector((store) => store.userReducer);
  strings.setLanguage(currentLanguage);
  return strings;
};
