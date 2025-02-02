import {defineProject, mergeConfig} from "vitest/config";
import vitestConfig from "../../configs/vitest.config.base.e2e";

export default mergeConfig(
  vitestConfig,
  defineProject({
    test: {
      name: "e2e-prover",
    }
  })
);
