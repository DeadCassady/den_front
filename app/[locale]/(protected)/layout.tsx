export default async function RootLayout({
  children,

}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="flex flex-col flex-1">
      <div>{children}</div>
    </div>
  )
}
