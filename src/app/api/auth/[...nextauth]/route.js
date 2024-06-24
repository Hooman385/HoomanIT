import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        const { email, username, id, role } = credentials;
        // const user = { email, username, role, id }
        const user = { email: email, username: username, id: id, role: role };

        return user;
      },
    }),
  ],

  pages: {
    signIn: "/signin",
  },
  callbacks: {
    // Ref: https://authjs.dev/guides/basics/role-based-access-control#persisting-the-role
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
        token.name = user.username;
        token.id = user.id;
      }

      return token;
    },
    // If you want to use the role in client components

    async session({ session, token }) {
      if (session?.user) {
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.role = token.role;
        session.user.id = token.id;
      }

      return session;
    },
  },
};
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
