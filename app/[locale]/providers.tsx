"use client"

import StoreProvider from "@/components/custom/store-provider"
import { SessionProvider } from "next-auth/react"

type Props = {
  children: React.ReactNode
}

export function Providers({ children }: Props) {
  return (
    <SessionProvider>
      <StoreProvider>
        {children}
      </StoreProvider>
    </SessionProvider>
  )
}
