import { FlatCompat } from "@eslint/eslintrc";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.config({
    extends: ["next/core-web-vitals", "next/typescript", "prettier"],
    plugins: ["simple-import-sort", "sort-keys-fix"],
    rules: {
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
