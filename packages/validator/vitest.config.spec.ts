import {defineProject, mergeConfig} from "vitest/config";
import vitestConfig from "../../configs/vitest.config.base.spec.js";

export default mergeConfig(
  vitestConfig,
  defineProject({
    test: {
      name: "spec-validator",
    }
  })
);
