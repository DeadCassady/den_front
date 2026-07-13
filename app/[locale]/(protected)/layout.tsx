import NavigationMenu from "@/components/custom/navigation-menu"
import TopMenu from "@/components/custom/top-menu"

export default async function RootLayout({
  children,

}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="flex flex-col flex-1">
      <TopMenu />
      <div className="flex h-screen">
        <NavigationMenu />
        <div className="flex-1 p-6 overflow-auto text-blue-900 bg-blue-50 ">{children}</div>
      </div>
    </div>
  )
}
