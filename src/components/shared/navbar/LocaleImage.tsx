"use client";

import Link from "next/link";
import Image from "next/image";
import { LOCALES } from "@/constants";
import { usePathname } from "next/navigation";
import type { TKeysEnum, TLocales } from "@/types";

const antiLocale: TKeysEnum<TLocales> = {
  en: "tr",
  tr: "en",
};

const LocaleImage = ({ locale }: { locale: TLocales }) => {
  const pathname: string = usePathname();
  const prefix = pathname.split("/").slice(2).join("");

  return (
    <Link href={`/${antiLocale[locale]}/${prefix}`} className="flex align-center">
      {LOCALES.includes(locale) && (
        <Image
          width={35}
          height={25}
          alt={antiLocale[locale]}
          src={`/${antiLocale[locale]}.jpg`}
        />
      )}
    </Link>
  );
};

export default LocaleImage;
