import { atom, selector } from "recoil";
import { getAccessToken } from "../library/getAccessToken";

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

export const restoreAccessTokenLoadable = selector({
  key: "restoreAccessTokenLoadable",
  get: async () => {
    const newAccessToken = await getAccessToken();
    return newAccessToken;
  },
});

