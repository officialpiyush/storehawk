import { signal } from "@preact/signals-react";
import type {
  HashConnectConnectionState,
  HashConnectTypes,
} from "hashconnect/dist/esm/types";

export const hashConnectAvailableExtension =
  signal<HashConnectTypes.WalletMetadata | null>(null);
export const hashConnectState = signal<HashConnectConnectionState | null>(null);
export const hashConnectTopic = signal<string | null>(null);
export const hashpackExtensionFound = signal<boolean>(false);
