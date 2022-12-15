import { useAppSelector } from "@src/store/hooks";

export const useRightRoomID = (currentRoomID: string) => {
  const { roomId } = useAppSelector((store) => store.gameReducer);
  return !!roomId && roomId === currentRoomID;
};
