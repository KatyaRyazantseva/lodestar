import {defineConfig} from "vitest/config";

export default defineConfig({
  test: {
    include: ["**/test/e2e/**/*.test.ts"],
    poolOptions: {
      forks: {
        singleFork: true,
      },
      threads: {
        singleThread: true,
      },
    },
  },
});
