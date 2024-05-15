"use client";

import Link from "next/link";
import styles from "./about.module.scss";

import { motion } from "framer-motion";
import { aboutText } from "@/constants";

const variants = {
  hidden: { x: -100 },
  transition: { ease: "easeOut", duration: 0.9, type: "spring" },
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
      staggerDirection: -1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 100 },
};

const AboutSection = (): JSX.Element => {
  return (
    <section className={`container ${styles.about}`}>
      <header className="title">
        <h1>Hakkımda</h1>
      </header>

      <motion.div variants={variants} initial="hidden" whileInView={{ x: 0 }}>
        Lorem ipsum dolor sit amet.
      </motion.div>

      <motion.div variants={container} initial="hidden" animate="show">
        <Link href="/hakkimda">
          {aboutText.slice(0, 2).map((text, i) => (
            <motion.p
              key={text}
              variants={item}
              whileInView={{ y: 0 }}
              className="text"
            >
              {text}...
            </motion.p>
          ))}
        </Link>
      </motion.div>
    </section>
  );
};

export default AboutSection;
