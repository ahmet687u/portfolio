"use client";
import Link from "next/link";
import { navbarLinks } from "@/constants";
import { usePathname } from "next/navigation";
import type { TLocales } from "@/types";

export default function Menu({ locale }: {locale: TLocales}) {
  const pathname = usePathname();

  return (
    <ul className="flex">
      {navbarLinks.map((link) => (
        <li className={pathname === link.route ? "active" : ""} key={link.route}>
          <Link href={`/${locale}${link.route}`}>
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
