import { SocialNames, useModalStore } from "./useModalStore";
import { ICredential, ModalContent } from "../../components/ModalContent";
import { DataLabel } from "./DiscordModal";

export const RedditModal = () => {
  const creds: ICredential[] = [
    {
      text: <DataLabel label={"Reddit ID"} data={"Kris0"} />,
      action: () => {},
    },
    {
      text: (
        <DataLabel label={"Karma points (post and comment)"} data={"23232"} />
      ),
      action: () => {},
    },
    {
      text: <DataLabel label={"Number of posts"} data={"100"} />,
      action: () => {},
    },
    {
      text: <DataLabel label={"Number of comments"} data={"1239"} />,
      action: () => {},
    },
    {
      text: <DataLabel label={"Number of followers"} data={"350"} />,
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
