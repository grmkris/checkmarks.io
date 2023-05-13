import { SocialNames, useModalStore } from "./useModalStore";
import { ICredential, ModalContent } from "../../components/ModalContent";
import { DataLabel } from "./DiscordModal";

export const SismoModal = () => {
  const { data, close } = useModalStore((state) => ({
    data: state.data,
    close: state.closeModal,
  }));

  const creds: ICredential[] = [
    {
      text: <DataLabel label={"Your vaultId"} data={"372"} />,
      action: () => {},
    },
    {
      text: <DataLabel label={"Your ZKPs"} data={"TBD"} />,
      action: () => {},
    },
  ];
  return (
    <ModalContent title={SocialNames.Sismo.toUpperCase()} credentials={creds} />
  );
};
