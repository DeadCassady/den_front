"use client"

import { Product } from "@/constants/types";
import { Card } from "react-bootstrap";

interface Props {
  product: Product | null
}
function formatDate(date: Date) {
  return String(date).split("T")[0].split("-").reverse().join(" / ")
}
export default function MiniProductCard({ product }: Props) {

  return (
    <Card key={product!.id} className=" w-120 p-2 m-2 rounded-md border border-blue-100 shadow-md">
      <Card.Body>
        <div className="flex justify-between">
          <div className="text-lg w-50">
            <Card.Title>{product!.title}</Card.Title>
          </div>
          <div className="flex">
            <p className="text-blue-900 w-30">{formatDate(product!.date)}</p>
            <p className="text-blue-900 w-5">{product!.id}</p>
          </div>
        </div>
      </Card.Body>
    </Card >
  );
}
