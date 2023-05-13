import { SocialNames, useModalStore } from "./useModalStore";
import { ICredential, ModalContent } from "../../components/ModalContent";

export const LensModal = () => {
  const { data, close } = useModalStore((state) => ({
    data: state.data,
    close: state.closeModal,
  }));

  const creds: ICredential[] = [
    {
      text: "Your lens handle",
      action: () => {},
    },
    {
      text: "Your achievements",
      action: () => {},
    },
  ];
  return (
    <ModalContent title={SocialNames.Lens.toUpperCase()} credentials={creds} />
  );
};
