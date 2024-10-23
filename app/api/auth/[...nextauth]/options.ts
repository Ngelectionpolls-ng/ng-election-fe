import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";
import { NextAuthOptions, User } from "next-auth";
import { JWT } from "next-auth/jwt";
import { Account, Profile } from "next-auth";
import { CustomUser } from '@/types/types';

export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "Email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials): Promise<CustomUser | null> {
        const baseUrl = process.env.NEXT_PUBLIC_BASEURL;

        if (!credentials?.email || !credentials?.password) {
          throw new Error(
            "Missing credentials. Please provide both email and password."
          );
        }

        try {
          const res = await axios.post(
            `${baseUrl}/auth/login`,
            {
              email: credentials.email,
              password: credentials.password,
            },
            {
              headers: { "Content-Type": "application/json" },
            }
          );

          const { token, ...user } = res.data;
          if (res.status === 201 && user) {
            return { ...user, token };
          } else {
            throw new Error(
              "Authorization failed. Invalid status or user data."
            );
          }
        } catch (error: any) {
          if (error.response) {
            if (error.response.status === 401) {
              throw new Error("Invalid credentials. Please try again.");
            } else if (error.response.status >= 500) {
              throw new Error("Server error. Please try again later.");
            } else {
              throw new Error(
                `Unexpected error: ${
                  error.response.data?.message || "An error occurred."
                }`
              );
            }
          } else if (error.request) {
            throw new Error(
              "No response from the server. Please check your internet connection."
            );
          } else {
            throw new Error(`Unexpected error: ${error.message}`);
          }
        }
      },
    }),
  ],
  pages: {
    signIn: "/auth/login",
    error: "/auth/error",
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({
      token,
      user,
    }: {
      token: JWT;
      user?: CustomUser | User;
      account?: Account | null;
      profile?: Profile | undefined;
      isNewUser?: boolean;
      trigger?: "signIn" | "signUp" | "update";
    }): Promise<JWT> {
      if (user && "token" in user) {
        token = { ...token, ...user };
      }
      return token;
    },
    async session({ session, token }: { session: any; token: JWT }) {
      session.user = token;
      return session;
    },
  },
};
