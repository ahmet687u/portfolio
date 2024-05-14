import styles from "./banner.module.scss";
import ExperienceCircle from "@/components/experience/ExperienceCircle";

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className="left item">
        <header>
          <h1>Hı I am Ahmet. </h1>
          <h5>I am a Front End Developer</h5>
        </header>

        <p className="text">
          Web Geliştirme Yolculuğuna Hoş Geldiniz! İşlevsellikten Tasarıma,
          Kodlama Sanatıyla Sınırları Zorluyorum. Dijital Dünyayı Yeniden
          Şekillendirirken, İhtiyaçlarınıza Özel Çözümler Sunuyorum.
          Hayallerinizi Kodlarla Gerçeğe Dönüştürmek İçin Birlikte Çalışalım!
        </p>

        <button>DOWNLOAD CV</button>
      </div>

      <div className="right item my-center">
        <ExperienceCircle />
      </div>
    </div>
  );
}
