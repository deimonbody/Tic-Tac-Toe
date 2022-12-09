import instance from "../config/axios.config";

export interface ILoginUser {
  email: string;
  password: string;
}
export const loginUser = async ({ email, password }: ILoginUser) => {
  const req = await instance.post("/user", { data: { email, password } });
  console.log(req);
};
