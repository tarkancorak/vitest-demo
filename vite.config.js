import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    coverage: {
      reporter: ["text", "lcov"],
      provider: "v8",
      all: true,
      include: ["src/**/*.js", "src/**/*.jsx"],
      exclude: ["node_modules/**", "dist/**", "public/**", "**/*.config.*"],
      thresholds: {
        lines: 20,
        functions: 25,
        branches: 50,
        statements: 20,
      },
      skipFull: false,
      check: true,
    },
  },
});
