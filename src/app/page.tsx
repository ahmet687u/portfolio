import Banner from "@/components/home/banner/Banner";
import AboutSection from "@/components/home/about/AboutSection";

export default function Home() {
  return (
    <section className="page">
      <Banner />

      {/* About section */}
      <AboutSection />
    </section>
  );
}
