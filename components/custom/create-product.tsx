"use client"

import { SERVER_ROUTES } from "@/constants/routes"
import { CURRENCIES } from "@/constants/types"
import { apiPost } from "@/lib/api"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { Button, FormCheck, FormControl, FormLabel, FormSelect, InputGroup } from "react-bootstrap"

interface Props {
  orderId: number
}

export default function CreateProduct({ orderId }: Props) {
  const [title, setTitle] = useState<string>("")
  const [serialNumber, setSerialNumber] = useState<string>("")
  const [type, setType] = useState<string>("")
  const [isNew, setIsNew] = useState<boolean>(false)
  const [specification, setSpecification] = useState<string>("")
  const [startDate, setStartDate] = useState<string>("")
  const [endDate, setEndDate] = useState<string>("")
  const [uahPrice, setUahPrice] = useState<string>("")
  const [usdPrice, setUsdPrice] = useState<string>("")
  const [uahDefault, setUahDefault] = useState<boolean>(true)
  const [usdDefault, setUsdDefault] = useState<boolean>(false)
  const router = useRouter()

  const submitProduct = async () => {
    const route = `${SERVER_ROUTES.PRODUCTS}`
    const body =
    {
      serialNumber,
      isNew,
      title,
      type,
      specification,
      guarantee: { start: startDate, end: endDate },
      price: [{ value: +uahPrice, symbol: CURRENCIES.UAH, isDefault: uahDefault }, { value: +usdPrice, symbol: CURRENCIES.USD, isDefault: usdDefault }],
      orderId
    }
    await apiPost({ route, body })
    router.refresh()
  }

  return (
    <InputGroup >
      <div>
        <FormControl value={title} onChange={(e) => setTitle(e.target.value)} className="mb-1 " type="string" placeholder="Title" />
        <FormControl value={serialNumber} onChange={(e) => setSerialNumber(e.target.value)} className="mb-1 " type="string" placeholder="Serial number" />
        <FormControl value={type} onChange={(e) => setType(e.target.value)} className="mb-1 " type="string" placeholder="Type" />
        <FormCheck className="md-1" type="checkbox" label="Is New?" checked={isNew} onChange={(e) => setIsNew(e.target.checked)} />
        <FormControl value={specification} onChange={(e) => setSpecification(e.target.value)} className="mb-1 " type="string" placeholder="Specification" />
        <FormLabel>Guarantee start:</FormLabel>
        <FormControl className="mb-1 " type="date" onChange={(e) => setStartDate(e.target.value)} />
        <FormLabel>Guarantee end:</FormLabel>
        <FormControl className="mb-1 " type="date" onChange={(e) => setEndDate(e.target.value)} />
        <div className="flex">
          <FormCheck className="md-1 mr-1" type="checkbox" checked={uahDefault}
            onChange={(e) => { setUahDefault(e.target.checked); setUsdDefault(!e.target.value) }} />
          <FormControl value={uahPrice} onChange={(e) => setUahPrice(e.target.value)} className="mb-1 " type="number" placeholder="Price in UAH" />
        </div>
        <div className="flex">
          <FormCheck className="md-1 mr-1" type="checkbox" checked={usdDefault}
            onChange={(e) => { setUsdDefault(e.target.checked); setUahDefault(!e.target.value) }} />
          <FormControl value={usdPrice} onChange={(e) => setUsdPrice(e.target.value)} className="mb-1 " type="number" placeholder="Price in USD" />
        </div>
        <Button onClick={submitProduct}>Submit</Button>
      </div>
    </InputGroup>
  )

}
