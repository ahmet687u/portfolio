import { homeCards } from "@/constants";
import Card from "@/components/shared/card/Card";
import Banner from "@/components/home/banner/Banner";
import AboutSection from "@/components/home/about/AboutSection";
import ExperienceSection from "@/components/home/experience/Experience";

export default function Home() {
  return (
    <section className="page">
      <Banner />

      <section className="container card-container">
        {homeCards.map((card, index) => (
          <Card key={index} {...card} />
        ))}
      </section>

      {/* About section */}
      <AboutSection />

      {/* Portfolio Section */}
      <section className="container">
        <header className="title">
          <h1>Tecrübelerim</h1>
        </header>
        <ExperienceSection />
      </section>
    </section>
  );
}
