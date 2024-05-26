"use client";

import CardItem from "./Card";
import { useRef } from "react";
import { useScroll } from "framer-motion";
import { portfolioCards } from "@/constants";

const PortfolioSection = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={container}>
      <header className="title">
        <h1>Çalışmalarım</h1>
      </header>

      {/* stack cards */}
      {portfolioCards.map((card, index) => (
        <CardItem
          {...card}
          index={index}
          key={card.title}
          range={[index * 0.25, 1]}
          progress={scrollYProgress}
          targetScale={1 - (portfolioCards.length - index) * 0.05}
        />
      ))}
    </section>
  );
};

export default PortfolioSection;
