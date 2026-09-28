import type { caseStudyType } from "@/types/types";

// Long-form write-ups for the projects in the Projects section. A portfolio
// entry opts in by setting `caseStudySlug` to a slug in this list; anything
// without one just renders as a card. This array is the single source of truth
// for the /projects index, each /projects/[slug] page, its metadata and the
// routes generated at build time.
export const caseStudies: caseStudyType[] = [
  {
    datePublished: "2026-09-03",
    demoLink: "https://www.nextstarter.app/",
    facts: [
      { label: "Role", value: "Solo design, build, docs, and release" },
      { label: "Timeline", value: "February 2025 – present" },
      { label: "Type", value: "Open-source boilerplate + paid starter kit" },
      { label: "Status", value: "Live. Lite is open source, Pro is for sale" },
    ],
    githubLink: "nextstarter-lite",
    highlights: [
      {
        description:
          "The free, MIT-licensed boilerplate: an accessible Next.js 16 app with shadcn/ui, three-way theming, Playwright end-to-end tests and CI already wired together.",
        title: "NextStarter Lite",
      },
      {
        description:
          "The paid tier, built on the same foundation: Clerk authentication, Prisma and PostgreSQL, Stripe subscriptions, Resend email, a dashboard shell, an admin panel and internationalization.",
        title: "NextStarter Pro",
      },
      {
        description:
          "A scaffolding CLI so a new project is one command rather than a clone, a history rewrite and a find-and-replace through the config files.",
        title: "create-nextstarter",
      },
    ],
    image: "nextstarter-case-study.png",
    intro:
      "Every project I started began the same way: two days of wiring and setup before a single feature existed. NextStarter is that setup work, done once and done properly allowing me to focus my time on building features.",
    sections: [
      {
        body: [
          "Boilerplates are easy to start and hard to justify. There are dozens of Next.js starters, most of them a package.json and a README, and the two things that separate a useful one from a dead repo are both unglamorous: it has to still build a year later, and it has to be honest about what it gives you.",
          "So I set two constraints before writing any code. Accessibility would be verified by tests rather than claimed in a feature list, and every third-party integration would be optional. The app had to build, run and pass its full test suite without any API keys at all. Both constraints are the kind you cannot retrofit, which is why they came first.",
        ],
        heading: "Why build another starter",
      },
      {
        body: [
          "Almost every starter in this category lists accessibility as a bullet point. Practically none of them test it, which means the claim decays the moment someone adds a component.",
          "NextStarter scans every page with Axe-core inside the Playwright suite, in light and dark mode, on every run. A contrast regression or a missing label fails CI the same way a broken import would. The project targets WCAG 2.1 AA, and the tests are what keep that true rather than aspirational.",
          "The same suite runs across Chromium, Firefox and WebKit. Rendering differences between engines are exactly where accessible markup quietly stops being accessible, so testing one browser would have undercut the point.",
        ],
        heading: "Accessibility as a tested guarantee, not a claim",
      },
      {
        body: [
          "The usual failure mode of a batteries-included starter is that it only works once you have signed up for six services. Delete the parts you do not want and you unravel the rest of the app; leave them in without keys and the build breaks.",
          'Every integration in NextStarter is gated behind an environment variable. With no keys configured the app builds, runs and passes CI; the features you have not set up render a tidy "not configured" notice instead of a stack trace. Adding a key is what turns each one on.',
          "That single decision is what makes the codebase pleasant to inherit. Each integration is self-contained enough to leave switched off forever or to delete outright, and nothing else notices.",
        ],
        heading: "Optional by environment",
        list: [
          "Authentication — Clerk, with protected routes and user sync",
          "Database — Prisma and PostgreSQL, with a real user-owned CRUD example",
          "Payments — Stripe subscriptions, Checkout and the customer portal",
          "Email — Resend and React Email with transactional templates",
          "Analytics and error tracking — PostHog (cookieless) and Sentry",
          "Security — CSP and hardening headers, rate limiting, input sanitization",
        ],
      },
      {
        body: [
          "Lite and Pro live in separate repositories, and Pro is built from Lite. Everything in the free tier is in the paid one, unchanged. Framework, theming, accessibility, testing and tooling all come from Lite, and Pro layers the SaaS plumbing on top without altering anything underneath.",
          "Splitting them this way is what lets the foundation stay open source while the paid layer stays behind a purchase. It also keeps the free tier honest. Lite is not a stripped demo built to sell an upgrade, it is the base every Pro project actually stands on, so it has to hold up on its own.",
          "Being a private repository is also how Pro is delivered. Buyers are added to it on purchase, clone it, and take updates with git pull, which lets them keep the starter as a remote across several of their own projects.",
        ],
        heading: "Two tiers, one foundation",
      },
      {
        body: [
          'Internationalization is where most starters stop at "we included a library." NextStarter ships English, Spanish and Arabic, and the Arabic locale is the point: right-to-left layout is where a component library\'s assumptions actually surface.',
          "Getting RTL right meant auditing every hard-coded direction in the UI — margins, icon placement, drawer transitions, the sidebar — and replacing them with logical properties. It is the kind of work that is invisible when it is done and glaring when it is not.",
        ],
        heading: "Internationalization, including right-to-left",
      },
      {
        body: [
          "A starter kit is also a product, and the marketing site had the same problem the codebase did not: it was technically clean and effectively invisible. Its title tag was a single word, its sitemap held one URL, and the Pro pitch lived at an anchor — which cannot rank, cannot carry its own metadata and cannot be returned for a search.",
          "I ran a full audit, then rebuilt the metadata layer: per-page titles and descriptions, a JSON-LD entity graph, Open Graph images generated at build time, and a dedicated /pro route with its own keyword target so the two pages complement rather than compete with each other.",
        ],
        heading: "Making the product findable",
      },
    ],
    slug: "nextstarter",
    summary:
      "How I built NextStarter — an accessible Next.js 16 boilerplate with a paid SaaS tier — around two constraints: accessibility verified by tests, and every integration optional by environment.",
    tagline:
      "A production-ready Next.js boilerplate built around two rules: prove the accessibility with tests, and make every integration optional.",
    takeaways: [
      "Constraints chosen before the first commit are the only ones that survive. Accessibility and optional-by-environment both shaped the architecture; either one added later would have meant a rewrite.",
      "A test that fails is worth more than a feature bullet. Axe-core in CI is the difference between a starter that is accessible today and one that stays accessible after someone else touches it.",
      "The free tier has to be genuinely useful. Building Pro on top of Lite keeps the foundation honest, because I am shipping it to myself on every project.",
      "Shipping the code is roughly half the work. Documentation, delivery, licensing and being findable at all turned out to take about as long as the features did.",
    ],
    techStack: [
      "Next.js 16",
      "TypeScript",
      "Tailwind CSS v4",
      "React 19",
      "shadcn/ui",
      "Playwright",
      "Axe-core",
      "Prisma",
      "Stripe",
      "Clerk",
    ],
    title: "NextStarter",
  },
];

export function getCaseStudy(slug: string): caseStudyType | undefined {
  return caseStudies.find((study) => study.slug === slug);
}
