"use client";
import Link from "next/link";
import { navbarLinks } from "@/constants";
import { usePathname } from "next/navigation";
import type { TLocales } from "@/types";

export default function Menu({ locale, col = false }: {locale: TLocales, col?: boolean}) {
  const pathname = usePathname();

  return (
    <ul className={col ? "" : "flex"}>
      {navbarLinks.map((link) => (
        <li className={pathname === link.route ? "active" : ""} key={link.route}>
          <Link href={`/${locale}${link.route}`}>
            {link[locale]}
          </Link>
        </li>
      ))}
    </ul>
  );
}
