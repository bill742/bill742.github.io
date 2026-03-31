import { defineConfig, globalIgnores } from "eslint/config";
import globals from "globals";
import sortKeysFix from "eslint-plugin-sort-keys-fix";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";
import nextPlugin from "@next/eslint-plugin-next";
import prettierPlugin from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";
import reactMemo from "eslint-plugin-react-memo";

export default defineConfig([
  globalIgnores([
    "**/*.js",
    "**/*.cjs",
    "**/*.mjs",
    "src/components/ui/**",
    "**/.next/*",
    "*.config.ts",
  ]),
  {
    files: ["**/*.ts", "**/*.tsx"],
    ignores: [".config/**"],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.es2020,
      },
      parser: tsParser,
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        jsxPragma: null,
      },
    },
    plugins: {
      "@typescript-eslint": tsPlugin,
      "@next/next": nextPlugin,
      "simple-import-sort": simpleImportSort,
      "sort-keys-fix": sortKeysFix,
      prettier: prettierPlugin,
      "react-memo": reactMemo,
    },
    rules: {
      // TypeScript recommended rules
      ...tsPlugin.configs.recommended.rules,
      // Next.js recommended rules
      ...nextPlugin.configs.recommended.rules,
      // Prettier formatting (must come last to override conflicting rules)
      ...prettierConfig.rules,
      "prettier/prettier": "warn",
      // Disable base rule in favour of TypeScript-aware version
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^_",
          varsIgnorePattern: "^_",
        },
      ],
      "no-console": ["warn"],
      "prefer-arrow-callback": ["error"],
      "prefer-template": ["error"],
      quotes: ["error", "double", { avoidEscape: true }],
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
  },
]);
