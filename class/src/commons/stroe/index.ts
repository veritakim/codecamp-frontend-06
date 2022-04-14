import { atom } from "recoil";

export const accessTokenState = atom({
  key: "accessTokenState",
  default: ""
})

export const userInfomationState = atom({
  key: "userInfoState",
  default: {
    email: "",
    name: ""
  }
})

