import { SocialNames, useModalStore } from "./useModalStore";
import { ICredential, ModalContent } from "../../components/ModalContent";

export const DiscordModal = () => {
  const { data, close } = useModalStore((state) => ({
    data: state.data,
    close: state.closeModal,
  }));

  const creds: ICredential[] = [
    {
      text: "Number of servers you are in",
      action: () => {},
    },
    {
      text: "List of servers you are in",
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