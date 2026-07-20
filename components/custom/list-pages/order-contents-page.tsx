import { Order, Product } from "@/constants/types"
import MiniProductCard from "../cards/MiniProductCard"
import { Button } from "react-bootstrap"
import { X } from "lucide-react"

interface Props {
  order: Order | null,
  products: (Product | null)[]
  hide: () => {};
}

export default function OrderContentsListPage({ order, products, hide }: Props) {

  return (
    <div className="p-4 py-3 space-y-4 border h-auto rounded-md border-blue-100 shadow-md">
      <div >
        <div className="flex justify-between h-10">
          <div className="flex p-1 font-bold text-2xl size-50">
            <p>{order?.title}</p>
          </div>
          <Button variant="danger" onClick={() => { hide() }}>
            <X />
          </Button>
        </div>
      </div>
      <div className="overflow-auto">
        {
          products.map((data) => (
            <MiniProductCard key={data?.id} product={data} />
          ))
        }
      </div>
    </div>
  )
} 
