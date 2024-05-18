import { aboutText } from "@/constants";
import ExperienceSection from "@/components/home/Experience";

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
      <header className="title">
        <h3>Tecrübelerim</h3>
      </header>

      {/* <ExperienceSection /> */}
    </section>
  );
}
