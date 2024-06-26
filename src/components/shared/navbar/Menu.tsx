"use client";
import Link from "next/link";
import { navbarLinks } from "@/constants";
import { usePathname } from "next/navigation";

export default function Menu({ col = false }: {col?: boolean}) {
  const pathname = usePathname();

  return (
    <ul className={col ? "" : "flex"}>
      {navbarLinks.map((link) => (
        <li className={pathname === link.route ? "active" : ""} key={link.route}>
          <Link href={`${link.route}`}>
            {link.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
