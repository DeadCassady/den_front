"use client"
import { Order } from "@/constants/types";
import { useState } from "react";
import OrderCard from "../cards/OrderCard";

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
      <div className="flex h-10">
        <div className="flex p-1 font-bold text-2xl pr-40">
          <p>Orders</p>
          <p>/</p>
          <p>{orders.length}</p>
        </div>
        <div className="flex p-2">
          <p>Title:</p>
          <input
            type="string"
            placeholder="search by title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="px-3 rounded-md w-35 border"
          />
        </div>
      </div>
      <div>
        {
          filteredOrders.map((data) => (
            <OrderCard key={String(data.id)} order={data} />
          ))
        }
      </div>
    </div>
  )

}
