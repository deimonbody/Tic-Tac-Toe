import { useAppSelector } from "@route/store/hooks";

export const useRightRoomID = (currentRoomID: string) => {
  const { roomId } = useAppSelector((store) => store.gameReducer);
  return !!roomId && roomId === currentRoomID;
};
