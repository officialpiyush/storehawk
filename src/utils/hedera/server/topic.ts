/* eslint-disable @typescript-eslint/no-non-null-assertion */
import {
  TopicId,
  TopicMessageQuery,
  TopicMessageSubmitTransaction,
} from "@hashgraph/sdk";
import { client, wallet } from "./index";

const TOPIC_IDS: Record<string, string> = {
  // todo: "0.0.13320726-oezod",
  todo: "0.0.13322472",
  chat: "0.0.13322405",
};

export const getTopic = async (subTopic: string) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unnecessary-type-assertion
  const topicId = TopicId.fromString(TOPIC_IDS[subTopic]!);

  const messagesList: {
    contents: string;
    timestamp: Date;
    transactionId: string;
  }[] = [];

  new TopicMessageQuery()
    .setTopicId(topicId)
    .setStartTime(0)
    .subscribe(
      client,
      (errorMessage) => console.log("Error: ", errorMessage),
      (message) => {
        // console.log(Buffer.from(message.contents).toString("utf-8"));
        // messagesList.push(Buffer.from(message.contents).toString("utf-8"));
        messagesList.push({
          contents: Buffer.from(message.contents).toString("utf-8"),
          timestamp: message.consensusTimestamp.toDate(),
          transactionId: message.initialTransactionId
            ? message.initialTransactionId.toString()
            : "no-id",
        });
      }
    );

  await new Promise((resolve) => setTimeout(resolve, 3000));

  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return messagesList;
};

export const createMessage = async (subTopic: string, message: string) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unnecessary-type-assertion
  const topicId = TopicId.fromString(TOPIC_IDS[subTopic]!);

  const transaction = await new TopicMessageSubmitTransaction()
    .setTopicId(topicId)
    .setMessage(message)
    .execute(client);

  const transactionReceipt = await transaction.getReceipt(client);

  console.log(transactionReceipt);
  return transaction.transactionId.toString();
};
