"use client";

import CardItem from "./Card";
import { useRef } from "react";
import { useScroll } from "framer-motion";
import { serviceCards } from "@/constants";

const PortfolioSection = (): JSX.Element => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={container} className="container">
      <header className="title">
        <h1>Çalışmalarım</h1>
      </header>

      {/* stack cards */}
      {serviceCards.map((card, index) => (
        <CardItem
          {...card}
          index={index}
          key={card.title}
          progress={scrollYProgress}
          range={[index * 0.25, 1]}
          targetScale={1 - (serviceCards.length - index) * 0.05}
        />
      ))}
    </section>
  );
};

export default PortfolioSection;
