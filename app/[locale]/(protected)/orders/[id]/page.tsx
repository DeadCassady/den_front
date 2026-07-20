import OrderContentsListPage from "@/components/custom/list-pages/order-contents-page";
import { SERVER_ROUTES } from "@/constants/routes"
import { apiGet } from "@/lib/api";
interface Props {
  params: Promise<{ id: string }>;
}

export default async function Order({ params }: Props) {
  const { id } = await params
  const route = `${SERVER_ROUTES.ORDERS}/${id}`
  const res = await apiGet({ route })
  return (OrderContentsListPage(res))
}
