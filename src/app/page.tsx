import Banner from "@/components/home/banner/Banner";
import AboutSection from "@/components/home/about/AboutSection";
import PortfolioSection from "@/components/home/services/PortfolioSection";

export default function Home() {
  return (
    <section className="page">
      <Banner />

      {/* About section */}
      <AboutSection />

      {/* Services Section */}
      <PortfolioSection />
    </section>
  );
}
