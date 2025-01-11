import NextAuth from "next-auth";

const config = {
  providers: [],
};

export const { handlers, signIn, signOut } = NextAuth(config);
