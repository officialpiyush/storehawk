import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { wallet, client } from "@/utils/hedera/server";
import { createMessage, getTopic } from "@/utils/hedera/server/topic";
import { mintNFT } from "@/utils/hedera/server/mint";

export const hederaRouter = createTRPCRouter({
  hello: publicProcedure.query(async () => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const accountInfo = await wallet.getAccountInfo(client.operatorAccountId!);
    return {
      id: accountInfo.accountId.toString(),
    };
  }),

  getTopic: publicProcedure
    .input(
      z.object({
        subTopic: z.string(),
      })
    )
    .query(async ({ input }) => {
      const messages = await getTopic(input.subTopic);

      return {
        messages,
      };
    }),

  addMessage: publicProcedure
    .input(
      z.object({
        subTopic: z.string(),
        message: z.string(),
      })
    )
    .mutation(async ({ input }) => {
      const { subTopic, message } = input;

      const transactionId = await createMessage(subTopic, message);

      return {
        transactionId,
      };
    }),

    mintNFT: publicProcedure
    .input(
      z.object({
        type: z.string(),
        key: z.string(),
      })
    )
    .mutation(async ({ input }) => {
      const { type, key } = input;

      const transactionId = await mintNFT(type, key);

      console.log(transactionId);

      return {
        transactionId,
      };
    })
});
