import { create } from "zustand";

export const APP_MODALS_ID = "app-modals";
export const APP_MODALS_ID_OUTSIDE = "app-modals-outside";

export enum SocialNames {
  Facebook = "Facebook",
  Twitter = "Twitter",
  Reddit = "Reddit",
  Discord = "Discord",
  TikTok = "TikTok",
  Lens = "Lens",
  Sismo = "Sismo",
  Onchain = "Onchain",
  Github = "Github",
}

interface ModalData {
  HelloWorldView1?: {
    name: string;
  };
  HelloWorldView2?: {
    name: string;
  };
}

export interface IModalStore {
  open: boolean;
  view?: SocialNames;
  data?: ModalData;
  openModal: (props: { view: SocialNames; data?: ModalData }) => void;
  closeModal: () => void;
}

export const useModalStore = create<IModalStore>((set) => ({
  open: false,
  view: undefined,
  data: undefined,
  openModal: (props) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    document.getElementById(APP_MODALS_ID).checked = true;
    set({ open: true, view: props.view, data: props.data });
  },
  closeModal: () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    document.getElementById(APP_MODALS_ID).checked = false;
    set({ open: false, view: undefined, data: undefined });
  },
}));
