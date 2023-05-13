import { SocialNames, useModalStore } from "./useModalStore";
import { ICredential, ModalContent } from "../../components/ModalContent";
import { DataLabel } from "./DiscordModal";

export const LensModal = () => {
  const { data, close } = useModalStore((state) => ({
    data: state.data,
    close: state.closeModal,
  }));

  const creds: ICredential[] = [
    {
      text: <DataLabel label={"Lens handle"} data={"kris0.lens"} />,
      action: () => {},
    },
    {
      text: <DataLabel label={"Number of followers"} data={"350"} />,
      action: () => {},
    },
    {
      text: <DataLabel label={"Number of posts"} data={"100"} />,
      action: () => {},
    },
  ];
  return (
    <ModalContent title={SocialNames.Lens.toUpperCase()} credentials={creds} />
  );
};
