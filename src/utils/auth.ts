import { NextAuthOptions, getServerSession } from "next-auth";
// Prisma
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { prisma } from "./connect";
// Providers
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
    }),
  ],
};

// Allows getting user and status on server components and API routes
export const getAuthSession = () => {
  getServerSession(authOptions);
};
