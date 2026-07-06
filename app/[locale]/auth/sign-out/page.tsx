"use client"

import { ROUTES } from "@/constants/routes"
import { signOut } from "next-auth/react"

export default function SignOut() {
  signOut({ callbackUrl: ROUTES.ROOT })
  return null
}
