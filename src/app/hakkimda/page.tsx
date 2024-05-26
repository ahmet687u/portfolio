import Card from "@/components/shared/card/Card";
import { aboutParagrafs, homeCards } from "@/constants";
import PortfolioSection from "@/components/about/portfolio/PortfolioSection";

const AboutPage = () => {
  return (
    <section className="page container">
      <header className="title">
        <h1>Hakkımda</h1>
      </header>

      {aboutParagrafs.map((txt, i) => (
        <p key={i} className="text">
          {txt}
        </p>
      ))}
      
      {/* Services card section */}
      <section className="container card-container">
        {homeCards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </section>

      {/* experience section */}
      <PortfolioSection />
    </section>
  );
};

export default AboutPage;
