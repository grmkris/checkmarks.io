import { SocialNames, useModalStore } from "./useModalStore";
import { ICredential, ModalContent } from "../../components/ModalContent";
import { api } from "../../utils/api";
import { useIden3DID } from "../iden3/useIden3DID";

export const TwitterModal = () => {
  const { data, close } = useModalStore((state) => ({
    data: state.data,
    close: state.closeModal,
  }));
  const did = useIden3DID();

  const twitterVC = api.did.connectTwitter.useQuery(
    {
      did: did.data?.did.toString() ?? "",
    },
    {
      enabled: !!did.data?.did,
    }
  );

  console.log(twitterVC.data?.vc);

  const creds: ICredential[] = [
    {
      text: "Account name: kris",
      action: () => {},
    },
    {
      text: "Joined: 2012-12-12",
      action: () => {},
    },
    {
      text: "Number of followers: 2232",
      action: () => {},
    },
    {
      text: "Number of tweets: 123",
      action: () => {},
    },
    {
      text: "Number of likes: 200",
      action: () => {},
    },
    {
      text: "Number of retweets: 200 ",
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
