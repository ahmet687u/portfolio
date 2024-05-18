"use client";

import { useRef } from "react";
import styles from "./experience.module.scss";
import { motion, useScroll } from "framer-motion";

const ExperienceSection = () => {
  const ref = useRef(null);
  const itemRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center"]
  });
  const { scrollYProgress: itemScroll } = useScroll({
    target: itemRef,
    offset: ["center end", "center center"]
  });

  return (
    <section ref={ref} className={styles.experince_container}>
      <motion.div className={styles.line} style={{ scaleY: scrollYProgress }}></motion.div>

      <article ref={itemRef} style={{position: "relative"}} className={`${styles.experience_row} flex align-center`}>
        <div className={styles.experience_item}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel
          blanditiis inventore numquam voluptas animi veritatis?
          <svg width={30} height={30}>
            <motion.circle r="9" cx={15} cy={15} style={{ pathLength: itemScroll }} />
          </svg>
        </div>
      </article>

      <div
        className={`${styles.right} ${styles.experience_row} flex align-center`}
      >
        <div className={styles.experience_item}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel
          blanditiis inventore numquam voluptas animi veritatis?
          <svg width={30} height={30}>
            <circle r="9" cx={15} cy={15} />
          </svg>
        </div>
      </div>

      <div className={`${styles.experience_row} flex align-center`}>
        <div className={styles.experience_item}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel
          blanditiis inventore numquam voluptas animi veritatis?
          <svg width={30} height={30}>
            <circle r="9" cx={15} cy={15} />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
