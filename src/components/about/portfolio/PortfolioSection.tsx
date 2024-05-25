"use client";

import CardItem from "./Card";
import { useRef } from "react";
import { useScroll } from "framer-motion";
import { TLocales } from "@/types";
import { getLocaleJson } from "@/utils/getLocaleJson";

const PortfolioSection = ({locale}: {locale: TLocales}) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={container} className="container">
      <header className="title">
        <h1>{getLocaleJson()[locale].about.portfolio.title}</h1>
      </header>

      {/* stack cards */}
      {getLocaleJson()[locale].about.portfolio.projects.map((card, index) => (
        <CardItem
          {...card}
          index={index}
          key={card.title}
          range={[index * 0.25, 1]}
          progress={scrollYProgress}
          targetScale={1 - (getLocaleJson()[locale].about.portfolio.projects.length - index) * 0.05}
        />
      ))}
    </section>
  );
};

export default PortfolioSection;
