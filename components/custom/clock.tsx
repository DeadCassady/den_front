"use client"

import { useEffect, useState } from "react"

export default function Clock() {
  const [time, setTime] = useState<Date | null>(null)

  useEffect(() => {
    setTime(new Date())

    const interval = setInterval(() => {
      setTime(new Date())
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  if (!time) {
    return <span>- -: - - : - -</span>
  }

  return (
    <span>
      {time.toLocaleString()}
    </span>
  )

}
