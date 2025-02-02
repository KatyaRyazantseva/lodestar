import fs from "node:fs";
import path from "node:path";
import process from "node:process";
import {defineConfig} from "vitest/config";

const __dirname = new URL(".", import.meta.url).pathname;

export default defineConfig((_env) => {
  const isRunningFromRoot = fs.existsSync(path.join(process.cwd(), "vitest.config.ts"));
  const workspaceSuffix = isRunningFromRoot ? "packages/*" : ".";

  return {
    test: {
      pool: "threads",
      poolOptions: {
        threads: {
          minThreads: 5,
          maxThreads: 15,
        },
      },
      exclude: [
        "**/spec-tests/**",
        "**/spec-tests-bls/**",
        "**/*.browser.test.ts",
        "**/node_modules/**",
        "**/dist/**",
        "**/cypress/**",
        "**/.{idea,git,cache,output,temp}/**",
        "**/{karma,rollup,webpack,vite,vitest,jest,ava,babel,nyc,cypress,tsup,build}.config.*",
      ],
      setupFiles: [
        path.join(__dirname, "./scripts/vitest/setupFiles/customMatchers.ts"),
        path.join(__dirname, "./scripts/vitest/setupFiles/dotenv.ts"),
      ],
      reporters: process.env.GITHUB_ACTIONS
        ? ["verbose", "hanging-process", "github-actions"]
        : [process.env.TEST_COMPACT_OUTPUT ? "basic" : "verbose", "hanging-process"],
      coverage: {
        enabled: false,
        clean: true,
        all: false,
        extension: [".ts"],
        provider: "v8",
        reporter: [["lcovonly", {file: "lcov.info"}], ["text"]],
        reportsDirectory: "./coverage",
        exclude: [
          "**/*.d.ts",
          "**/*.js",
          "**/lib/**",
          "**/coverage/**",
          "**/scripts/**",
          "**/test/**",
          "**/types/**",
          "**/bin/**",
          "**/node_modules/**",
          "**/spec-tests/**",
          "**/spec-tests-bls/**",
        ],
      },
      diff: process.env.TEST_COMPACT_DIFF
        ? path.join(import.meta.dirname, "./scripts/vitest/vitest.diff.ts")
        : undefined,
      onConsoleLog: () => !process.env.TEST_QUIET_CONSOLE,

      // If running from root we list all projects of all packages
      workspace: [`${workspaceSuffix}/vitest.config.{unit,e2e,spec,browser}.ts`],
    },
  };
});
