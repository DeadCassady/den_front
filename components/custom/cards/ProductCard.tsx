"use client"

import { Product } from "@/constants/types";
import { Card } from "react-bootstrap";
import ConfirmModal from "../confirm-modal";
import { SERVER_ROUTES } from "@/constants/routes";
import { apiDelete } from "@/lib/api";
import { useRouter } from "next/navigation";

interface Props {
  product: Product
}
function formatDate(date: Date) {
  return String(date).split("T")[0].split("-").reverse().join(" / ")
}
export default function ProductCard({ product }: Props) {
  const router = useRouter()

  const deleteProduct = async () => {
    const route = `${SERVER_ROUTES.PRODUCTS}/${product.id}`
    await apiDelete({ route })
    router.refresh()
  }

  return (
    <Card key={product.id} className=" w-400 p-2 m-2 rounded-md border border-blue-100 shadow-md">
      <Card.Body>
        <div className="flex justify-between">
          <div className="text-lg w-60">
            <Card.Title>{product.title}</Card.Title>
            <p className="text-blue-900">{product.specification}</p>
          </div>
          <div className="text-lg w-40">
            <div className="flex">
              <p>from:</p>
              <p className="text-blue-900">{formatDate(product.guarantee.start)}</p>
            </div>
            <div className="flex">
              <p>to:</p>
              <p className="text-blue-900">{formatDate(product.guarantee.end)}</p>
            </div>
          </div>
          {
            product.isNew ? (
              <p>New</p>
            ) : (
              <p>Used</p>
            )
          }
          <div>
            {
              product.price.map((data, index) => (
                <p key={index}>{`${data.value} ${data.symbol}`}</p>
              ))
            }
          </div>
          <div className="flex">
            <p className="text-blue-900 w-70">{formatDate(product.date)}</p>
            <p className="text-blue-900 w-5">{product.id}</p>

            <ConfirmModal title="Delete product" body="Are you sure you want to delete the product?" buttonText="Confirm" buttonFunction={deleteProduct} />
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}
