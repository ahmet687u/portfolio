"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import styles from "./experienceItem.module.scss";

const ExperienceItem = ({
  index,
  variant,
  title,
  date,
  job,
}: {
  index: number;
  variant: any;
  title: string;
  date: string;
  job: string;
}) => {
  const svgRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: svgRef,
    offset: ["start end", "end end"],
  });

  const pathLength = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.article
      ref={svgRef}
      className={`${styles.experience_row} flex align-center ${
        index % 2 === 0 ? "" : styles.right
      }`}
    >
      {/* experience item box */}
      <motion.div
        variants={variant}
        initial="hidden"
        animate="show"
        whileInView={{ y: 0 }}
        className={styles.experience_item}
      >
        <div className="flex align-center">
          <p>{title}</p>
          <p>{date}</p>
        </div>
        <p className={styles.small}>{job}</p>
      </motion.div>

      {/* animation circle */}
      <svg width={30} height={30}>
        <motion.circle r="9" cx={15} cy={15} style={{ pathLength }} />
      </svg>
    </motion.article>
  );
};

export default ExperienceItem;
