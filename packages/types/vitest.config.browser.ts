import {defineConfig, defineProject, mergeConfig} from "vitest/config";
import vitestConfig from "../../configs/vitest.config.base.browser";

export default mergeConfig(
  vitestConfig,
  defineProject({
    test: {
      name: "browser-types"
    },
  })
);
