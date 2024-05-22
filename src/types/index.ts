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

export interface IExperience {
  title: string;
  date?: string;
  jobTitle: string;
  description: string;
  link?: URL | string;
}

export interface ICogProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
  size: number;
  ledgePiece: number;
}

export type TLocales = "tr" | "en"

export interface ILocalePageProps {
  params: {
    locale: TLocales
  }
}

export type TKeysEnum<T extends string | number | symbol> = {
  [Prop in string as T]: T;
};
