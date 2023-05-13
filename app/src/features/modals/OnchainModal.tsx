import { SocialNames, useModalStore } from "./useModalStore";
import { ICredential, ModalContent } from "../../components/ModalContent";
import { DataLabel } from "./DiscordModal";

export const OnchainModal = () => {
  const { data, close } = useModalStore((state) => ({
    data: state.data,
    close: state.closeModal,
  }));

  const creds: ICredential[] = [
    {
      text: <DataLabel label={"Number of owned NFTs"} data={"350"} />,
      action: () => {},
    },
    {
      text: <DataLabel label={"ENs"} data={"kris0.eth"} />,
      action: () => {},
    },
  ];
  return (
    <ModalContent
      title={SocialNames.Onchain.toUpperCase()}
      credentials={creds}
    />
  );
};
