"use client";

import { useRef } from "react";
import styles from "./experience.module.scss";
import { motion, useScroll } from "framer-motion";

const variants = {
  hidden: { opacity: 0, y: 100 },
  show: { opacity: 1, y: 100 },
};

const ExperienceSection = () => {
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

      <motion.article
        variants={variants}
        initial="hidden"
        animate="show"
        whileInView={{ y: 0 }}
        className={`${styles.experience_row} flex align-center`}
      >
        <div className={styles.experience_item}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel
          blanditiis inventore numquam voluptas animi veritatis?
          <svg width={30} height={30}>
            <motion.circle r="9" cx={15} cy={15} />
          </svg>
        </div>
      </motion.article>

      <motion.article
        variants={variants}
        initial="hidden"
        animate="show"
        whileInView={{ y: 0 }}
        className={`${styles.right} ${styles.experience_row} flex align-center`}
      >
        <div className={styles.experience_item}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel
          blanditiis inventore numquam voluptas animi veritatis?
          <svg width={30} height={30}>
            <circle r="9" cx={15} cy={15} />
          </svg>
        </div>
      </motion.article>

      <motion.article
        variants={variants}
        initial="hidden"
        animate="show"
        whileInView={{ y: 0 }}
        className={`${styles.experience_row} flex align-center`}
      >
        <div className={styles.experience_item}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel
          blanditiis inventore numquam voluptas animi veritatis?
          <svg width={30} height={30}>
            <circle r="9" cx={15} cy={15} />
          </svg>
        </div>
      </motion.article>
    </section>
  );
};

export default ExperienceSection;
