import PortfolioSection from "@/components/about/portfolio/PortfolioSection";
import { aboutText } from "@/constants";

export default function About() {
  return (
    <section className="page container">
      <header className="title">
        <h1>HAKKIMDA</h1>
      </header>

      {aboutText.map((txt, i) => (
        <p key={i} className="text">
          {txt}
        </p>
      ))}

      {/* experience section */}
      <PortfolioSection />
    </section>
  );
}
