import { homeCards } from "@/constants";
import type { TLocales } from "@/types";
import Card from "@/components/shared/card/Card";
import { getLocaleJson } from "@/utils/getLocaleJson";
import PortfolioSection from "@/components/about/portfolio/PortfolioSection";

const AboutPage = ({ params }: { params: { locale: TLocales } }) => {
  return (
    <section className="page container">
      <header className="title">
        <h1>{getLocaleJson()[params.locale].about.title}</h1>
      </header>

      {getLocaleJson()[params.locale].about.paragrafs.map((txt, i) => (
        <p key={i} className="text">
          {txt}
        </p>
      ))}
      
      {/* Services card section */}
      <section className="container card-container">
        {homeCards.map((card, index) => (
          <Card key={index} {...card} locale={params.locale} />
        ))}
      </section>

      {/* experience section */}
      <PortfolioSection locale={params.locale} />
    </section>
  );
};

export default AboutPage;
