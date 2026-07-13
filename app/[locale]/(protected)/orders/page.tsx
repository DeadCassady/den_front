import OrdersListPage from "@/components/custom/list-pages/orders-list-page"
import { SERVER_ROUTES } from "@/constants/routes"
import { apiGet } from "@/lib/api"

export default async function OrdersPage({ }) {
  const route = SERVER_ROUTES.ORDERS
  const res = await apiGet({ route })
  if (!res) {
    return <p>No orders yet</p>
  }
  return (<OrdersListPage orders={res} />)
}
