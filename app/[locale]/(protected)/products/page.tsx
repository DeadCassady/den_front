import ProductsListPage from "@/components/custom/list-pages/products-list-page"
import { SERVER_ROUTES } from "@/constants/routes"
import { apiGet } from "@/lib/api"

export default async function ProductsPage() {
  const route = SERVER_ROUTES.PRODUCTS
  const res = await apiGet({ route })
  if (!res) {
    return <p>No products yet</p>
  }
  return (<ProductsListPage products={res} />)
}
