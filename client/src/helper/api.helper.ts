import { ILoginUser, IRoom, IUser } from "@src/common/interfaces";
import instance from "@src/config/axios.config";

export const loginUser = async ({
  email,
  password,
}: ILoginUser): Promise<IUser> => {
  const req = await instance.post("/user", { data: { email, password } });
  return req.data.user;
};

export const loadRooms = async (): Promise<IRoom[]> => {
  const req = await instance.get("/rooms");
  return req.data.rooms;
};
