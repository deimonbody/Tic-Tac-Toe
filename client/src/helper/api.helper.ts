import { IUser } from "@route/common/interfaces";
import instance from "@route/config/axios.config";

export interface ILoginUser {
  email: string;
  password: string;
}
export const loginUser = async ({
  email,
  password,
}: ILoginUser): Promise<IUser> => {
  const req = await instance.post("/user", { data: { email, password } });
  return req.data.user;
};
