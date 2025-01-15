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
      exclude: [
        "node_modules/**",
        "dist/**",
        "public/**",
        "**/*.config.*",
        "**/*.test.*",
      ],
      lines: 100, // Schwellenwerte hier definieren
      functions: 100,
      branches: 100,
      statements: 100,
      skipFull: false,
      check: true, // Coverage nach den Tests prüfen
    },
  },
});
