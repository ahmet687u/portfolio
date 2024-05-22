import { aboutText } from "@/constants";
import PortfolioSection from "@/components/about/portfolio/PortfolioSection";

const AboutPage = () => {
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
};

export default AboutPage;
