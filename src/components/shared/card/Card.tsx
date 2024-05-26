import React from "react";
import styles from "./card.module.scss";
import type { THomeCardWithLocale } from "@/types";

const Card = (props: THomeCardWithLocale) => {
  return (
    <article className={styles.card}>
      {/* icon */}
      <props.icon />
      <h3>{props.title}</h3>
      <p className="text">{props.text}</p>
    </article>
  );
};

export default Card;
