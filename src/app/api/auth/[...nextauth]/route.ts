import NextAuth from "next-auth";
import { Account, User as AuthUser } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import User from "@/models/User";
import connect from "@/untils/db";

export const authOptions: any = {
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials: any) {
        await connect();
        try {
          const user = await User.findOne({ email: credentials.email });
          if (user) {
            const ismatched = await bcrypt.compare(
              credentials.password,
              user.password
            );
            if (ismatched) {
              return user;
            } else {
              return "wrong password";
            }
          } else {
            return "user not found";
          }
        } catch (error: any) {
          throw new Error(error);
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
        token.image = user.image;
      }
      return token;
    },
    async session(session:any, token:any) {
      if (session.session.user) {
        session.session.user.role = session.token.role;
        session.session.user.image = session.token.image;
      }
      return session;
    },
  },
};
export const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
