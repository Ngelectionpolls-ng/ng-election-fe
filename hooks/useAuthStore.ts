"use client";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AuthState {
  token: string;
  isLoggedIn: boolean;
  userDetails: Record<string, any>;
}

interface AuthActions {
  setToken: (token: string) => void;
  setisLoggedIn: () => void;
  setUserDetails: (data: any) => void;
  handleLogOut: () => void;
}

const userDetails = {};

const initialState = {
  token: "",
  isLoggedIn: false,
  userDetails,
};

export const useAuth = create<AuthState & AuthActions>()(
  persist(
    (set) => ({
      ...initialState,
      setToken: (token: string) => set(() => ({ token })),
      setisLoggedIn: () => set({ isLoggedIn: true }),
      setUserDetails: (data: any) => set(() => ({ userDetails: data })),
      handleLogOut: () => {
        set(initialState);
      },
    }),
    {
      name: "ng-election-portal",
    }
  )
);
