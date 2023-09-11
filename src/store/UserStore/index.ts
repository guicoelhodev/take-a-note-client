import { defineStore } from "pinia";
import { IUser } from "~/models/User";

export const useUserStore = defineStore('user', () => {

  const user = ref<IUser | null>(null);
  const count = ref(0)

  function handleUserInfo (userInfo: IUser) {
    user.value = userInfo;
    console.log(user.value)
  };

  function handleCount (){
    count.value ++;
  }

  return { user, handleUserInfo, count, handleCount };
})