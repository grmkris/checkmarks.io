import { SocialNames, useModalStore } from "./useModalStore";
import { ICredential, ModalContent } from "../../components/ModalContent";

export const SismoModal = () => {
  const { data, close } = useModalStore((state) => ({
    data: state.data,
    close: state.closeModal,
  }));

  const creds: ICredential[] = [
    {
      text: "Your vault Id",
      action: () => {},
    },
    {
      text: "Your ZKPs",
      action: () => {},
    },
  ];
  return (
    <ModalContent
      title={SocialNames.Discord.toUpperCase()}
      credentials={creds}
    />
  );
};
