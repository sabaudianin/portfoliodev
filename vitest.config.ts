import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./tests/setup.ts",
    include: ["**/*.spec.tsx", "**/*.test.tsx", "**/*.spec.ts", "**/*.test.ts"],
  },
  resolve: {
    alias: {
      "@": new URL("./src", import.meta.url).pathname, // Poprawka dla aliasów TS
    },
  },
});
