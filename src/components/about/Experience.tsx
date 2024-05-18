import styles from "./experience.module.scss";

const ExperienceSection = () => {
  return (
    <section className={styles.experince_container}>
      <div className={styles.line}></div>
      <div className={`${styles.experience_row} flex align-center`}>
        <div className={styles.experience_item}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel
          blanditiis inventore numquam voluptas animi veritatis?
        </div>
      </div>
      <div className={`${styles.right} ${styles.experience_row} flex align-center`}>
        <div className={styles.experience_item}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel
          blanditiis inventore numquam voluptas animi veritatis?
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
