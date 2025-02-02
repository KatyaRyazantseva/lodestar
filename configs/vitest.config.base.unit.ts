import {defineConfig} from "vitest/config";

export default defineConfig({
  test: {
    include: ["**/test/unit/**/*.test.ts"],
    exclude: ["**/*.browser.test.ts"],
    // There are some tests which are taking huge time
    // test/unit/chain/rewards/blockRewards.test.ts > chain / rewards / blockRewards > Normal case 73869ms
    // for now I tried to identify such tests an increase the limit a bit higher
    testTimeout: 20_000,
    hookTimeout: 20_000,
  },
});
