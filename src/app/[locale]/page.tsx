import type { TLocales } from "@/types";
import Banner from "@/components/home/banner/Banner";
import { getLocaleJson } from "@/utils/getLocaleJson";
import ExperienceSection from "@/components/home/Experience";
import AboutSection from "@/components/home/about/AboutSection";
import Card from "@/components/shared/card/Card";
import { homeCards } from "@/constants";

export default function Home({ params }: { params: { locale: TLocales } }) {
  return (
    <section className="page">
      <Banner locale={params.locale} />

      <section className="container card-container">
        {homeCards.map((card, index) => (
          <Card key={index} {...card} locale={params.locale} />
        ))}
      </section>

      {/* About section */}
      <AboutSection locale={params.locale} />

      {/* Portfolio Section */}
      <section className="container">
        <header className="title">
          <h1>{getLocaleJson()[params.locale].home.services.title}</h1>
        </header>
        <ExperienceSection />
      </section>
    </section>
  );
}
