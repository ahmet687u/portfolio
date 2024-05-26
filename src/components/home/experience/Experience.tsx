"use client";

import { useRef } from "react";
import styles from "./experience.module.scss";
import { motion, useScroll } from "framer-motion";
import { TLocales } from "@/types";
import { getLocaleJson } from "@/utils/getLocaleJson";
import ExperienceItem from "./ExperienceItem";

const variants = {
  hidden: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 100 },
};

const ExperienceSection = ({ locale }: { locale: TLocales }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center"],
  });

  return (
    <section ref={ref} className={styles.experince_container}>
      <motion.div
        className={styles.line}
        style={{ scaleY: scrollYProgress }}
      ></motion.div>

      {getLocaleJson()[locale].home.experience.map((item, index) => (
        <ExperienceItem key={index} index={index} {...item} variant={variants} />
      ))}
    </section>
  );
};

export default ExperienceSection;
