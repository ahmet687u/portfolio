import { IconType } from "react-icons";

export type TNavbarLinks = {
  route: string;
  label: string;
}

export interface IShareButton {
  Icon: IconType;
  className?: string;
}