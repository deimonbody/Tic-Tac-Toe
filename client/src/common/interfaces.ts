export interface IFlexMixin {
  flexDirection?: "row" | "column";
  justifyContent?: "center" | "flex-start" | "flex-end" | "space-between";
  alignItems?: "center" | "flex-start" | "flex-end";
}
export interface IUser {
  name: string | null;
  emai: string | null;
  password: string | null;
  id: string | null;
}
export interface IUserGame extends IUser {
  role: 0 | 1; // 0-нолик 1-хрестик
}
