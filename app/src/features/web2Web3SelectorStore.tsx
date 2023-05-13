import { create } from "zustand";

export interface IWeb2Web3Selector {
  selected: "web2" | "web3";
  setSelected: (selected: "web2" | "web3") => void;
}

export const useWeb2Web3Selector = create<IWeb2Web3Selector>((set) => ({
  selected: "web3",
  setSelected: (selected) => {
    set({ selected });
  },
}));
