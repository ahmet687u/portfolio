import Menu from "./Menu";
import Link from "next/link";
import LocaleImage from "./LocaleImage";
import type { TLocales } from "@/types";
import styles from "./navbar.module.scss";

import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { Dancing_Script } from "next/font/google";

const font = Dancing_Script({ subsets: ["latin"] });

export default function Navbar({ locale }: { locale: TLocales }) {
  return (
    <nav className={`${styles.navbar} flex align-center`}>
      <Menu locale={locale} />

      <Link href={`/${locale}`} className={`${font.className} logo`}>
        Ahmet BIYIKLI
      </Link>

      <ul className="flex contact align-center">
        <LocaleImage locale={locale} />

        <li>
          <Link href="https://github.com/ahmet687u">
            <FiGithub />
          </Link>
        </li>
        <li>
          <Link href="https://www.linkedin.com/in/ahmet-b%C4%B1y%C4%B1kl%C4%B1-97102b21b/">
            <FaLinkedinIn />
          </Link>
        </li>
      </ul>
    </nav>
  );
}