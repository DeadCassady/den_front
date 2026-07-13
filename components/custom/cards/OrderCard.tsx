import { ROUTES } from "@/constants/routes";
import { Order } from "@/constants/types";
import { List } from "lucide-react";
import { Card } from "react-bootstrap";

interface Props {
  order: Order;
}

export default function OrderCard({ order }: Props) {
  const date = String(order.date).split("T")[0].split("-").reverse().join(" / ")

  return (
    <Card key={order.id} className="p-2 m-2 rounded-md border border-blue-100 shadow-md">
      <Card.Body>
        <div className="flex justify-between">
          <div className="text-lg w-40">
            <Card.Title>{order.title}</Card.Title>
          </div>
          <div className="flex">
            <List className="m-3 border rounded-full size-8 border-blue-200 shadow-sm p-1" />
            <div className="w-25 ">
              <p className="text-blue-900 text-lg">{order.productIds.length}</p>
              <p className="text-blue-900">Products</p>
            </div>
            <p className="text-blue-900 w-70">{date}</p>
            <p className="text-blue-900 w-5">{order.id}</p>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}
