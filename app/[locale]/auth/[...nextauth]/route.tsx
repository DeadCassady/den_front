import { Account } from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    Credentials({
      credentials: {},
      async authorize(credentials: Record<string, string> | undefined) {
        const route = ""
        const body = {
          email: credentials?.email?.trim(),
          password: credentials?.password.trim(),
        }
        const res = await apiPost({ route, body })
        if (!res) {
          throw new Error("Not able to authorize")
        }

        return {
          id: res.user?.id,
          email: res.user?.email,
          access_token: res.access_token,
        }
      }
    })
  ],
  secret: process.env.NEXTAUTH_SECRET!,

  callbacks: {
    async jwt({
      token,
      account,
      user,
    }: {
      token: JWT;
      account?: Account | null;
      user?: any
    }) {

    }
  }
}
