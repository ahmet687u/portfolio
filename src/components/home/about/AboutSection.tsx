"use client";

import Link from "next/link";
import styles from "./about.module.scss";

import { aboutText } from "@/constants";
import { motion, useScroll, useTransform } from "framer-motion";

import Cog from "@/components/about/Cog";

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

const AboutSection = () => {
  const { scrollYProgress } = useScroll();

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360], {
    clamp: false,
  });

  return (
    <section className={`container ${styles.about}`}>
      <header className="title">
        <h1>Hakkımda</h1>
      </header>

      <motion.div
        variants={variants}
        initial="hidden"
        whileInView={{ x: 0 }}
        style={{ position: "relative" }}
      >
        <Cog size={150} ledgePiece={10} className="cog-1" />
        <Cog
          size={100}
          ledgePiece={8}
          className="cog-2"
          style={{
            position: "absolute",
            top: "5px",
            left: "165px",
          }}
        />
        <Cog
          size={50}
          ledgePiece={7}
          className="cog-3"
          style={{
            position: "absolute",
            top: "150px",
            left: "165px",
            rotate: rotate as any
          }}
        />
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
              {text} {i === 1 ? "..." : ""}
            </motion.p>
          ))}
        </Link>
      </motion.div>
    </section>
  );
};

export default AboutSection;
