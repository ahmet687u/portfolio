import Banner from "@/components/home/banner/Banner";
import AboutSection from "@/components/home/about/AboutSection";
import ExperienceSection from "@/components/home/Experience";

export default function Home() {
  return (
    <section className="page">
      <Banner />

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
