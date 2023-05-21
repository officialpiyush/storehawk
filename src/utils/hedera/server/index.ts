import { env } from "@/env.mjs";
import { Client, LocalProvider, Wallet } from "@hashgraph/sdk";

const client = Client.forTestnet().setOperator(
  env.HEDERA_OPERATOR_ID,
  env.HEDERA_OPERATOR_KEY
);

const wallet = new LocalProvider({
  client: client,
});

export { client, wallet };
