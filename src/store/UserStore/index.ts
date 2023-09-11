import { defineStore } from "pinia";
import { IUser } from "~/models/User";

export const useUserStore = defineStore("user", () => {
  const user = ref<IUser | null>(null);

  function handleUserInfo(userInfo: IUser) {
    console.log("aqui");
    user.value = userInfo;
  }

  return { user, handleUserInfo };
});
