import { atom } from "recoil";

export const userState = atom({
  key: "user",
  default: {
    id: "",
    username: "",
    email: "",
    onBoarded: false,
  },
});
