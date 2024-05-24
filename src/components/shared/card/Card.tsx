

import React from "react";
import styles from "./card.module.scss";
import type { THomeCardWithLocale, TLocales } from "@/types";

const Card = (props: THomeCardWithLocale & { locale: TLocales }) => {
  return (
    <article className={styles.card}>
      <props.icon />
      <h3>{props.title[props.locale]}</h3>
      <p className="text">{props.text[props.locale]}</p>
    </article>
  );
};

export default Card;
