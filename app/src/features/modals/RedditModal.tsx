import { SocialNames, useModalStore } from "./useModalStore";
import { ICredential, ModalContent } from "../../components/ModalContent";

export const RedditModal = () => {
  const { data, close } = useModalStore((state) => ({
    data: state.data,
    close: state.closeModal,
  }));

  const creds: ICredential[] = [
    {
      text: "Karma points (post and comment) ",
      action: () => {},
    },
    {
      text: "Number of posts ",
      action: () => {},
    },
    {
      text: "Number of comments ",
      action: () => {},
    },
    {
      text: "Subredditss ",
      action: () => {},
    },
  ];
  return (
    <ModalContent
      title={SocialNames.Reddit.toUpperCase()}
      credentials={creds}
    />
  );
};