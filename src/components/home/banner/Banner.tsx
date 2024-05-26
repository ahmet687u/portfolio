import Link from "next/link";
import styles from "./banner.module.scss";
import ExperienceCircle from "@/components/experience/ExperienceCircle";

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className="left item">
        <header>
          <h1>Merhaba ben Ahmet 🖐️</h1>
          <h5>Front End Geliştirici</h5>
        </header>

        <p className="text">
          Web Geliştirme Yolculuğuna Hoş Geldiniz! İşlevsellikten Tasarıma,
          Kodlama Sanatıyla Sınırları Zorluyorum. Dijital Dünyayı Yeniden
          Şekillendirirken, İhtiyaçlarınıza Özel Çözümler Sunuyorum.
          Hayallerinizi Kodlarla Gerçeğe Dönüştürmek İçin Birlikte Çalışalım!
        </p>

        <Link
          href="/cv.pdf"
          locale={false}
          target="_blank"
          download={true}
          rel="noopener noreferrer"
        >
          <button>CV İNDİR</button>
        </Link>
      </div>

      <div className="right item my-center">
        <ExperienceCircle />
      </div>
    </div>
  );
}
