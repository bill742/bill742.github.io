import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat({
  // import.meta.dirname is available after Node.js v20.11.0
  baseDirectory: import.meta.dirname,
});

const eslintConfig = [
  {
    ignores: ["node_modules/*", ".next/*", "out/*"],
  },
  ...compat.config({
    extends: ["next/core-web-vitals", "next/typescript", "prettier"],

    ignorePatterns: [
      "src/components/ui",
      "tailwind.config.js",
      "playwright.config.ts",
    ],
    plugins: ["simple-import-sort", "sort-keys-fix"],
    rules: {
      "no-console": ["warn"],
      "no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],
      "prefer-arrow-callback": ["error"],
      "prefer-template": ["error"],
      quotes: ["error", "double"],
      semi: ["error"],
      "simple-import-sort/imports": [
        "warn",
        {
          groups: [["^\\u0000"], ["^@?\\w"], ["^[^.]"], ["^\\."], ["^src/.*"]],
        },
      ],
      "sort-keys-fix/sort-keys-fix": [
        "warn",
        "asc",
        {
          caseSensitive: true,
          natural: false,
        },
      ],
    },
  }),
];

export default eslintConfig;
