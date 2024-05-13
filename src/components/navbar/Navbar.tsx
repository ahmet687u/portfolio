import Menu from "./Menu";
import Link from "next/link";
import styles from "./navbar.module.scss";
import { Dancing_Script } from "next/font/google";

import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";

const font = Dancing_Script({ subsets: ["latin"] });

export default function Navbar() {
  return (
    <nav className={`${styles.navbar} flex align-center`}>
      <Menu />

      <Link href="/" className={`${font.className} title`}>
        Ahmet BIYIKLI
      </Link>

      <ul className="flex contact">
        <li>
          <Link href="https://github.com/ahmet687u"><FiGithub /></Link>
        </li>
        <li>
          <Link href="https://www.linkedin.com/in/ahmet-b%C4%B1y%C4%B1kl%C4%B1-97102b21b/"><FaLinkedinIn /></Link>
        </li>
      </ul>
    </nav>
  );
}
