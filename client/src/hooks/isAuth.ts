import { useAppSelector } from "@src/store/hooks";

export const useAuth = () => {
  const { user, isLoading } = useAppSelector((store) => store.userReducer);
  if (!isLoading && user.name) {
    return true;
  }
  return false;
};
