"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next-intl/client";
import { ChangeEvent, useTransition } from "react";

export default function LocaleSwitcher() {
  const [_, startTransition] = useTransition();
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  function onSelectChange(event: ChangeEvent<HTMLSelectElement>) {
    const nextLocale = event.target.innerHTML;
    console.log({ nextLocale });
    startTransition(() => {
      router.replace(pathname, {
        locale: nextLocale === "English" ? "en" : "ar",
      });
    });
  }

  return (
    // @ts-ignore
    <li onClick={(e) => onSelectChange(e)}>
      {locale === "en" ? "عربي" : "English"}
    </li>
  );
}
