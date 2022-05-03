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

export const visitedPageState = atom({
  key: "visitedPageState",
  default: "/"
})

export const myBasketCounts = atom({
  key: "myBasketCounts",
  default: 0
})

export const myTodayBasket = atom({
  key: "myTodayBasket",
  default: false
}) 