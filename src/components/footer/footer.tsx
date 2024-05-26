import Link from "next/link";
import styles from "./footer.module.scss";

import Menu from "../shared/navbar/Menu";
import { IoLogoGithub } from "react-icons/io";
import { CiMail, CiLinkedin } from "react-icons/ci";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.section}>
        <h3>Bana  Ulaşın</h3>
        <Link
          href="mailto:biyikliahmet72@gmail.com"
          className="flex align-center"
        >
          <CiMail className={styles.mr} />
          biyikliahmet72@gmail.com
        </Link>
        <ul className="flex align-center">
          <li>
            <Link href="https://www.linkedin.com/in/ahmet-b%C4%B1y%C4%B1kl%C4%B1-97102b21b/">
              <CiLinkedin />
            </Link>
          </li>
          <li>
            <Link href="https://github.com/ahmet687u">
              <IoLogoGithub />
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.section}>
        <h3>Hızlı Link</h3>
        <ul>
          <Menu col={true} />
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
