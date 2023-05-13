import { SocialNames, useModalStore } from "./useModalStore";
import { ICredential, ModalContent } from "../../components/ModalContent";

export const FacebookModal = () => {
  const { data, close } = useModalStore((state) => ({
    data: state.data,
    close: state.closeModal,
  }));

  const creds: ICredential[] = [
    {
      text: "Number of friend ",
      action: () => {},
    },
    {
      text: "Number of post",
      action: () => {},
    },
    {
      text: "Number of likes ",
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