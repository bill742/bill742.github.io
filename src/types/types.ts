import { IconType } from "react-icons";

export type iconType = {
  icon: IconType;
  id: number;
  label: string;
  link?: string;
  role: string;
  size: string;
  text?: string;
};

export type headerNavItemType = {
  isHome: boolean;
  key: number;
  link: string;
  text: string;
};
