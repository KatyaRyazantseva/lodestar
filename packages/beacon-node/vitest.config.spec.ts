import {defineProject, mergeConfig} from "vitest/config";
import vitestConfig from "../../configs/vitest.config.base.spec";

export default mergeConfig(
  vitestConfig,
  defineProject({
    test: {
      name: "spec-beacon-node",
    }
  })
);
