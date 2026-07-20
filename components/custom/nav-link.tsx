"use client"

import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"
import { Nav } from "react-bootstrap"

interface Props {
  href: string
  children: React.ReactNode
}

export default function NavLink({ href, children }: Props) {
  const pathname = usePathname()
  const isActive = pathname.includes(href)
  return (
    <Nav.Link href={href}
      className={cn("px-3", "py-2", {
        "text-blue-500 font-semibold": isActive,
        "text-muted-foreground hover:text-foreground hover:text-blue-300": !isActive
      })} >
      {children}
    </Nav.Link>
  )
}
