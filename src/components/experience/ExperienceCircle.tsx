import classes from "./circle.module.scss";
import { experienceCircleIcons as circles } from "@/constants/";

export default function ExperienceCircle() {
  return (
    <div className={`flex ${classes.circle_wrapper}`}>
      <div className={classes.content}>
        <div className={classes.relative}>
          {circles.map(({ Icon }, index) => (
            <div
              className={classes.circle_item}
              style={{ ["--i" as any]: index + 1 }}
              key={index}
            >
              <div className={`${classes.anti_circle} my-center`}>
                <Icon color="#fff" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
