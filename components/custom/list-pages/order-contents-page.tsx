import { Order, Product } from "@/constants/types"
import MiniProductCard from "../cards/MiniProductCard"
import { Button } from "react-bootstrap"
import { Plus, X } from "lucide-react"
import CreateProduct from "../create-product"
import { useState } from "react"

interface Props {
  order: Order,
  products: (Product | null)[]
  hide: () => {};
}

export default function OrderContentsListPage({ order, products, hide }: Props) {
  const [createProduct, setCreateProduct] = useState<boolean>(false)

  return (
    <div className="p-4 py-3 space-y-4 border h-auto rounded-md border-blue-100 shadow-md">
      <div >
        <div className="flex justify-between h-10">
          <div className="font-bold text-2xl size-50">
            <p>{order.title}</p>
          </div>
          <Button variant="danger" onClick={() => { createProduct ? setCreateProduct(!createProduct) : hide() }}>
            <X />
          </Button>
        </div>
      </div>
      <div className="overflow-auto">
        {createProduct ?
          <CreateProduct orderId={order.id} />
          :
          <>
            <div className="flex">
              <Button onClick={() => setCreateProduct(!createProduct)}>
                <Plus />
              </Button>
              <p>Add product</p>
            </div>
            <>
              {
                products.length > 0 ?

                  products.map((data) => (
                    <MiniProductCard key={data?.id} product={data} />
                  ))
                  :
                  <p>No products in this order yet</p>
              }
            </>
          </>
        }

      </div>


    </div>
  )
} 
