import type { IconType } from "react-icons";
import type { MotionValue } from "framer-motion";

export type TNavbarLinks = {
  route: string;
  label: string;
}

export interface IShareButton {
  Icon: IconType;
  className?: string;
}

export interface IPortfolioCards {
  title: string;
  color: string;
  link?: string;
  description: string;
}

export interface ICardItemProps extends IPortfolioCards {
  key: string;
  index: number;
  range: number[];
  targetScale: number;
  progress: MotionValue<number>
}

// export interface IExperience extends Omit<IPortfolioCards, "color"> {

// }

export interface IExperience {
  title: string;
  date?: string;
  jobTitle: string;
  description: string;
  link?: URL | string;
}