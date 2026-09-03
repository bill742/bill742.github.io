import { ComponentType } from "react";
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
  isHomeSection: boolean;
  key: number;
  link: string;
  text: string;
};

export type postType = {
  // Static import so the bundler can code-split each post into its own chunk
  // (a templated import path can't be statically traced).
  content: () => Promise<{ default: ComponentType }>;
  date: string;
  slug: string;
  summary: string;
  title: string;
};

export type usesItemType = {
  name: string;
  note: string;
};

export type usesGroupType = {
  heading: string;
  items: usesItemType[];
};
