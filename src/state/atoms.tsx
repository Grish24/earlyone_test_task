import { atom } from "recoil";

export const UserInfoState = atom({
  key: "userInfoState",
  default: { name: "Name", education: "Education", imageUrl: "" },
});
