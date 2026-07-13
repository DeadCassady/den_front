import { SERVER_ROUTES } from "@/constants/routes"
import { apiGet } from "@/lib/api"
import { authOptions } from "@/lib/auth-config"
import { getServerSession } from "next-auth"

export default async function MyPage() {
  const session = await getServerSession(authOptions)
  const route = SERVER_ROUTES.ME
  const res = await apiGet({ token: session?.accessToken, route })
  if (!res) {
    return (<p>No user page!</p>)
  }
  const user = res

  return (<>
    <p>{user.name}</p>
    <p>{user.email}</p>
  </>)
}
