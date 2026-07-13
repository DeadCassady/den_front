"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const changeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const lang = e.target.value;
    const segments = pathname.split("/");
    segments[1] = lang;
    router.replace(segments.join("/"));
  };

  return (
    <select
      onChange={changeLanguage}
      defaultValue={locale}
      className="border p-2 rounded justify-baseline"
    >
      <option value="en">English</option>
      <option value="uk">Українська</option>
    </select>
  );
}
