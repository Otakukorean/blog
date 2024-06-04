import NextAuth, { Session } from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter";

import { db } from "@/lib/db";
import authConfig from "@/auth.config";
import { getUserById } from "@/data/user";
import { UserRole } from "@prisma/client";
import { JWT } from "next-auth/jwt";

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,

} = NextAuth({
  pages: {
    signIn: "/",
  },

  callbacks: {
    async signIn({ user, account }) {
      // Allow OAuth without email verification
      if (account?.provider !== "credentials") return true;

      return true;
    },
    async session({ token , session } : any )   {
      if (token.sub && session.user) {
        session.user.id = token.sub;
      }

      if (token.role && session.user) {
        session.user.role = token.role as UserRole;
      }

  

      if (session.user) {
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.image = token.image
        session.user.role = token.role
      }

      return session;
    },
    async jwt({ token }) {
      if (!token.sub) return token;

      const existingUser = await getUserById(token.sub);

      if (!existingUser) return token;



      token.name = existingUser.name;
      token.email = existingUser.email;
      token.role = existingUser.role;
      token.image = existingUser.image
      return token;
    }
  },
  adapter: PrismaAdapter(db),
  session : {strategy : 'jwt'} ,
  ...authConfig,
});
