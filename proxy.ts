import { routing } from "@/i18n/routing";
import createMiddlewate from "next-intl/middleware";
import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import { ROUTES } from "./constants/routes";

const intlMiddleware = createMiddlewate(routing);

export default async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  if (
    pathname.includes(ROUTES.SIGNIN) ||
    pathname.includes(ROUTES.REGISTER) ||
    pathname.includes(ROUTES.LOGOUT)
  ) {
    return intlMiddleware(req);
  }
  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
  });
  if (!token) {
    return NextResponse.redirect(new URL(ROUTES.SIGNIN, req.url));
  }
  return intlMiddleware(req);
}

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
