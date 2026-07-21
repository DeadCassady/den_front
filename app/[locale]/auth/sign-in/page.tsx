"use client"

import { ROUTES } from "@/constants/routes"
import { cn } from "@/lib/utils"
import { Eye, EyeOff } from "lucide-react"
import { signIn } from "next-auth/react"
import { useTranslations } from "next-intl"
import Link from "next/link"
import { SubmitEventHandler, useState } from "react"
import { Button, Card } from "react-bootstrap"

export default function SignIn() {
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [showPass, setShowPass] = useState<boolean>(false)
  const t = useTranslations()
  const handleSubmit: SubmitEventHandler = async (e) => {
    e.preventDefault()

    await signIn("credentials", {
      email: email,
      password: password,
      callbackUrl: ROUTES.ME
    })
  }
  return (
    <main className="flex justify-center">
      <Card className="w-105 text-center shadow-lg rounded-md">
        <p>{t("not signed in")}</p>
        <form onSubmit={handleSubmit} className="space-y-4  ">
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
                type="button"
                className="ml-3"
                onClick={() => {
                  setShowPass(!showPass);
                }}
              >
                {showPass ? <Eye size={18} /> : <EyeOff size={18} />}
              </button>
            </div>
          </div>
          <Button type="submit">{t("signIn")}</Button>
        </form>
        <p>{t("not a member yet?")}</p>
        <Link href={ROUTES.REGISTER}>{t("register")}</Link>
      </Card>
    </main>
  );
}
