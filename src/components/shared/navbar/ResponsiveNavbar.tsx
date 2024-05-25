"use client";

import { useState } from "react";
import styles from "./resmenu.module.scss";
import { IoIosMenu } from "react-icons/io";
import { AnimatePresence, delay, motion } from "framer-motion";
import { navbarLinks } from "@/constants";
import { TLocales } from "@/types";
import Link from "next/link";

const menuVariant = {
  open: {
    clipPath: "circle(85% at 40% 40%)",
    width: 300,
    height: 600
  },
  closed: {
    clipPath: "circle(0% at 0% 0%)",
    width: 0,
    height: 0
  },
};

const straggerVariants = {
  initial: {
    x: -20,
    opacity: 0,
    transition: {
      staggerChildren: 0.09,
    },
  },
  open: {
    x: 0,
    opacity: 1,
    transition: {
      staggerChildren: 0.09,
      // delay: 0.5
    },
  },
};

const ResponsiveNavbar = ({ locale }: { locale: TLocales }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className={styles.menu_container}>
      {/* menu toggle button */}
      <div className={styles.menu}>
        <IoIosMenu onClick={() => setIsOpen(!isOpen)} />
      </div>

      {/* menu list */}
      <AnimatePresence>
        <motion.div
          variants={menuVariant}
          className={styles.menu_list}
          animate={isOpen ? "open" : "closed"}
        >
          {isOpen ? (
            <motion.ul
              variants={straggerVariants}
              initial="initial"
              animate="open"
              className="not-none"
              style={{ overflow: "hidden" }}
            >
              {navbarLinks.map((link) => (
                <motion.li variants={straggerVariants} key={link.route}>
                  <Link href={`/${locale}/${link.route}`}>{link[locale]}</Link>
                </motion.li>
              ))}
            </motion.ul>
          ) : (
            ""
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default ResponsiveNavbar;
