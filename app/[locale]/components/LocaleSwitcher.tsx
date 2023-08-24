"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "next-intl/client";
import { ChangeEvent, useTransition } from "react";

export default function LocaleSwitcher() {
  const t = useTranslations("Index");
  const [isPending, startTransition] = useTransition();
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.value;
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  }

  return (
    <li>
      <select
        className="local-switch"
        defaultValue={locale}
        disabled={isPending}
        onChange={onSelectChange}
      >
        {["en", "ar"].map((cur) => (
          <option key={cur} value={cur}>
            {t("locale", { locale: cur })}
          </option>
        ))}
      </select>
    </li>
  );
}
