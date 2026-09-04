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

export type portfolioItemType = {
  /** A slug in `caseStudies`. Set it to give the card a case study link. */
  caseStudySlug?: string;
  content: string;
  demoLink?: string;
  description: string;
  /** A repo name under github.com/bill742. */
  githubLink?: string;
  id: string;
  /** A file in /public/images/projects. */
  image?: string;
  techStack?: string;
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

/** A label/value pair in a case study's at-a-glance panel. */
export type caseStudyFactType = {
  label: string;
  value: string;
};

/** One of the "what's in the box" cards near the top of a case study. */
export type caseStudyHighlightType = {
  description: string;
  title: string;
};

/** A prose section of a case study: a heading, paragraphs, and an optional list. */
export type caseStudySectionType = {
  body: string[];
  heading: string;
  list?: string[];
};

export type caseStudyType = {
  dateModified?: string;
  datePublished: string;
  demoLink?: string;
  facts: caseStudyFactType[];
  /** A repo name under github.com/bill742, matching the portfolio entries. */
  githubLink?: string;
  highlights: caseStudyHighlightType[];
  /** A file in /public/images/projects, matching the portfolio entries. */
  image?: string;
  intro: string;
  sections: caseStudySectionType[];
  slug: string;
  summary: string;
  tagline: string;
  takeaways: string[];
  techStack: string[];
  title: string;
};
