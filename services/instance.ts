import axios from "axios";
import { signOut } from "next-auth/react";

export const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASEURL,
  timeout: 35000,
});

instance.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error?.response?.status;

    if (status === 401) {
      signOut({ callbackUrl: "/auth/login" });
    } else if (status === 412) {
      console.error("Precondition Failed: ", error.response.data);
    }

    return Promise.reject(error);
  }
);
