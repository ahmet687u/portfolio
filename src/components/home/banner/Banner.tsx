import styles from "./banner.module.scss";
import ExperienceCircle from "@/components/experience/ExperienceCircle";

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className="left item">
        <header>
          <h1>Hı I am Ahmet. </h1>
        </header>

        <p className="text">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima porro
          nesciunt cupiditate ut repellendus quaerat, dolorum numquam itaque
          voluptatibus nostrum maxime excepturi! Itaque ducimus reprehenderit
          cupiditate. Nihil harum modi illo.
        </p>

        <button>DOWNLOAD CV</button>
      </div>

      <div className="right item my-center">
        <ExperienceCircle />
      </div>
    </div>
  );
}
