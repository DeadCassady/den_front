import { SERVER_ROUTES } from "@/constants/routes";
import { JWT } from "next-auth/jwt";
import Credentials from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    Credentials({
      credentials: {},
      async authorize(credentials: Record<string, string> | undefined) {
        const body = {
          email: credentials?.email?.trim(),
          password: credentials?.password.trim(),
        }
        const res = await fetch(`${SERVER_ROUTES.HOST}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(body),
        });
        if (!res.ok) {
          throw new Error("Not able to authorize")
        }
        const data = await res.json();

        return {
          id: data.user?.id,
          email: data.user?.email,
          access_token: data.access_token,
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
