import type { IconType } from "react-icons";
import type { MotionValue } from "framer-motion";

export type TKeysEnum<T extends string | number | symbol> = {
  [Prop in string as T]: any;
};

export type TNavbarLinks = {
  route: string;
  title: string;
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

export interface IExperience {
  title: string;
  date?: string;
  jobTitle: string;
  description: string;
  link?: URL | string;
}

export interface IHomeCardProps {
  text: string;
  title: string;
  color?: string;
}

export type THomeCardWithLocale = {
  title: string;
  text: string;
  icon: IconType;
}

export interface IHomeExperience {
  title: string;
  date: string;
  job: string
}