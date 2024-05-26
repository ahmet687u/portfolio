"use client";

import { useRef } from "react";
import styles from "./experience.module.scss";
import { motion, useScroll } from "framer-motion";
import { TLocales } from "@/types";
import { getLocaleJson } from "@/utils/getLocaleJson";

const variants = {
  hidden: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 100 },
};

const ExperienceSection = ({ locale }: { locale: TLocales }) => {
  const ref = useRef(null);
  const svgRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center"],
  });
  const { scrollYProgress: scrollForSvgPath } = useScroll({
    target: svgRef,
    offset: ["center", "center"]
  });

  return (
    <section ref={ref} className={styles.experince_container}>
      <motion.div
        className={styles.line}
        style={{ scaleY: scrollYProgress }}
      ></motion.div>

      {getLocaleJson()[locale].home.experience.map((item, index) => (
        <motion.article
        ref={svgRef}
          key={index}
          className={`${styles.experience_row} flex align-center ${
            index % 2 === 0 ? "" : styles.right
          }`}
        >
          <motion.div
            variants={variants}
            initial="hidden"
            animate="show"
            whileInView={{ y: 0 }}
            className={styles.experience_item}
          >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel
            blanditiis inventore numquam voluptas animi veritatis?
          </motion.div>
          <svg width={30} height={30}>
            <motion.circle
              r="9"
              cx={15}
              cy={15}
              style={{ pathLength: scrollForSvgPath }}
            />
          </svg>
        </motion.article>
      ))}
    </section>
  );
};

export default ExperienceSection;
