import type { usesGroupType } from "@/types/types";

export const usesGroups: usesGroupType[] = [
  {
    heading: "Hardware & desk",
    items: [
      {
        name: "M3 MacBook Air",
        note: "My main machine. Everything on this site was built on it.",
      },
      {
        name: "BenQ PD3205U",
        note: "32-inch 4K display. Docked at the desk so the editor and a browser can sit side by side.",
      },
      {
        name: "Logitech MX Keys",
        note: "Low-profile keyboard that pairs with the laptop and the display setup.",
      },
      {
        name: "Logitech MX Master",
        note: "The mouse I have used for years and keep going back to.",
      },
      {
        name: "Apple AirPods (3rd generation)",
        note: "For calls and anything that needs to be wireless and quick.",
      },
      {
        name: "Sony WH-1000XM4",
        note: "Over-ear and noise cancelling, for longer focused stretches.",
      },
    ],
  },
  {
    heading: "Editor, terminal & CLI",
    items: [
      {
        name: "Visual Studio Code",
        note: "Default Dark Modern theme with Menlo. I stay close to the stock setup.",
      },
      {
        name: "Ghostty",
        note: "Terminal, running zsh.",
      },
      {
        name: "pnpm & Node.js",
        note: "Package manager and runtime for every project, this site included.",
      },
      {
        name: "Git & GitHub",
        note: "Version control, with GitHub Actions running CI and GitHub Pages hosting this site.",
      },
      {
        name: "ESLint & Prettier",
        note: "Linting and formatting, with import sorting and the Tailwind class plugin.",
      },
      {
        name: "Playwright",
        note: "End-to-end tests, including accessibility checks with axe-core.",
      },
      {
        name: "Claude Code, GitHub Copilot & OpenCode",
        note: "AI tooling that sits alongside the editor rather than replacing it.",
      },
    ],
  },
  {
    heading: "Browser & extensions",
    items: [
      {
        name: "Brave",
        note: "Daily driver, and where most of the debugging happens.",
      },
      {
        name: "React Developer Tools",
        note: "Component tree and profiler for React work.",
      },
      {
        name: "uBlock Origin",
        note: "Content blocking.",
      },
      {
        name: "Bitwarden",
        note: "Password manager.",
      },
      {
        name: "Privacy Badger",
        note: "Blocks trackers that follow you between sites.",
      },
    ],
  },
  {
    heading: "Everyday apps",
    items: [
      {
        name: "Apple Notes",
        note: "Quick notes and anything that needs to sync across devices.",
      },
      {
        name: "Apple Reminders",
        note: "Task list, both work and everything else.",
      },
      {
        name: "Notion",
        note: "Project planning and anything that outgrows a plain note.",
      },
      {
        name: "Apple Music",
        note: "Playing for most of the day.",
      },
    ],
  },
];
