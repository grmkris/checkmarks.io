import { SocialNames, useModalStore } from "./useModalStore";
import { ICredential, ModalContent } from "../../components/ModalContent";
import { DataLabel } from "./DiscordModal";

export const FacebookModal = () => {
  const { data, close } = useModalStore((state) => ({
    data: state.data,
    close: state.closeModal,
  }));

  const creds: ICredential[] = [
    {
      text: <DataLabel label={"Facebook name"} data={"Kristjan Grm"} />,
      action: () => {},
    },
    {
      text: <DataLabel label={"Number of friends"} data={"420"} />,
      action: () => {},
    },
    {
      text: <DataLabel label={"Number of posts"} data={"42069"} />,
      action: () => {},
    },
    {
      text: <DataLabel label={"Number of likes"} data={"9001"} />,
      action: () => {},
    },
  ];
  return (
    <ModalContent
      title={SocialNames.Facebook.toUpperCase()}
      credentials={creds}
    />
  );
};
