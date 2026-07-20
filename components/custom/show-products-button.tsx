"use client"

import { List } from "lucide-react";
import NavLink from "./nav-link";
import { ROUTES } from "@/constants/routes";
import { Order } from "@/constants/types";
import { Dispatch, SetStateAction } from "react";

interface Props {
  orderId: number
  setOrder: Dispatch<SetStateAction<Order | null>>
}

export default function ShowProductsButton({ orderId, setOrder }: Props) {
  return (
    <NavLink href={`${ROUTES.ORDERS}/${orderId}`} >
      <List className="m-3 border rounded-full size-8 border-blue-200 shadow-sm p-1" />
    </NavLink >
  )
}
