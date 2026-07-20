"use client"

import { Product } from "@/constants/types"
import { useState } from "react"
import ProductCard from "../cards/ProductCard"

interface Props {
  products: Product[]
}
export default function ProductsListPage({ products }: Props) {
  const [type, setType] = useState<string>("")
  const [spec, setSpec] = useState<string>("")
  const filteredProducts = products.filter((order) => {
    return order.type.includes(type) && order.specification.includes(spec)
  })

  return (
    <div className="p-4 py-3 space-y-4">
      <div className="flex ">
        <div className="flex h-10">
          <div className="flex p-1 font-bold text-2xl size-50">
            <p>Products</p>
            <p>/</p>
            <p>{products.length}</p>
          </div>
          <div className="flex p-2">
            <p>Type:</p>
            <input
              type="string"
              placeholder="search by type"
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="px-3 rounded-md w-35 border"
            />
          </div>
          <div className="flex p-2">
            <p>Specification:</p>
            <input
              type="string"
              placeholder="search by specification"
              value={spec}
              onChange={(e) => setSpec(e.target.value)}
              className="px-3 rounded-md w-50 border"
            />
          </div>
        </div>
      </div>
      <div className="overflow-auto">
        {
          filteredProducts.map((data) => (
            <ProductCard key={String(data.id)} product={data} />
          ))
        }
      </div>
    </div>
  )

}
