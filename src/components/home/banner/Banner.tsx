import type { TLocales } from "@/types";
import styles from "./banner.module.scss";
import ExperienceCircle from "@/components/experience/ExperienceCircle";
import { getLocaleJson } from "@/utils/getLocaleJson";

export default function Banner({ locale }: { locale: TLocales }) {
  return (
    <div className={styles.banner}>
      <div className="left item">
        <header>
          <h1>{getLocaleJson()[locale].home.banner.title}</h1>
          <h5>{getLocaleJson()[locale].home.banner.job}</h5>
        </header>

        <p className="text">{getLocaleJson()[locale].home.banner.text}</p>

        <button>{getLocaleJson()[locale].home.banner.buttonText}</button>
      </div>

      <div className="right item my-center">
        <ExperienceCircle />
      </div>
    </div>
  );
}
