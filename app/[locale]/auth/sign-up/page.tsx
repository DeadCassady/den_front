"use client"

import { ROUTES, SERVER_ROUTES } from "@/constants/routes"
import { apiPost } from "@/lib/api"
import { cn } from "@/lib/utils"
import { Eye, EyeOff } from "lucide-react"
import { signIn } from "next-auth/react"
import { useTranslations } from "next-intl"
import Link from "next/link"
import { SubmitEventHandler, useState } from "react"
import { Card } from "react-bootstrap"


export default function SignUpPage() {
  const [username, setUsername] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [showPass, setShowPass] = useState<boolean>(false)
  const t = useTranslations()

  const handleSubmit: SubmitEventHandler = async (e) => {
    e.preventDefault()

    const route = SERVER_ROUTES.USER;
    const body = { username, email, password };
    const res = await apiPost({ route, body })

    if (!res) {
      throw new Error("User already exists")
    }

    await signIn("credentials", {
      email: res.email,
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
            <label htmlFor="username">{t("lastName")}</label>
            <input
              id="username"
              type="username"
              placeholder="Reactor"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="w-80 ml-10">
            <label htmlFor="email">{t("email")}</label>
            <input
              id="email"
              type="email"
              placeholder="email@email.email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
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
        <h1>{t("Already registered?")}</h1>
        <Link href={ROUTES.SIGNIN}>{t("signIn")}</Link>
      </Card>
    </main>
  );
}
