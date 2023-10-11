import { PrismaAdapter } from "@auth/prisma-adapter";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import prisma from "./connect";
import { getServerSession } from "next-auth";

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId:
        "169313336883-nrqcms8stc4maaprk7rbd8oqh44erl8m.apps.googleusercontent.com",
      clientSecret: "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",
    }),
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],
};

export const getAuthSession = () => getServerSession(authOptions);
