import { apiPost } from "@/lib/api";
import NextAuth from "next-auth";
import { JWT } from "next-auth/jwt";
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
      user,
    }: {
      token: JWT;
      user?: any
    }) {
      token.accessToken = user.access_token
      token.provider = "credentials"

      return token
    },
    session({ session, token }: { session: any; token: any }) {
      session.accessToken = token.accessToken
      session.email = token.email
      return session
    }
  }
}

const handler = NextAuth(authOptions)

export const GET = handler
export const POST = handler
