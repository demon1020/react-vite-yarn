import { create } from "zustand";
import { persist } from "zustand/middleware";
import { EmailVerificationTokens, Tokens } from "../../types/auth";

const STORAGE_KEY = "ULTISELL-SESSION";

type State = {
  id?: string;
  isAuthenticated: boolean;
  tokens?: Tokens;
  emailVerificationToken?: EmailVerificationTokens;
};

const useSessionStore = create(
  persist<State>(
    () => ({
      isAuthenticated: false,
    }),
    {
      name: STORAGE_KEY,
      getStorage: () => localStorage,
    },
  ),
);

const selectors = {
  useIsAuthenticated: () => useSessionStore.getState().isAuthenticated,
};

const actions = {
  setSession: ({ tokens, id }: { id: string; tokens: Tokens }) => {
    const set = useSessionStore.setState;
    set((state) => {
      state.tokens = tokens;
      state.id = id;
      state.isAuthenticated = true;
      return { ...state };
    });
  },
  setIsAuthenticated: () => {
    useSessionStore.setState((state) => ({ ...state, isAuthenticated: true }));
  },
  clearSession: () => {
    useSessionStore.setState((state) => ({
      ...state,
      isAuthenticated: false,
      tokens: undefined,
      id: undefined,
    }));
  },

  setEmailVerificationToken: (
    emailVerificationTokens: EmailVerificationTokens,
  ) => {
    useSessionStore.setState((state) => ({
      ...state,
      emailVerificationToken: emailVerificationTokens,
    }));
  },

  getEmailVerificationToken: () =>
    useSessionStore.getState().emailVerificationToken?.email_verification_token,

  getTokens: () => useSessionStore.getState().tokens,
  getToken: () => useSessionStore.getState().tokens?.accessToken,
};

/**
 * **Session Store**
 *
 * this store is used to store Session tokens
 *
 * **"$"** is a convention to indicate that this is a store
 */

const $session = {
  actions,
  selectors,
} as const;

export default $session;
