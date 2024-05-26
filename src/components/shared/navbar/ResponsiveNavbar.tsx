"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "./resmenu.module.scss";
import { IoIosMenu } from "react-icons/io";
import { navbarLinks } from "@/constants";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";

const menuVariant = {
  open: {
    clipPath: "circle(85% at 40% 40%)",
    width: 300,
    height: 600,
  },
  closed: {
    clipPath: "circle(0% at 0% 0%)",
    width: 0,
    height: 0,
    transition: {
      delay: 0.2,
    },
  },
};

const straggerVariants = {
  initial: {
    x: -20,
    opacity: 0,
    transition: {
      staggerChildren: 0.2,
    },
  },
  open: {
    x: 10,
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const footerVariant = {
  initial: {
    y: -40,
    opacity: 0,
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.2,
    },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      delayChildren: 0.6,
      staggerChildren: 0.2,
    },
  },
};

const ResponsiveNavbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className={styles.menu_container}>
      {/* menu toggle button */}
      <div className={styles.menu}>
        <IoIosMenu onClick={() => setIsOpen(!isOpen)} />
      </div>

      {/* menu list */}
      <AnimatePresence>
        <motion.nav
          variants={menuVariant}
          className={styles.menu_list}
          animate={isOpen ? "open" : "closed"}
        >
          {isOpen ? (
            <>
              {/* responsive menu list */}
              <motion.ul
                variants={straggerVariants}
                initial="initial"
                animate="open"
                className="not-none"
              >
                {navbarLinks.map((link) => (
                  <motion.li variants={straggerVariants} key={link.route}>
                    <Link
                      href={link.route}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.title}
                    </Link>
                  </motion.li>
                ))}
              </motion.ul>

              {/* menu footer */}
              <motion.div className={styles.footer}>
                <motion.ul
                  variants={footerVariant}
                  initial="initial"
                  animate="animate"
                  className="flex contact align-center not-none"
                >
                  <motion.li
                    variants={footerVariant}
                    className={styles.not_pad}
                  >
                    <Link href="https://github.com/ahmet687u">
                      <FiGithub />
                    </Link>
                  </motion.li>
                  <motion.li
                    variants={footerVariant}
                    className={styles.not_pad}
                  >
                    <Link href="https://www.linkedin.com/in/ahmet-b%C4%B1y%C4%B1kl%C4%B1-97102b21b/">
                      <FaLinkedinIn />
                    </Link>
                  </motion.li>
                </motion.ul>
              </motion.div>
            </>
          ) : (
            ""
          )}
        </motion.nav>
      </AnimatePresence>
    </div>
  );
};

export default ResponsiveNavbar;
