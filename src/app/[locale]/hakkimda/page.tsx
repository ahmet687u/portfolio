import { aboutText } from "@/constants";
import type { TLocales } from "@/types";
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

      {/* experience section */}
      <PortfolioSection />
    </section>
  );
};

export default AboutPage;
