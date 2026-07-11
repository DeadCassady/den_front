"use client"

import { ROUTES, SERVER_ROUTES } from "@/constants/routes"
import { cn } from "@/lib/utils"
import { Eye, EyeOff } from "lucide-react"
import { signIn } from "next-auth/react"
import { useTranslations } from "next-intl"
import Link from "next/link"
import { SubmitEventHandler, useState } from "react"
import { Card } from "react-bootstrap"


export default function SignUpPage() {
  const [name, setName] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [showPass, setShowPass] = useState<boolean>(false)
  const t = useTranslations()

  const handleSubmit: SubmitEventHandler = async (e) => {
    e.preventDefault()

    const res = await fetch(`${SERVER_ROUTES.HOST}${SERVER_ROUTES.REGISTER}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    })

    if (!res.ok) {
      throw new Error("User already exists")
    }

    const data = await res.json()

    await signIn("credentials", {
      email: data.user.email,
      password: password,
      callbackUrl: ROUTES.ME
    })
  }
  return (
    <main className="flex justify-center">
      <Card className="w-105 text-center shadow-lg rounded-md">
        <form onSubmit={handleSubmit} className="space-y-4  ">
          <div className="w-80 ml-10">
          </div>
          <div className="w-80 ml-10">
            <label htmlFor="name">{t("username")}</label>
            <div className="flex">
              <input
                id="name"
                type="text"
                placeholder="Reactor"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>
          <div className="w-80 ml-10">
            <label htmlFor="email">{t("email")}</label>
            <div className="flex">
              <input
                id="email"
                type="email"
                placeholder="email@email.email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="w-85 ml-10">
            <label htmlFor="password">{t("password")}</label>
            <div className="flex">
              <input
                id="password"
                type={cn({ password: showPass, text: !showPass })}
                placeholder="P@ssw0rd"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                className="ml-3"
                type="button"
                onClick={() => {
                  setShowPass(!showPass);
                }}
              >
                {showPass ? <Eye size={18} /> : <EyeOff size={18} />}
              </button>
            </div>
          </div>
          <button type="submit">{t("register")}</button>
        </form>
        <h1>{t("already registered?")}</h1>
        <Link href={ROUTES.SIGNIN}>{t("signIn")}</Link>
      </Card>
    </main>
  );
}
