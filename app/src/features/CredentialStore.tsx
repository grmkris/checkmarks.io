import { del, get, set } from "idb-keyval";
import {
  type StateStorage,
  createJSONStorage,
  devtools,
  persist,
} from "zustand/middleware";

import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

export const IDBStorage: StateStorage = {
  getItem: async (name: string): Promise<string | null> => {
    return (await get(name)) || null;
  },
  setItem: async (name: string, value: string): Promise<void> => {
    await set(name, value);
  },
  removeItem: async (name: string): Promise<void> => {
    await del(name);
  },
};

export const CredentialProviders = [
  "twitter",
  "discord",
  "github",
  "tiktok",
  "sismo",
] as const;

export type CredentialProvider = (typeof CredentialProviders)[number];

export interface ICredential {
  name: CredentialProvider;
}

export type CredentialSet = {
  credential: any;
  provider: CredentialProvider;
};
interface ICredentialStore {
  credentials: CredentialSet[];
  addCredential: (creds: CredentialSet) => void;
  removeCredential: (provider: CredentialProvider) => void;
  clear: () => void;
}

export const useCredentialStore = create<ICredentialStore>()(
  devtools(
    persist(
      immer((set) => ({
        credentials: [],
        onSuccessRedirectUrl: undefined,
        addCredential: (creds) => {
          set((state) => {
            if (
              state.credentials.find((c: any) => c.provider === creds.provider)
            ) {
              return;
            } else state.credentials.push(creds);
          });
        },
        removeCredential: (provider) => {},
        selectedCredentials: [],
        clear: () => {
          set((state) => {
            state.credentials = [];
          });
        },
      })),
      {
        name: "verifiable-credential-storage",
        storage: createJSONStorage(() => IDBStorage),
      }
    )
  )
);
