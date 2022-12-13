import { useAppSelector } from "@route/store/hooks";

export const useRoomGame = () => {
  const { roomId } = useAppSelector((store) => store.gameReducer);
  return Boolean(roomId);
};
