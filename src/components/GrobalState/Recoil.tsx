import { atom } from "recoil";
export const UserColor = atom({
  key: "userColor",
  default: { color: "", paleColor: "", circle: "" },
});
export const GETURL = atom({
  key: "GETURL",
  default: "0",
});
export const ID = atom({
  key: "ID",
  default: "",
});
export const UserName = atom({
  key: "UserName",
  default: "",
});
