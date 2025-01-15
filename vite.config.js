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
        lines: 80,
        functions: 80,
        branches: 80,
        statements: 80,
      },
      skipFull: false,
      check: true,
    },
  },
});
