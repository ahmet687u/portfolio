"use client";

import Link from "next/link";
import styles from "./about.module.scss";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";

import type { TLocales } from "@/types";
import { getLocaleJson } from "@/utils/getLocaleJson";

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

const AboutSection = ({ locale }: { locale: TLocales }) => {
  const { scrollYProgress } = useScroll();

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 720], {
    clamp: false,
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, 280], {
    clamp: true,
  });

  return (
    <section className={`container ${styles.about}`}>
      <header className="title">
        <h1>{getLocaleJson()[locale].about.title}</h1>
      </header>

      <motion.div
        className={`flex align-center ${styles.ml}`}
        style={{ position: "relative", x }}
      ></motion.div>

      <motion.div variants={container} initial="hidden" animate="show">
        <Link href={`/${locale}/hakkimda`}>
          {getLocaleJson()
            [locale].about.paragrafs.slice(0, 2)
            .map((text, i) => (
              <motion.p
                key={text}
                variants={item}
                className="text"
                whileInView={{ y: 0 }}
              >
                {text} {i === 1 ? "..." : ""}
              </motion.p>
            ))}
        </Link>
      </motion.div>
    </section>
  );
};

export default AboutSection;
