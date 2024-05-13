"use client";
import Link from "next/link";
import { navbarLinks } from "@/constants";
import { usePathname } from "next/navigation";

export default function Menu() {
  const pathname = usePathname();

  return (
    <ul className="flex">
      {navbarLinks.map((link) => (
        <li className={pathname === link.route ? "active" : ""} key={link.route}>
          <Link href={link.route}>
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
