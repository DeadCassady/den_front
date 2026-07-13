"use client"
import { Order } from "@/constants/types";
import { useState } from "react";

interface Props {
  orders: Order[]
}

export default function OrdersListPage({ orders }: Props) {
  const [title, setTitle] = useState<string>("")
  const filteredOrders = orders.filter((order) => {
    return order.title.includes(title)
  })

  return (
    <div className="p-4 py-3 space-y-4">
      <div className="flex">
        <div className="flex p-1 font-bold text-2xl size-50">
          <p>Orders</p>
          <p>/</p>
          <p>{orders.length}</p>
        </div>
        <input
          type="string"
          placeholder="search by title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="px-3 py-1 rounded-md w-35 h-10"
        />
        {
          filteredOrders.map((data) => (
            <p>{data.title}</p>
          ))
        }
      </div>
    </div>
  )

}
