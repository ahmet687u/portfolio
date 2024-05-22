"use client";

import Image from "next/image";
import Link from "next/link";
import type { TKeysEnum, TLocales } from "@/types";
import { LOCALES } from "@/constants";
import { usePathname } from "next/navigation";

const antiLocale: TKeysEnum<TLocales> = {
  en: "tr",
  tr: "en",
};

const LocaleImage = ({ locale }: { locale: TLocales }) => {
  const pathname: string = usePathname();
  const prefix = pathname.split("/").slice(2).join("");

  return (
    <Link href={`/${antiLocale[locale]}/${prefix}`}>
      {LOCALES.includes(locale) && (
        <Image
          width={40}
          height={40}
          alt={locale}
          src={`/${antiLocale[locale]}.jpg`}
        />
      )}
    </Link>
  );
};

export default LocaleImage;
