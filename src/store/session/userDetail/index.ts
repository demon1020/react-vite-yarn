import { create } from "zustand";
import { persist } from "zustand/middleware";
import { User } from "../../../types/auth";

type State = {
  userDetails?: User;
};

const STORAGE_KEY = "ULTISELL-USER-DETAIL";

const useUserDetailStore = create(
  persist<State>(
    () => ({
      userDetails: undefined,
    }),
    {
      name: STORAGE_KEY,
      getStorage: () => localStorage,
    },
  ),
);

const selectors = {
  useUserDetails: () => useUserDetailStore.getState().userDetails,
};

const actions = {
  setUserDetails: (userDetails: User) => {
    const set = useUserDetailStore.setState;
    set((state) => {
      state.userDetails = userDetails;
      return { ...state };
    });
  },
  getFullName: () => {
    const user = selectors.useUserDetails();
    return `${user?.firstName} ${user?.lastName}`;
  },
};

/**
 * **UserDetail Store**
 *
 * this store is used to store UserDetail tokens
 *
 * **"$"** is a convention to indicate that this is a store
 */
const $userDetail = {
  actions,
  selectors,
} as const;

export default $userDetail;
