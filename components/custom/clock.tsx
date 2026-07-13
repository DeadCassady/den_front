"use client"

import { Clock2 } from "lucide-react"
import { useLocale } from "next-intl"
import { useEffect, useState } from "react"


export default function Clock() {
  const locale = useLocale()
  const [day, setDay] = useState<string | null>(null)
  const [date, setDate] = useState<string | null>(null)
  const [time, setTime] = useState<string | null>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      const newDate = new Date()
      const newWeekday = newDate.toLocaleString(locale, {
        weekday: "long"
      })
      const newDayMonth = newDate.toLocaleString(locale, {
        day: "numeric",
        month: "short",
        year: "numeric"
      })
      const newTime = new Date().toLocaleString(locale, {
        hour: "2-digit",
        minute: "2-digit",
        hour12: false
      })
      setDay(newWeekday)
      setDate(newDayMonth)
      setTime(newTime)
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  if (!time) {
    return <span>- -: - - : - -</span>
  }

  return (
    <div >
      <div>{day}</div>
      <div className="flex">
        <div>{date}</div>
        <Clock2 className="m-1 size-4" />
        <span>
          {time}
        </span>
      </div>
    </div>
  )

}
