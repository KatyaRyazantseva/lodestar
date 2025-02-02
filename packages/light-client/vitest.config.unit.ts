import {defineProject, mergeConfig} from "vitest/config";
import vitestConfig from "../../configs/vitest.config.base.unit.js";

export default mergeConfig(
  vitestConfig,
  defineProject({
    test: {
      name: "unit-light-client",
    }
  })
);
