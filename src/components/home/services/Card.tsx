"use client";

import { useRef } from "react";
import styles from "./card.module.scss";
import type { ICardItemProps } from "@/types";
import { motion, useTransform } from "framer-motion";
import Link from "next/link";

const CardItem = (props: ICardItemProps): JSX.Element => {
  const container = useRef(null);
  const scale = useTransform(props.progress, props.range, [
    1,
    props.targetScale,
  ]);

  return (
    <article
      ref={container}
      key={props.title}
      className={`my-center ${styles.card_container}`}
    >
      <motion.div
        className={styles.card}
        data-index={props.index + 1}
        // data-index={props.title}
        style={{
          scale,
          backgroundColor: props.color,
          top: `calc(-10% + ${props.index * 50}px)`,
        }}
      >
        <h2>{props.title}</h2>

        {props?.link ? <Link href={props.link} className={styles.link}>{props.link}</Link> : null}
        
        <p className="text">{props.description}</p>

      </motion.div>
    </article>
  );
};

export default CardItem;
