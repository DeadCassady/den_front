"use client"

import { Nav } from "react-bootstrap"
import NavLink from "./nav-link"
import { ROUTES } from "@/constants/routes"
import LanguageSwitcher from "./language-switcher"

export default function NavigationMenu() {
  return (
    <aside className="w-45 border-r h-full" >
      <Nav className="flex flex-col gap-2">
        <NavLink href={ROUTES.ME}>Me</NavLink>
        <NavLink href={ROUTES.ORDERS}>Orders</NavLink>
        <NavLink href={ROUTES.PRODUCTS}>Products</NavLink>
        <NavLink href={ROUTES.USERS}>Users</NavLink>
        <LanguageSwitcher />
      </Nav>
    </aside>
  )
}
