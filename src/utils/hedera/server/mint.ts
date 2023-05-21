import { env } from "@/env.mjs";
import {
    AccountId,
    TokenId,
    TokenMintTransaction,
    TransferTransaction
} from "@hashgraph/sdk";
import { client } from ".";

const EKYAM_CARD_TOKEN_ID = "0.0.13322400";

const SHOP_NFTS: Record<string, string> = {
  frequent:
    "https://bafybeida3no4zojwyctj4blm7xlshubfnjnhltkxghtb7oyng5fypodfc4.ipfs.w3s.link/14.png",
  sustainable:
    "https://bafybeihwep7ll7avky7gxzcblccyt5ndrje3g22fi2ic6rpupey3yoh72e.ipfs.w3s.link/15.png",
  splurge:
    "https://bafybeibb6tjx2lpkd2xxrtmxlna732j2pwnat5dt4nvcpmwjhp6bkfdmny.ipfs.w3s.link/16.png",
};

export const mintNFT = async (type: string, key: string) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const image = SHOP_NFTS[type];

  if (!image) {
    throw new Error("Invalid type");
  }

  const minTransaction = new TokenMintTransaction()
    .setTokenId(EKYAM_CARD_TOKEN_ID)
    .setMetadata([Buffer.from(image)])
    .freezeWith(client);

  const signTransaction = await minTransaction.signWithOperator(client);
  const txResponse = await signTransaction.execute(client);
  const receipt = await txResponse.getReceipt(client);

  console.log("Token Minted", receipt.serials[0]!.low);

  const transferTransaction = await new TransferTransaction()
    .addNftTransfer(
      TokenId.fromString(EKYAM_CARD_TOKEN_ID),
      receipt.serials[0]!.low,
      AccountId.fromString(env.HEDERA_OPERATOR_ID),
      AccountId.fromString(key)
    )
    .freezeWith(client)
    .signWithOperator(client);

  const transferTxResponse = await transferTransaction.execute(client);
  const transferReceipt = await transferTxResponse.getReceipt(client);

  return transferReceipt.serials.toString();
};
