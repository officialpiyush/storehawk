import { signal } from "@preact/signals-react";
import { HashConnect } from "hashconnect";
import type {
  HashConnectConnectionState,
  HashConnectTypes,
} from "hashconnect/dist/esm/types";

export const hashConnectAvailableExtension =
  signal<HashConnectTypes.WalletMetadata | null>(null);
export const hashConnectState = signal<HashConnectConnectionState | null>(null);
export const hashConnectTopic = signal<string | null>(null);
export const hashpackExtensionFound = signal<boolean>(false);
export const initData = signal<HashConnectTypes.InitilizationData | null>(null);

export const StoreHawkHashConnectMetadata: HashConnectTypes.AppMetadata = {
  name: "StoreHawk",
  description: "something",
  // TODO: create and add icon
  icon: "https://pycz.dev/favicon.svg",
  url: "http://localhost:3000",
};

const hashConnect = new HashConnect(true);

void hashConnect
  .init(StoreHawkHashConnectMetadata, "testnet", true)
  .then((data: HashConnectTypes.InitilizationData) => {
    initData.value = data;
  });
