import { SocialNames, useModalStore } from "./useModalStore";
import { ICredential, ModalContent } from "../../components/ModalContent";

export const TwitterModal = () => {
  const { data, close } = useModalStore((state) => ({
    data: state.data,
    close: state.closeModal,
  }));

  const creds: ICredential[] = [
    {
      text: "Number of followers ",
      action: () => {},
    },
    {
      text: "Number of tweets ",
      action: () => {},
    },
    {
      text: "Number of likes ",
      action: () => {},
    },
    {
      text: "Number of retweets ",
      action: () => {},
    },
  ];
  return (
    <ModalContent
      title={SocialNames.Twitter.toUpperCase()}
      credentials={creds}
    />
  );
};