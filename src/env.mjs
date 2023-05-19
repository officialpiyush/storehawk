import { z } from "zod";
import { createEnv } from "@t3-oss/env-nextjs";

export const env = createEnv({
  server: {
    NODE_ENV: z.enum(["development", "test", "production"]),
    HEDERA_NETWORK: z.enum(["previewnet", "testnet", "mainnet"]),
    HEDERA_OPERATOR_ID: z.string().min(1),
    HEDERA_OPERATOR_KEY: z.string().min(96).max(96),
  },

  client: {
  },

  runtimeEnv: {
    NODE_ENV: process.env.NODE_ENV,
    HEDERA_NETWORK: process.env.HEDERA_NETWORK,
    HEDERA_OPERATOR_ID: process.env.HEDERA_OPERATOR_ID,
    HEDERA_OPERATOR_KEY: process.env.HEDERA_OPERATOR_KEY,
  },
});
