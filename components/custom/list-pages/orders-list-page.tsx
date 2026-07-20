"use client"
import { Order, Product } from "@/constants/types";
import { useState } from "react";
import OrderCard from "../cards/OrderCard";
import { SERVER_ROUTES } from "@/constants/routes";
import { apiGet } from "@/lib/api";
import OrderContentsListPage from "./order-contents-page";

interface Props {
  orders: Order[]
}

export default function OrdersListPage({ orders }: Props) {
  const [title, setTitle] = useState<string>("")
  const [expand, setExpand] = useState<boolean>(false)
  const [order, setOrder] = useState<Order | null>(null)
  const [products, setProducts] = useState<(Product)[]>([])
  const filteredOrders = orders.filter((order) => {
    return order.title.includes(title)
  })

  const handleSubmit = async (id: number) => {
    setExpand(true)
    const route = `${SERVER_ROUTES.ORDERS}/${id}`
    const res = await apiGet({ route })
    setProducts(res.products)
    setOrder(res.order)
  }

  const hideProducts = async () => {
    setExpand(false)
    setProducts([])
    setOrder(null)
  }

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
      <div className="flex">
        <div>
          {
            filteredOrders.map((data) => (
              <OrderCard key={String(data.id)} currentOrder={data.id == order?.id} order={data} submit={handleSubmit} expand={expand} />
            ))
          }
        </div>
        <div>
          {
            expand &&
            <OrderContentsListPage order={order} products={products} hide={hideProducts} />
          }
        </div>
      </div>
    </div>
  )

}
