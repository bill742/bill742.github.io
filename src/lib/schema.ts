// src/lib/schema.ts
//
// Structured data for billdean.me.
//
// Everything lives in one @graph so the entities reference each other by @id
// instead of being repeated. That's the part that actually matters: three
// disconnected JSON-LD blobs describe three unrelated things, whereas one graph
// with @id cross-references tells Google "this site, this page and this person
// are one entity cluster" — which is what consolidates you against the other
// Bill Deans in the index.
//
// The @id values are URIs, not URLs. They never need to resolve; they're just
// stable identifiers. Don't change them once they're live — that's what breaks
// the association you're trying to build.

const SITE = "https://billdean.me" as const;

export const ID = {
  homepage: `${SITE}/#profilepage`,
  person: `${SITE}/#person`,
  photo: `${SITE}/#photo`,
  website: `${SITE}/#website`,
} as const;

/**
 * The Person entity. This is the one that matters — it's what turns the string
 * "Bill Dean" into a thing Google can attach your LinkedIn, GitHub and site to.
 */
export const person = {
  "@id": ID.person,
  "@type": "Person",
  address: {
    "@type": "PostalAddress",
    addressCountry: "CA",
    addressLocality: "Toronto",
    addressRegion: "ON",
  },
  description:
    "Web developer in Toronto with over 10 years of experience building dynamic, scalable and accessible user interfaces with React, TypeScript and Next.js.",
  // Already public as a mailto: on the page, so this exposes nothing new.
  // Drop it if you'd rather not have it machine-readable.
  email: "mailto:hello@billdean.me",

  hasOccupation: {
    "@type": "Occupation",
    name: "Web Developer",
    occupationLocation: {
      "@type": "City",
      name: "Toronto",
    },
    skills:
      "React, TypeScript, Next.js, GraphQL, accessibility (WCAG 2.1 AA), Playwright, Django, Wagtail",
  },

  image: { "@id": ID.photo },

  jobTitle: "Web Developer",

  // Taken verbatim from your Skills section plus the accessibility work that
  // your résumé leads with but the site never names as a skill.
  knowsAbout: [
    "React",
    "TypeScript",
    "Next.js",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "GraphQL",
    "Python",
    "Django",
    "Wagtail",
    "Strapi",
    "WordPress",
    "Jest",
    "Playwright",
    "Web accessibility",
    "WCAG 2.1",
    "Front-end architecture",
    "Component design",
    "Web performance optimization",
  ],

  // TODO — optional. Fill in if you want it, delete the block if not.
  // I've left it commented rather than guessing, since I don't have your
  // education details and inventing them in structured data would be worse
  // than omitting them.
  // alumniOf: {
  //   "@type": "EducationalOrganization",
  //   name: "",
  //   sameAs: "",
  // },
  mainEntityOfPage: { "@id": ID.homepage },

  name: "Bill Dean",

  // The single most important field here. sameAs is how Google merges your
  // scattered profiles into one entity. Every profile you actually maintain
  // should be listed; anything you don't control or don't keep current should
  // not be, because a dead profile in sameAs weakens the cluster rather than
  // strengthening it.
  sameAs: [
    "https://www.linkedin.com/in/bill-dean-a94aa68",
    "https://github.com/bill742",
    "https://www.npmjs.com/~bill742",
    // "https://dev.to/<handle>",
    // "https://x.com/<handle>",
  ],

  url: SITE,
} as const;

/**
 * Your photo, as a first-class node so both Person and ProfilePage can point at
 * the same image rather than each carrying a duplicate copy.
 *
 * NOTE: /images/bill-dean.jpg is currently 180x180. Google wants at least
 * 696px on the long edge for images in rich results, so this one is likely to
 * be ignored. Export a larger version at the same path (or a new one) and
 * update the dimensions below — it's a two-minute change that decides whether
 * your face shows up next to your name.
 */
export const photo = {
  "@id": ID.photo,
  "@type": "ImageObject",
  caption: "Bill Dean",
  contentUrl: `${SITE}/images/bill-dean.jpg`,
  height: 180,
  url: `${SITE}/images/bill-dean.jpg`,
  width: 180,
} as const;

export const website = {
  "@id": ID.website,
  "@type": "WebSite",
  description:
    "Portfolio of Bill Dean, a web developer in Toronto specializing in React, TypeScript and Next.js.",
  inLanguage: "en",
  name: "Bill Dean",
  publisher: { "@id": ID.person },
  url: SITE,
} as const;

/**
 * ProfilePage is the correct page type for a personal portfolio homepage —
 * more specific than WebPage, and Google reads mainEntity from it to work out
 * who the page is about.
 */
export const profilePage = {
  "@id": ID.homepage,
  "@type": "ProfilePage",
  about: { "@id": ID.person },
  inLanguage: "en",
  isPartOf: { "@id": ID.website },
  mainEntity: { "@id": ID.person },
  name: "Bill Dean — Web Developer",
  primaryImageOfPage: { "@id": ID.photo },
  url: `${SITE}/`,
} as const;

/** Sitewide graph — Person, photo and WebSite. Goes in the root layout. */
export const siteGraph = {
  "@context": "https://schema.org",
  "@graph": [person, photo, website],
};

/** Homepage graph — everything above plus the ProfilePage node. */
export const homeGraph = {
  "@context": "https://schema.org",
  "@graph": [person, photo, website, profilePage],
};

// ---------------------------------------------------------------------------
// For later: blog posts and project case studies.
// Both reference the Person by @id rather than restating the author, which is
// what makes each post accrue to your entity instead of floating free.
// ---------------------------------------------------------------------------

type PostInput = {
  slug: string;
  title: string;
  description: string;
  datePublished: string; // ISO 8601, e.g. "2026-09-14"
  dateModified?: string;
  image?: string; // absolute URL
};

export function blogPostingGraph(post: PostInput) {
  const url = `${SITE}/blog/${post.slug}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      person,
      photo,
      website,
      {
        "@id": `${url}#post`,
        "@type": "BlogPosting",
        author: { "@id": ID.person },
        dateModified: post.dateModified ?? post.datePublished,
        datePublished: post.datePublished,
        description: post.description,
        headline: post.title,
        inLanguage: "en",
        isPartOf: { "@id": ID.website },
        mainEntityOfPage: url,
        publisher: { "@id": ID.person },
        url,
        ...(post.image ? { image: post.image } : {}),
      },
    ],
  };
}
