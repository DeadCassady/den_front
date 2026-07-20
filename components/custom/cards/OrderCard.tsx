import { Order } from "@/constants/types";
import { ArrowRight, List } from "lucide-react";
import { Button, Card } from "react-bootstrap";
import ConfirmModal from "../confirm-modal";
import { SERVER_ROUTES } from "@/constants/routes";
import { apiDelete } from "@/lib/api";
import { useRouter } from "next/navigation";

interface Props {
  currentOrder: boolean
  order: Order;
  submit: (id: number) => {};
  expand: boolean
}

export default function OrderCard({ currentOrder, order, submit, expand }: Props) {
  const date = String(order.date).split("T")[0].split("-").reverse().join(" / ")
  const router = useRouter()

  const deleteOrder = async () => {
    const route = `${SERVER_ROUTES.ORDERS}/${order.id}`
    await apiDelete({ route })
    router.refresh()
  }

  return (
    <Card key={order.id} className="p-2 w-150 m-2 rounded-md border border-blue-100 shadow-md">
      <Card.Body>
        <div className="flex justify-between">
          {
            !expand &&
            <div className="text-lg w-100">
              <Card.Title>{order.title}</Card.Title>
            </div>
          }
          <div className="flex">
            <Button variant="light" onClick={() => submit(order.id)}>
              <List className="border rounded-full size-8 border-blue-200 shadow-sm p-1" />
            </Button>
            <div className="w-25 ">

              <p className="text-blue-900 text-lg">{order.productIds.length}</p>
              <p className="text-blue-900">Products</p>
            </div>
            <p className="text-blue-900 w-70">{date}</p>
            <p className="text-blue-900 w-5">{order.id}</p>
            {
              !expand &&
              <ConfirmModal title="Delete product" body="Are you sure you want to delete the product?" buttonText="Confirm" buttonFunction={deleteOrder} />
            }
          </div>

          {
            (expand && currentOrder) &&
            <ArrowRight />
          }
        </div>
      </Card.Body>
    </Card >
  );
}
