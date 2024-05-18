"use client"

import {motion} from 'framer-motion'
import styles from "./cog.module.scss";
import type { ICogProps } from "@/types";

const Cog = ({ size, ledgePiece, ...props }: ICogProps) => {
  return (
    <motion.div className={styles.cog} style={{ width: size, height: size, ...props?.style }}>
      {new Array(ledgePiece).fill(null).map((_, index) => (
        <div
          key={index}
          className={`${styles[props.className as string]} ${styles.ledge}`}
          style={{
            ["--i" as string]: index + 1,
            ["--ledge-piece" as string]: ledgePiece
          }}
        ></div>
      ))}
    </motion.div>
  );
};

export default Cog;
